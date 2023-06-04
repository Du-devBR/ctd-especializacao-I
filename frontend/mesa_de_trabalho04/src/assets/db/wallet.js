export const wallet = (newWallet) => {
  const walletStorage = JSON.parse(localStorage.getItem('wallet')) || []
  const update = [...walletStorage, newWallet]
  localStorage.setItem('wallet', JSON.stringify(update))
}

export const getWalletData = () => {
  const walletData = JSON.parse(localStorage.getItem('wallet')) || [];
  return walletData;
};
