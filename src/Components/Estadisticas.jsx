import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const Estadisticas = ({stats}) => {

    const data = {
        labels:stats.map((stat)=>stat.stat.name),
        datasets:[
            {
                label:'Estadisticas',
                data:stats.map((stat)=>stat.base_stat),
                backgroundColor:'rgba(75, 192, 192, 0.6)',
                borderWidth:1
            }
        ]
    }
  return (
    <Bar data={data}/>
  )
}
