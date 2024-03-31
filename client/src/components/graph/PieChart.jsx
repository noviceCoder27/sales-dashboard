import { Box } from "@chakra-ui/react"
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from "react-chartjs-2"


const PieChart = ({data}) => {

    const paymentCounts = {};
    
    
    data?.forEach(product => {
        if (paymentCounts[product['payment-method']]) {
            paymentCounts[product['payment-method']]++;
        } else {
            paymentCounts[product['payment-method']] = 1;
        }
    });
    const paymentCountArray = [];

    for (let paymentCount in paymentCounts) {
        paymentCountArray.push({"payment-method": paymentCount, count: paymentCounts[paymentCount]});
    }

    let totalCount = 0;
    paymentCountArray.forEach(payment => totalCount += payment.count)

    const paymentPercentArr = [];

    for (let payment in paymentCounts) {
        paymentPercentArr.push({"payment-method": payment, percent: Math.floor((paymentCounts[payment]/totalCount) * 100)});
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Payment methods used'
            }
        },
    };
    
    const pieData = {
        labels: paymentPercentArr?.map(arr => arr['payment-method']),
        datasets: [{
            label: "%",
            data: paymentPercentArr?.map(arr => arr.percent),
            backgroundColor: [
                "rgba(226, 242, 143,0.8)",
                "rgba(255, 216, 168,0.8)",
                "rgba(255, 168, 171,1)",
                "rgba(242, 231, 107,0.8)"
            ]
        }]
    }

    return (
        <Box>
            <Pie data = {pieData} options = {options}/>
        </Box>
    )
}

export default PieChart
