const ConnectToOpera = async () => {
  let provider = null;
  if (typeof (window as any).ariel?.isOpera !== "undefined") {
    provider = window.ariel;
    try {
      await provider.request({ method: "eth_requestAccounts" });
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("Opera not found");
  }
  return provider;
};

export default ConnectToOpera;
