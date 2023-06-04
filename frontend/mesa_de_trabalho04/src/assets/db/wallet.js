export async function wallet(newWallet){
  const walletStorage = await JSON.parse(localStorage.getItem('wallet')) || []
  const update = await [...walletStorage, newWallet]
  return (await localStorage.setItem('wallet', JSON.stringify(update)))
}

export const getWalletData = () => {
  const walletData = JSON.parse(localStorage.getItem('wallet')) || [];
  return walletData;
};
