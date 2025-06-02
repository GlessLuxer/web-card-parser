import "./Graph.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = () => {
  // Исправляем инициализацию состояния
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/cards")
      .then((response) => response.json())
      .then((cards) => {
        // Преобразуем данные в формат, понятный Recharts
        const formattedData = cards.map((card) => ({
          date: card.Date,
          price: card.Price,
          name: card.Name,
        }));
        console.log(formattedData);
        setData(formattedData);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <LineChart
          width={1000}
          height={550}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="date" type="category" tick={{ fontSize: 12 }} />
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(tick) => `${tick} руб`} // Добавляем символ валюты
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            contentStyle={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "8px",
              backgroundColor: "black",
              color: "black",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      ) : (
        <div>Загрузка данных...</div>
      )}
    </div>
  );
};

export default Graph;
