import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


const Graph = () => {

   const [chartData, setChartData] = useState({});
   console.log(chartData)
   console.log(chartData.data)
   const chart = () => {
      let weightArr = [];
      let bfArr = [];
      let dateArr = [];
      axios
        .get("http://localhost:9090/pt_server/index.php")
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            weightArr.push(parseInt(dataObj.weight));
            bfArr.push(parseInt(dataObj['body_fat']));
            dateArr.push(dataObj.date);
            console.log(weightArr);
            console.log(dateArr);
            console.log(bfArr);
          }
         });
      setChartData({
         labels: dateArr,
         datasets: [{
               data: weightArr,
               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
               borderWidth: 4,
               yAxisID: 'left-y-axis'
            }, {
               data: bfArr,
               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
               borderWidth: 4,
               yAxisID: 'right-y-axis'
            }]
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
                     type: 'linear',
                     display: true,
                     position: 'left',
                     id: 'left-y-axis',
                     labels: {
                        show: true
                     },
                     ticks: {
                        beginAtZero: true
                     }
               },
               {
                     type: 'linear',
                     display: true,
                     position: 'right',
                     gridLines: {
                        display: false
                     },
                     id: 'right-y-axis',
                     labels: {
                        show: true
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