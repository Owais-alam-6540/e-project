/*increment decrement*/
      
let decrement = document.querySelector('#dec')
let inc = document.querySelector('#inc')
let qty = document.querySelector('#qty')
let original_price = Number.parseFloat(price.innerText)


inc.addEventListener('click',()=>{
  let quantity = Number.parseInt(qty.textContent)
  qty.innerText = ++quantity
  price.innerText =  original_price*quantity
  
})

dec.addEventListener('click',()=>{
  let quantity = Number.parseInt(qty.textContent)
  if(quantity > 1){
    qty.innerText = --quantity
    price.innerText = original_price*quantity
  }
  
})

/*increment decrement*/
