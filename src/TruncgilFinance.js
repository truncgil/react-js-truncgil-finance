import { useEffect, useState } from 'react';
import axios from 'axios';

const TruncgilFinance = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://finance.truncgil.com/api/today.json');
                setData(response.data.Rates);
            } catch (error) {
                console.error("API çağrısında hata:", error);
            }
        };

        fetchData();
    }, []);

    const getCurrencyData = (currency) => {
        return data ? data[currency] : null;
    };

    const getGold = () => {
        return data ? Object.values(data).filter(item => item.Type === 'Gold') : [];
    };

    const getCryptoCurrency = () => {
        return data ? Object.values(data).filter(item => item.Type === 'CryptoCurrency') : [];
    };

    const getCurrencies = () => {
        return data ? Object.values(data).filter(item => item.Type === 'Currency') : [];
    };

    return { getCurrencyData, getGold, getCryptoCurrency, getCurrencies };
};

export default TruncgilFinance;