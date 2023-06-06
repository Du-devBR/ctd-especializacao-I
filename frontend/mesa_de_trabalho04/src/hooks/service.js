export function submitNewWallet(event){
  event.preventDefault()
  const newWallet = {
    title: title,
    data: data,
    price: price,
    type: type,
    description: description,
  }

  wallet(newWallet)
}

// export function clearFields(){
//   const wallet = {
//     title: '',
//     data: '',
//     price: '',
//     type: '',
//     description: '',
//   }

//   return wallet
// }
