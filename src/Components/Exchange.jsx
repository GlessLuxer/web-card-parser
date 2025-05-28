import './Exchange.css';

import React, { useState, useEffect } from 'react';

const Exchange = () => {
    const [rate, setRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRate = async () => {
            try {
                const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
                if (!response.ok) {
                    throw new Error('Ошибка получения данных');
                }
                const data = await response.json();
                const usdRate = data.Valute.USD.Value.toFixed(2);
                setRate(usdRate);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRate();
    }, []);

    return (
        <div className="exchange_widget">
            {loading && <p>Загрузка курса...</p>}
            {error && <p>Ошибка: {error}</p>}
            {rate && (
                <div>
                    <p>EXCHANGE</p>
                    <p>
                        1 USD = {rate} RUB
                    </p>
                </div>
            )}
        </div>
    );
};



// function Exchange() {
//     return(
//         <div className="exchange_widget">
//             <a>Exchange widget</a>
//         </div>
//     );
// }

export default Exchange;