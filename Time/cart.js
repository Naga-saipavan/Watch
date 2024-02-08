// function myFunction() {
// let i = 0;
// }
// sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", value)
// import {i} from './time.js';
// console.log(i);




let arr = [];
function k() {

  
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    console.log(key);
    
    let pname = document.getElementById('product');
  let pprice = document.getElementById('amount');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  
  
  let value = sessionStorage.getItem(i).split(',');
  div1.innerHTML = value[0];
  div2.innerHTML = value[1];
  pname.appendChild(div1);
  pprice.appendChild(div2);
  arr.push(parseInt(value[1]))
  let newArr =  arr.reduce((a, b) =>  a + b )
  console.log(newArr)
  document.getElementById('sum').innerHTML= newArr;
}

}
k();

// sessionStorage.setItem('newArr', JSON.stringify(newArr));

sessionStorage.setItem('newArr', Totalcost);

// sessionStorage.setItem('newArr', newArr);





  // let total = 0;
  // let pname;
  // let pprice;
  // for (let i = 0; i < sessionStorage.length; i++) {
  //   let key = sessionStorage.key(i);
  //   if (!key || !sessionStorage.hasOwnProperty(key)) {
  //     continue;
  //   }
  //   console.log(key);
  //   pname = document.getElementById(key);
  //   pprice = document.getElementById(`amount_${key}`);
  //   if (!pname || !pprice) {
  //     console.log(`Element with id ${key} or amount_${key} not found`);
  //     continue;
  //   }
  //   let value = sessionStorage.getItem(key).split(',');
  //   if (value.length < 2) {
  //     console.log(`Item ${key} has invalid format`);
  //     continue;
  //   }
  //   div1.innerHTML = value[0];
  //   div2.innerHTML = value[1]
  //   pname.appendChild(div1);
  //   pprice.appendChild(div2);
  //   total += parseInt(value[1]);
  // }
  // console.log(`Total: ${total}`);
  // document.getElementById('sum').innerHTML = total;















// let sum = value
// pname
// i++;

//sessionStorage.setItem("sum", newArr);



/*
function addToCart() {
    // Get the values of the input elements
    var product = document.getElementsByName("card-title").value;
    var amount = document.getElementsByName("cost").value;

    // Calculate the sum
    var sum = parseInt(amount);

    // Display the sum
    document.getElementById("sum").innerHTML = "Sum: " + sum;

    // Store the product and amount in local storage
    localStorage.setItem("product", product);
    localStorage.setItem("amount", amount);
}



function addToCart(element) {
    var productParent = $(element).closest('div.card-body');
  
    var price = $(productParent).find('.price span').text();
    var productName = $(productParent).find('.productname').text();
    var quantity = $(productParent).find('.product-quantity').val();

    var price = document.getElementById('price_' + element.id.split('_')[1]).innerText; 
  
    var cartItem = {
      productName: productName,
      price: price,
      quantity: quantity
    };
    var cartItemJSON = JSON.stringify(cartItem);
  
    var cartArray = new Array();
    // If javascript shopping cart session is not empty
    if (localStorage.getItem('shopping-cart')) {
      cartArray = JSON.parse(localStorage.getItem('shopping-cart'));
    }
    cartArray.push(cartItemJSON);
  
    var cartJSON = JSON.stringify(cartArray);
    localStorage.setItem('shopping-cart', cartJSON);
    showCartTable();
  }*/