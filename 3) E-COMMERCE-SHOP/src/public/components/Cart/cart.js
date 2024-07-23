function waitForElement(selector, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const endTime = Date.now() + timeout;

    (function check() {
      const el = document.querySelector(selector);
      if (el) return resolve(el);
      if (Date.now() > endTime) return reject("Element not found");
      setTimeout(check, 100);
    })();
  });
}

const ShowCartProduct = async () => {
  try {
    const cartBox = await waitForElement(".shop");
    let CartData = JSON.parse(localStorage.getItem("CartData")) || [];

    cartBox.innerHTML = "";

    let price = 0;
    CartData.forEach((p) => {
      price += +p.price;
      let cart = `
                <div class="box">
                    <img src="${p.img}" alt="${p.name}">
                    <div class="content">
                        <h3>${p.name}</h3>
                        <h4>Price: ₹${p.price}</h4>
                        <p class="unit">Quantity: <input name="val" type="number" value="1" readonly></p>
                        <p class="btn-area" onclick="delCartItem(${p.id})">
                            <i aria-hidden="true" class="fa fa-trash" ></i> 
                            <span class="btn2">Remove</span>
                        </p>
                    </div>
                </div>
            `;
      cartBox.innerHTML += cart;
    });
    document.querySelector(".cart-total").textContent = `₹${price}`;
    document.querySelector(".cart-subtotal").textContent = `₹${price}`;
  } catch (error) {
    console.warn(error);
  }
};

function delCartItem(id) {
  let CartData = JSON.parse(localStorage.getItem("CartData")) || [];
  let UpCartData = CartData.filter((item) => item.id !== id);
  localStorage.setItem("CartData", JSON.stringify(UpCartData));
  ShowCartProduct();
}
