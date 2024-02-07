
const btcValue = document.getElementsByClassName('btc-value')
const ethValue = document.getElementsByClassName('eth-value')
const xrpValue = document.getElementsByClassName('xrp-value')
const solValue = document.getElementsByClassName('sol-value')
const adaValue = document.getElementsByClassName('ada-value')
const dogValue = document.getElementsByClassName('dog-value')



const btcChange24 = document.getElementById('btcChange24')
const ethChange24 = document.getElementById('ethChange24')
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


   //Price of criptos
    const priceBtcUsd = data.data[0].price_usd
    const priceEthUsd = data.data[1].price_usd
    const priceXrpUsd = data.data[7].price_usd
    const priceSolUsd= data.data[4].price_usd
    const priceAdaUsd= data.data[8].price_usd
    const priceDogUsd= data.data[10].price_usd

   //Price change 24h
    const btcChange24hdata = data.data[0].percent_change_24h
    const ethChange24hdata = data.data[2].percent_change_24h
    const xrpChange24hdata = data.data[8].percent_change_24h

    
    
    //Transform VALUE USD TO BRL
    const btcBRL = priceBtcUsd * dolarAtual
    const ethBRL = priceEthUsd * dolarAtual
    const xrpBRL = priceXrpUsd * dolarAtual
    const solBRL = priceSolUsd * dolarAtual
    const adaBRL = priceAdaUsd * dolarAtual
    const dogBRL = priceDogUsd * dolarAtual
    



    btcValue.textContent = `R$${btcBRL.toFixed(2)}`
    ethValue.textContent = `R$ ${ethBRL.toFixed(2)}`
    xrpValue.textContent = `R$ ${xrpBRL.toFixed(2)}`


    //Coloração da informação de mudança de valor nas ultimas 24H
   
   //BTC
    if (btcChange24hdata < 0){
      btcChange24.style.color ='#ee7777'
   }else{
    btcChange24.style.color='#94ff94'
   }

   btcChange24.textContent = `Ùltimas 24hrs:  ${btcChange24hdata}%`

    
   //ETH

   if(ethChange24hdata < 0){
     ethChange24.style.color='#ee7777'
   }else{
    ethChange24.style.color='#94ff94'
   }

   ethChange24.textContent = `Ùltimas 24hrs:  ${ethChange24hdata}%`


   
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

  for (const ethElement of ethValue) {
    ethElement.textContent = `R$: ${ethBRL.toFixed(2)}`;
  }

  for (const xrpElement of xrpValue) {
    xrpElement.textContent = `R$: ${xrpBRL.toFixed(2)}`;
  }

  for (const solElement of solValue) {
  solElement.textContent = `R$: ${solBRL.toFixed(2)}`;
  }

  for (const adaElement of adaValue){
    adaElement.textContent = `R$: ${adaBRL.toFixed(2)}`;
  }

  for (const dogElement of dogValue){
    dogElement.textContent = `R$: ${dogBRL.toFixed(2)}`;
  }





  })
  .catch(err => {
    console.error('Erro:', err)
  });



  /// NEWS


  





  