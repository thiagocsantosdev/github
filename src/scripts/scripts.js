
const btcValue = document.getElementById('bitcoin-value')
const etcValue = document.getElementById('etherium-value')
const xrpValue = document.getElementById('xrp-value')
const btcChange24 = document.getElementById('btcChange24')


const apiDolar = 'https://economia.awesomeapi.com.br/json/last/usd'
const apiBtc = ' https://api.coinlore.net/api/tickers/'

fetch(apiDolar)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição ; ${resposta.status}`)
      }
      return resposta.json()
    })
    .then(data =>{

       dolarAtual = data.USDBRL.high;

    })
  .catch(err => {
    console.error('Erro:', err)
  });



fetch(apiBtc)
  .then(resposta => {
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`)
    }
    return resposta.json()
  })
  .then(data => {
   
    const priceBtcUsd = data.data[0].price_usd

   
    const btcChange24hdata = data.data[0].percent_change_24h
    const priceEtcUsd = data.data[1].price_usd
    const priceXrpUsd = data.data[6].price_usd
    

    const btcBRL = priceBtcUsd * dolarAtual
    const etcBRL = priceEtcUsd * dolarAtual
    const xrpBRL = priceXrpUsd * dolarAtual
    

    btcValue.textContent = `R$${btcBRL.toFixed(2)}`
    etcValue.textContent = `R$ ${etcBRL.toFixed(2)}`
    xrpValue.textContent = `R$ ${xrpBRL.toFixed(2)}`


    
   if (btcChange24hdata < 0){
      btcChange24.style.color ='red'
   }else{
    btcChange24.style.color='green'
   }

   btcChange24.textContent = `Ùltimas 24hrs:  ${btcChange24hdata}%`

    



  })
  .catch(err => {
    console.error('Erro:', err)
  });

  