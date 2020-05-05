import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


const Graph = () => {

   const [chartData, setChartData] = useState({});

   const chart = () => {
      let weightArr = [];
      let dateArr = [];
      axios
        .get("http://localhost:9090/pt_server/index.php")
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            weightArr.push(parseInt(dataObj.weight));
            dateArr.push(dataObj.date);
            console.log(dateArr);
          }
         });
      setChartData({
         labels: dateArr,
         datasets: [
            {
               label: 'Level of Thiccness',
               data: weightArr,
               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
               borderWidth: 4
            }
         ]
      });
   }
   useEffect(() => {
      chart();
   }, [])

   return (
      <>
         <Line
         data={chartData}
         options={{
         responsive: true,
         title: { text: "THICCNESS SCALE", display: true },
         scales: {
         yAxes: [
            {
            ticks: {
               autoSkip: true,
               maxTicksLimit: 10,
               beginAtZero: true
            },
            gridLines: {
               display: false
            }
            }
         ],
         xAxes: [
            {
            gridLines: {
               display: false
            }
            }
         ]
         }
         }}
         />
      </>
      );
   }

export default Graph;
