import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 7],
  ["Studies", 2],
  ["Meal preparation", 1.2],
  ["Parenting", 6],
  ["Watch TV", 0.2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"800px"}
    />
  );
}
/* function App() {
  return (
    <>
      
    </>
  );
} */

export default App;
