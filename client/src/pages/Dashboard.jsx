import { Box, Flex, Select, Spinner } from '@chakra-ui/react'
import { profitMargin, totalProfit, totalQuantity, totalSum } from './../utils/calculations';
import Card from '../components/Card';
import BarGraph from '../components/graph/BarGraph';
import PieChart from '../components/graph/PieChart';
import LineGraph from '../components/graph/LineGraph';
import { useProductContext } from '../context/ProductContext';
import Navbar from '../components/Navbar';
import FilterSelect from '../components/FilterSelect';



const Dashboard = () => {

  const {products,graphData} = useProductContext();

  return (
    <Flex minH = "100vh" direction= "column" >
      <Navbar />
      {products ?
      <Flex justifyContent = {{base: "center", xl: "start"}} flexGrow= "1" p = "2rem" gap = "2rem" flexWrap= {{base:"wrap", xl: "nowrap"}}>
        <Flex direction = "column" w = "60%" gap = "2rem">
          <Flex gap = "1rem" justifyContent= "space-between" flexWrap= {{base: "wrap",lg: "nowrap"}} mt = "4rem">
            <Card displayText={`₹${totalSum(products)}`} text = {"Sum of Amount"}/>
            <Card displayText={`${totalProfit(products)}`} text = {"Sum of Profit"}/>
            <Card displayText={`${totalQuantity(products)}`} text = {"Sum of Quantity"} />
            <Card displayText={`${profitMargin(products)}%`} text = {"Profit Margin"}/>
          </Flex>
          <Flex mt = "10rem" postion = "relative">
            <BarGraph data = {graphData.bar}/>
            <FilterSelect w= "fit-content" postion = "absolute" right = "5rem" graphtype = {"bar"}/>
          </Flex>
        </Flex>
        <Flex direction = "column" w = "50%">
          <Flex justifyContent= "center" w = "100%" position = "relative">
            <PieChart data = {graphData.pie}/>
            <FilterSelect w= "fit-content" postion = "absolute" right = "-5rem" graphtype = {"pie"}/>
          </Flex>
          <Flex justifyContent= "center" mt = "5rem" position = "relative">
            <Box mt = "2rem" maxW = "600px" overflowX= "scroll">
              <LineGraph data = {graphData.line}/>
              <FilterSelect w= "fit-content" postion = "absolute" top = "-25rem" left = "70%" graphtype = {"line"}/>
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
