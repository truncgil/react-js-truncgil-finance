import React from 'react';
import TruncgilFinance from './TruncgilFinance';

const App = () => {
    const { getGold, getCryptoCurrency, getCurrencies } = TruncgilFinance();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Altın Verileri</h1>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">İsim</th>
                        <th className="border border-gray-300 p-2">Alış</th>
                        <th className="border border-gray-300 p-2">Satış</th>
                        <th className="border border-gray-300 p-2">Değişim</th>
                        <th className="border border-gray-300 p-2">Tür</th>
                    </tr>
                </thead>
                <tbody>
                    {getGold().map((item, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{item.Name}</td>
                            <td className="border border-gray-300 p-2">{item.Buying}</td>
                            <td className="border border-gray-300 p-2">{item.Selling}</td>
                            <td className="border border-gray-300 p-2">{item.Change}</td>
                            <td className="border border-gray-300 p-2">{item.Type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Kripto Para Verileri</h1>
            <table>
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Alış</th>
                        <th>Satış</th>
                        <th>Değişim</th>
                        <th>Tür</th>
                    </tr>
                </thead>
                <tbody>
                    {getCryptoCurrency().map((item, index) => (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Buying}</td>
                            <td>{item.Selling}</td>
                            <td>{item.Change}</td>
                            <td>{item.Type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Para Birimleri</h1>
            <table>
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Alış</th>
                        <th>Satış</th>
                        <th>Değişim</th>
                        <th>Tür</th>
                    </tr>
                </thead>
                <tbody>
                    {getCurrencies().map((item, index) => (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Buying}</td>
                            <td>{item.Selling}</td>
                            <td>{item.Change}</td>
                            <td>{item.Type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;