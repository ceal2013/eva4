const API_KEY = 'YOUR_ALPHA_VANTAGE_API_KEY';
const BASE_URL = 'https://www.alphavantage.co/query';

const fetchExchangeRate = async (fromSymbol, toSymbol) => {
  try {
    const response = await fetch(`${BASE_URL}?function=FX_DAILY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Error fetching exchange rate');
    }
    const data = await response.json();
    
    const lastDate = Object.keys(data['Time Series FX (Daily)'])[0];
    const lastData = data['Time Series FX (Daily)'][lastDate];
    
    return {
      fromSymbol,
      toSymbol,
      value: lastData['4. close'],
      date: lastDate
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      fromSymbol,
      toSymbol,
      value: 'N/A',
      date: 'N/A'
    };
  }
};

export const fetchEconomicIndicators = async () => {
  const usdToClp = await fetchExchangeRate('USD', 'CLP');
  const eurToClp = await fetchExchangeRate('EUR', 'CLP');
  
  return [usdToClp, eurToClp];
};



  