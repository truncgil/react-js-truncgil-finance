import React, { useEffect, useState } from 'react';
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

    return { getCurrencyData };
};

export default TruncgilFinance; 