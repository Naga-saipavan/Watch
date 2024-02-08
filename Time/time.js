




// console.log('h')
  let i = 0;
  // Remove the key from sessionStorage
//   sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", value)
 function add(t1, p1){
    if ( i < 7) {
        const element = i;
        
        // let cartStorage = []
        // let title =  document.getElementById('`${t}`').innerHTML;
        // let price =  document.getElementById('`${p}`').innerHTML;
        
        
        // cartStorage.push(title); cartStorage.push(price)
        // console.log(cartStorage)
        // sessionStorage.setItem('0', JSON.stringify(cartStorage))  
        
        sessionStorage.setItem(element, `${t1},${p1}`)
        
        // console.log(`${t},${p}`)
        // console.log('safdasfsza')
        // console.log(sessionStorage.getItem("title"));
        
        // console.log(title)
i++;
    }
 }

  function addToCart(t, p) {
    if ( i < 7) {
        const element = i;
        
        // let cartStorage = []
        // let title =  document.getElementById('`${t}`').innerHTML;
        // let price =  document.getElementById('`${p}`').innerHTML;
        
        
        // cartStorage.push(title); cartStorage.push(price)
        // console.log(cartStorage)
        // sessionStorage.setItem('0', JSON.stringify(cartStorage))  
        
        sessionStorage.setItem(element, `${t},${p}`)
        
        console.log(`${t},${p}`)
        // console.log('safdasfsza')
        // console.log(sessionStorage.getItem("title"));
        
        // console.log(title)
i++;
    }
}


//   addToCart(t, p);
//   export {i};
//   i++;
  // function emailStorage(m,p) {
    
  //   let mailPage = [];
  //   let m = document.getElementById('`$mail`').innerHTML;
  //   let p = document.getElementById('`$passcode`').innerHTML;
    
  //   mailPage.pushe(m, p);
  //   console.log(mailPage);
  //   sessionStorage.setItem('a',JSON.stringify(mailPage));
  // }