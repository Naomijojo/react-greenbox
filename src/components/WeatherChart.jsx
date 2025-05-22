import { weatherApi } from "../assets/api/weather";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const cities = ["Taipei", "Tokyo"]

const WeatherChart = () => {
  const data = [
    { name: 'Jan', uv: 30 },
    { name: 'Feb', uv: 30 },
    { name: 'Mar', uv: 30 },
    { name: 'Apr', uv: 30 },
    { name: 'May', uv: 30 },
    { name: 'Jun', uv: 30 },
    { name: 'Jul', uv: 120 },
    { name: 'Aug', uv: 180 },
    { name: 'Sep', uv: 200 },
    { name: 'Oct', uv: 30 },
    { name: 'Nov', uv: 30 },
    { name: 'Dec', uv: 30 },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default WeatherChart
