import { Box } from '@chakra-ui/react';
import { Chart as ChartJS } from 'chart.js/auto';
import {Bar} from 'react-chartjs-2'

const BarGraph = ({data}) => {

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'States from where orders were placed'
            }
        },
        scales: {
            x: {
              grid: {
                 drawOnChartArea:false
               }
            },
             y: {
              grid: {
                 drawOnChartArea:false
               }
            }
        }
    };
    
      const stateCounts = {};
    
    
      data?.forEach(product => {
          if (stateCounts[product['user-state']]) {
              stateCounts[product['user-state']]++;
          } else {
              stateCounts[product['user-state']] = 1;
          }
      });
      const stateCountArray = [];
    
      for (let state in stateCounts) {
          stateCountArray.push({state, count: stateCounts[state]});
      }
      
      const highestCountObj = stateCountArray.length && stateCountArray?.reduce((acc,current) => current.count > acc.count ? current : acc)
      const colors = stateCountArray?.map((obj,index) => {
        if(obj.count === highestCountObj.count) {
            return 'rgba(252, 252, 3,0.5)'
        } else {
            return 'rgba(252, 144, 3,0.5)'
        }
      })
      const barData = {
        labels: stateCountArray?.map(arr => arr.state),
        datasets: [{
          label: "State",
          data: stateCountArray?.map(arr => arr.count),
          backgroundColor: colors
        }]
      }

    return (
        <Box w = "100%" h= "50vh"  minH = "300px" minW = "500px" ml = {{base: "-5rem",md: "0"}}>
            <Bar data = {barData} options = {options} />
        </Box>
    )
}

export default BarGraph
