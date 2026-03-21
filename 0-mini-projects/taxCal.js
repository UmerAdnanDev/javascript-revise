function Calculate(){
  let amount = document.querySelector(".js-amount")
  let tax = document.querySelector(".js-tax")
  let ans = document.querySelector(".js-ans")
  let amount_value = Number(amount.value)
  let tax_value = Number(tax.value)
  if(amount_value && tax_value){
    let result = amount_value + (amount_value*tax_value/100)
    ans.innerHTML = `Amount: ${amount_value} after ${tax_value} % tax = ${result}`
  } 
  else{
    ans.innerHTML ="Invalid Input!!!"
  }

}