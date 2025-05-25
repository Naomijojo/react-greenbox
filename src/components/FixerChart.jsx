import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fixerApi } from "@/assets/api/fixer";

const FixerChart = () => {
  const [data, setData] = useState([])
  const fetchSymbols = "EUR,GBP,JPY,CAD,AUD,CHF,CNY,HKD,SGD,INR,BRL,ZAR"


  const fetchData = async () => {
    const results =  await fixerApi.getRates(fetchSymbols)
    console.log("查看api返回資料:", results)

    if(results && results.rates) {
      const chartData = Object.keys(results.rates).map( key=> ({
        name:key,
        rate:results.rates[key]
      }))
      setData(chartData)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <h2 className="text-center font-bold">FixerApi匯率</h2>
      {data.length === 0 ? (
        <p>資料沒載入</p>
      ) : (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}  
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rate" stackId="a" fill="#82ca9d" name="USD" />
          <Bar dataKey="rate" stackId="a" fill="#8884d8" name="相對於USD的匯率" />
        </BarChart>
      </ResponsiveContainer>
      )}
    </>
  )
}

export default FixerChart
