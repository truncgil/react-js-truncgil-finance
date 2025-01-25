import React from 'react';
import TruncgilFinance from './TruncgilFinance';

const App = () => {
    const finance = TruncgilFinance();

    const usdData = finance.getCurrencyData('USD');

    return (
        <div>
            <h1>Truncgil Finance</h1>
            {usdData ? (
                <div>
                    <h2>{usdData.Name}</h2>
                    <p>Buying: {usdData.Buying}</p>
                    <p>Selling: {usdData.Selling}</p>
                </div>
            ) : (
                <p>Veri yükleniyor...</p>
            )}
        </div>
    );
};

export default App;