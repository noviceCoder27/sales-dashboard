import { Box, Flex, Spinner } from '@chakra-ui/react'
import { profitMargin, totalProfit, totalQuantity, totalSum } from './../utils/calculations';
import Card from '../components/Card';
import BarGraph from '../components/graph/BarGraph';
import PieChart from '../components/graph/PieChart';
import LineGraph from '../components/graph/LineGraph';
import { useProductContext } from '../context/ProductContext';
import Navbar from '../components/Navbar';



const Dashboard = () => {

  const {products} = useProductContext();

  return (
    <Flex minH = "100vh" direction= "column" >
      <Navbar />
      {products ?
      <Flex flexGrow= "1" p = "2rem" gap = "2rem" flexWrap= {{base:"wrap", xl: "nowrap"}}>
        <Flex direction = "column" w = "60%" gap = "2rem">
          <Flex gap = "1rem" justifyContent= "space-between" flexWrap= {{base: "wrap",md: "nowrap"}} mt = "4rem">
            <Card displayText={`₹${totalSum(products)}`} text = {"Sum of Amount"}/>
            <Card displayText={`${totalProfit(products)}`} text = {"Sum of Profit"}/>
            <Card displayText={`${totalQuantity(products)}`} text = {"Sum of Quantity"} />
            <Card displayText={`${profitMargin(products)}%`} text = {"Profit Margin"}/>
          </Flex>
          <Flex mt = "10rem">
            <BarGraph data = {products}/>
          </Flex>
        </Flex>
        <Flex direction = "column" w = "50%">
          <Flex justifyContent= "center" w = "100%" >
            <PieChart data = {products}/>
          </Flex>
          <Flex justifyContent= "center" mt = "5rem">
            <Box mt = "2rem">
              <LineGraph data = {products}/>
            </Box>
          </Flex>
        </Flex>
      </Flex>:
      <Flex mt = "5rem" justifyContent= "center"  >
        <Spinner color = "yellow.500" size = "xl"/>
      </Flex>
      }
      
    </Flex>
  )
}

export default Dashboard
