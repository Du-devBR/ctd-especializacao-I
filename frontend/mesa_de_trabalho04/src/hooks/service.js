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
