import { Select } from "@chakra-ui/react"
import { useProductContext } from "../context/ProductContext"


const FilterSelect = ({...props}) => {
    const {products,graphData,setGraphData} = useProductContext();
    const filterFunction = (value, data) => {
        if(value === "overall") {
            return true;
        } else if(value === "year") {
            const now = new Date();
            return new Date(data.orderedAt).getFullYear() === now.getFullYear();
        } else {
            const now = new Date();
            return new Date(data.orderedAt).getMonth() === now.getMonth();
        }
    }

    const filterData = (e) => {
        const value = e.target.value
        switch(props.graphtype){
            case "bar":
                const updatedBarGraph = graphData.bar.filter(data => filterFunction(value,data))
                setGraphData(prev => ({...prev, bar: updatedBarGraph}));
                if(value === "overall") {
                    setGraphData(prev => ({...prev,bar:products}));
                }
                break;
            case "pie":
                const updatedPieGraph = graphData.pie.filter(data => filterFunction(value,data))
                setGraphData(prev => ({...prev, pie: updatedPieGraph}));
                if(value === "overall") {
                    setGraphData(prev => ({...prev,pie:products}));
                }
                break;
            case "line":
                const updatedLineGraph = graphData.line.filter(data => filterFunction(value,data))
                setGraphData(prev => ({...prev, line: updatedLineGraph}));
                if(value === "overall") {
                    setGraphData(prev => ({...prev,line:products}));
                }
                break;
        }
    }
    return (
        <Select {...props} onChange = {filterData}>
            <option value='overall'>Overall</option>
            <option value='year'>Current Year</option>
            <option value='month'>Current Month</option>
        </Select>
    )
}

export default FilterSelect
