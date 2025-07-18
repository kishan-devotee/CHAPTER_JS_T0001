const ShowProduct = async () => {
    try {
        const response = await fetch('/src/public/data/data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the products:', error);
    }
};


const AddToCart = async(id) => {
    let CartData = JSON.parse(localStorage.getItem('CartData')) || [];
    let data = await ShowProduct();
    let cur_product = data.find(p => p.id === id);
    CartData.push(cur_product);
    localStorage.setItem('CartData', JSON.stringify(CartData));
    Cart();
}

const sProduct = async (id) => {
    let loginCheck = JSON.parse(localStorage.getItem('LoginData'));
    if (loginCheck === null) {
        signIn();
        return;
    }

    let data = await ShowProduct();
    let product_area = await waitForElement('#product-area');
    let cur_product = data.find(p => p.id === id);

    product_area.innerHTML = '';
    product_area.innerHTML = `
        <section id="prodetails" class="section-p1">
            <div class="single-pro-image">
                <img src="${cur_product.img}" width="100%" id="MainImg" alt="product detail">
            </div>
            <div class="single-pro-details">
                <h6>${cur_product.category}</h6>
                <h4>${cur_product.name}</h4>
                <h2>₹${cur_product.price}</h2>
                <input type="number" value="1">
                <button class="normal" onclick="AddToCart(${cur_product.id})">Add To Cart</button>
                <h4>Product Detail</h4>
                <span>Elevate your living space with our exquisite collection of solid wood side tables, meticulously crafted to blend seamlessly into any room. Constructed with premium materials, each table boasts durability and stability, making it an ideal addition to both your living room and bedroom furniture ensemble. Available in a variety of finishes, including classic brown.</span>
            </div>
        </section>
    `;
}

const fetchData = async () => {
    let data = await ShowProduct();
    renderProducts(data);
};

const applyFilters = async () => {
    let data = await ShowProduct();
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const quality = document.getElementById('quality-filter').value;

    let filteredData = data;

    if (category !== 'all') {
        filteredData = filteredData.filter(p => p.category === category);
    }

    if (priceRange) {
        const maxPrice = priceRange;
        filteredData = filteredData.filter(p => p.price <= maxPrice);
        document.getElementById('price-value').textContent = `₹0 - ₹${priceRange}`;
    }

    if (quality !== 'all') {
        filteredData = filteredData.filter(p => p.quality === quality);
    }

    renderProducts(filteredData);
};

const renderProducts = async(data) => {
    let product_area = await waitForElement('#product-area');
    product_area.innerHTML = '';

    data.forEach(p => {
        let product = `
            <div class="pro">
                <img src="${p.img}" alt="product1">
                <div class="des">
                    <span>${p.category}</span>
                    <h5>${p.name}</h5>
                    <div class="star">
                        ${'<i class="fas fa-star"></i>'.repeat(p.quality === 'Premium' ? 5 : p.quality === 'High' ? 4 : p.quality === 'Luxury' ? 4 : 3)}
                    </div>
                    <h4>₹${p.offerPrice}</h4>
                    <span class="original-price">₹${p.price}</span><span class="off-disc"> 20% Off</span>
                </div>
                <a href="#"><i class="fal fa-eye eye" onclick="sProduct(${p.id})"></i></a>
            </div>
        `;
        product_area.innerHTML += product;
    });
};

fetchData();
