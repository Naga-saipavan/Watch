function confirmSubmit(){
  //let sum = document.getElementById('total-cost');
  //document.getElementById("total-cost").innerHTML = newArr;
    const namey = document.getElementById('fname').value;
    const mobilenumber = document.getElementById('pnum').value;
    const mail = document.getElementById('email').value;
    const address = document.getElementById('adr').value;
    const state = document.getElementById('State').value;
    const ccnum = document.getElementById('ccnum').value;
    // const expmonth = document.getElementById('expmonth').value;
    // const expyear = document.getElementById('expyear').value;
     const cvv = document.getElementById('cvv').value;
    const city = document.getElementById('city').value;
    const caddress = document.getElementById('cadr').value;
    const pincode = document.getElementById('code').value;
    // Retrieving the total cost value from sessionStorage
    const Totalcost = sessionStorage.getItem('newArr');
    const cost = document.getElementById('total-cost');
    cost.innerText = Totalcost;

    // const cost = document.getElementById('total-cost');
    // cost.innerText = localStorage.getItem('Totalcost');
    // let cost = sessionStorage.getItem("newArr");
 
    // sessionStorage.setItem('total-cost',Totalcost);
    localStorage.setItem('fname', namey);
    localStorage.setItem('code', pincode);
   // sessionStorage.getItem("sum", sum);
    localStorage.setItem('pnum',mobilenumber);
    localStorage.setItem('email', mail);
    localStorage.setItem('adr', address);
    localStorage.setItem('State', state);
    localStorage.setItem('city', city);
    localStorage.setItem('cadr', caddress);
    localStorage.setItem('ccnum', ccnum);
    //localStorage.setItem('expmonth', expmonth);
    //localStorage.setItem('expyear', expyear);
    localStorage.setItem('cvv', cvv);
    // document.getElementById("newArrDisplay").textContent = cost;


    // cost = JSON.parse(cost).map(Number);
    
//    let sum = sessionStorage.getItem("sum");
    clearPage();
    bill();
}

// const cost = JSON.parse(sessionStorage.getItem('newArr'));


// cost.forEach(item => {  
//     document.getElementById("container").innerHTML += item + "<br>";
// });


function clearPage() {
    // const orderSummary = document.getElementById('order-summary');
    // while (orderSummary.firstChild) {
    //   orderSummary.removeChild(orderSummary.firstChild);
    // }
  
    // const shippingInfo = document.getElementById('shipping-info');
    // while (shippingInfo.firstChild) {
    //   shippingInfo.removeChild(shippingInfo.firstChild);
    // }
  
    const paymentInfo = document.getElementById('payment-info');
    while (paymentInfo.firstChild) {
      paymentInfo.removeChild(paymentInfo.firstChild);
    }
  
    // const orderTotal = document.getElementById('order-total');
    // while (orderTotal.firstChild) {
    //   orderTotal.removeChild(orderTotal.firstChild);
    // }
  
  //   const termsConditions = document.getElementById('terms-conditions');
  //   while (termsConditions.firstChild) {
  //     termsConditions.removeChild(termsConditions.firstChild);
  //   }
  
    const placeOrderButton = document.querySelector('button[onclick="confirmSubmit()"]');
    placeOrderButton.parentNode.removeChild(placeOrderButton);
  }




// function clearPage(){
//     while (document.body.firstChild) {
//         document.body.removeChild(document.body.firstChild);       
//     }
// }
// function bill() {
//     const namey = localStorage.getItem('fname');
//     const mobilenumber = localStorage.getItem('pnum');
//     const caddress = localStorage.getItem('cadr');

//     // const state = localStorage.getItem('State');


//     const nameElement = document.createElement('p');
//     nameElement.textContent = `Name: ${namey}`;
//     document.body.appendChild(nameElement);

//     const mobilenumberElement = document.createElement('p');
//     mobilenumberElement.textContent = `Phone number: ${mobilenumber}`;
//     document.body.appendChild(mobilenumberElement);

//     const addressElement = document.createElement('p');
//     addressElement.textContent = `Shipping Address: ${caddress}`;
//     document.body.appendChild(addressElement);
// } 