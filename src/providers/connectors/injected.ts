const ConnectToInjected = async () => {
  let provider = null;
  if (typeof window.ariel !== 'undefined') {
    provider = window.ariel;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else if (window.celo) {
    provider = window.celo;
  } else {
    throw new Error("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToInjected;
