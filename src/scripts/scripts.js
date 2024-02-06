
const btcValue = document.getElementById('bitcoin-value')
const etcValue = document.getElementById('etherium-value')
const xrpValue = document.getElementById('xrp-value')
const btcChange24 = document.getElementById('btcChange24')
const etcChange24 = document.getElementById('etcChange24')
const xrpChange24 = document.getElementById('xrpChange24')


/// NEws


const newsNoticesCoins = document.getElementById('news')


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



  })
  .catch(err => {
    console.error('Erro:', err)
  });



  /// NEWS


  const newsCoin = 'https://min-api.cryptocompare.com/data/v2/news/?lang=PT&api_key={b150b724c060836641fa9db9c2d9f68583568869b53299350380056bf6fc51e2}'

  fetch(newsCoin)
  .then(resposta => {
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`)
    }
    return resposta.json()
  })
  .then(data => {
   
  const news1 = data.Data[0].title
  const news2 = data.Data[1].title

  newsNoticesCoins.textContent = (`Noticias ${news2}`)

  console.log(newsCoin)



  })
  .catch(err => {
    console.error('Erro:', err)
  });







  