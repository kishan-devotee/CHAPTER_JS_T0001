

const checkout = async() => {
    const checkoutContainer = await waitForElement('.container');  //cart js
    const pay_msg = await waitForElement('.pay-success');  //cart js
    console.log(checkoutContainer);

    checkoutContainer.style.display = 'none';
    pay_msg.style.display = 'block'; 

    localStorage.removeItem('CartData')

    setTimeout(() => {
        home()
    }, 4000);
}