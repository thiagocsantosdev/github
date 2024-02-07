
const btcValue = document.getElementsByClassName('bitcoin-value')
const etcValue = document.getElementsByClassName('etherium-value')
const xrpValue = document.getElementsByClassName('xrp-value')
const btcChange24 = document.getElementById('btcChange24')
const etcChange24 = document.getElementById('etcChange24')
const xrpChange24 = document.getElementById('xrpChange24')

// Market





/// NEws





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
    const etcChange24hdata = data.data[2].percent_change_24h
    const xrpChange24hdata = data.data[6].percent_change_24h

    const priceEtcUsd = data.data[1].price_usd
    const priceXrpUsd = data.data[6].price_usd
    

    const btcBRL = priceBtcUsd * dolarAtual
    const etcBRL = priceEtcUsd * dolarAtual
    const xrpBRL = priceXrpUsd * dolarAtual
    

    btcValue.textContent = `R$${btcBRL.toFixed(2)}`
    etcValue.textContent = `R$ ${etcBRL.toFixed(2)}`
    xrpValue.textContent = `R$ ${xrpBRL.toFixed(2)}`


    //Coloração da informação de mudança de valor nas ultimas 24H
   
   //BTC
    if (btcChange24hdata < 0){
      btcChange24.style.color ='#ee7777'
   }else{
    btcChange24.style.color='#94ff94'
   }

   btcChange24.textContent = `Ùltimas 24hrs:  ${btcChange24hdata}%`

    
   //ETC

   if(etcChange24hdata < 0){
     etcChange24.style.color='#ee7777'
   }else{
    etcChange24.style.color='#94ff94'
   }

   etcChange24.textContent = `Ùltimas 24hrs:  ${etcChange24hdata}%`


   
  //xrp

  if(xrpChange24hdata< 0){
    xrpChange24.style.color='#ee7777'
  }else{
    xrpChange24.style.color="#94ff94"
  }


  xrpChange24.textContent= `Ùltimas 24hrs:  ${xrpChange24hdata}%`



  // Market

  for (const btcElement of btcValue) {
    btcElement.textContent = `R$: ${btcBRL.toFixed(2)}`;
  }

  for (const etcElement of etcValue) {
    etcElement.textContent = `R$: ${etcBRL.toFixed(2)}`;
  }

  for (const xrpElement of xrpValue) {
    xrpElement.textContent = `R$: ${xrpBRL.toFixed(2)}`;
  }






  })
  .catch(err => {
    console.error('Erro:', err)
  });



  /// NEWS


  





  