export default function initFetchBitcoin() {}

async function fetchBitcoin(url) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJSON = await bitcoinResponse.json();

    const btcPreco = document.querySelector(".btcPreco");
    btcPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
  } catch (erro) {
    // console.log(Error(erro));
  }
}

fetchBitcoin("https://blockchain.info/ticker");
