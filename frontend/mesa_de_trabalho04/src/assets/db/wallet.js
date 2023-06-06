
export async function wallet(newWallet){
  const walletStorage = await JSON.parse(localStorage.getItem('wallet')) || []
  const update = await [...walletStorage, newWallet]
  return (await localStorage.setItem('wallet', JSON.stringify(update)))
}

export async function getWalletData() {
  const walletData = JSON.parse(localStorage.getItem('wallet')) || []
  return (await walletData)
}
