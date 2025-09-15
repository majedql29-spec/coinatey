async function BitUpdataPress() {
  try {
    const Bres = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const dataB = await Bres.json();
    const priceB = dataB.bitcoin.usd;

    let priceStrB = priceB.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 5
    });

    document.getElementById('cons-bet').textContent = "$" + priceStrB;
  } catch {
    document.getElementById('cons-bet').textContent = "- - - , - - -";
  }
}

async function EthUpdataPress() {
  try{
    const Eres = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const dataE = await Eres.json();
    const priceE = dataE.ethereum.usd;

    let priceStrE = priceE.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 5
    });

    document.getElementById('cons-eth').textContent = "$" + priceStrE;
  } catch {
    document.getElementById('cons-eth').textContent = "- - - , - - -"
  }
}

async function SolUpdataPress() {
  try{
    const Sres = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const dataS = await Sres.json();
    const priceS = dataS.solana.usd;

    let priceStrS = priceS.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 5
    });

    document.getElementById('cons-sol').textContent = "$" + priceStrS;
  } catch {
    document.getElementById('cons-sol').textContent = "- - - , - - -"
  }
}

async function TROUpdataPress() {
  try{
    const Tres = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd');
    const dataT = await Tres.json();
    const priceT = dataT.tron.usd;

    let priceStrT = priceT.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 5
    });

    document.getElementById('cons-tro').textContent = "$" + priceStrT;
  } catch {
    document.getElementById('cons-tro').textContent = "- - - , - - -"
  }
}


BitUpdataPress();
EthUpdataPress();
SolUpdataPress();
TROUpdataPress();

setInterval(BitUpdataPress, 80000);
setInterval(EthUpdataPress, 80000);
setInterval(SolUpdataPress, 80000);
setInterval(TROUpdataPress, 80000);
