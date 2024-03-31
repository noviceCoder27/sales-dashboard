import { Box, Flex, Td, Tr } from "@chakra-ui/react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";


const Product = ({product,index,setCurrentIndex,onOpenUpdate,onOpenDelete}) => {
  return (
    <Tr key = {index} id = {product._id}>
        <Td>{product.name}</Td>
        <Td>{product.category}</Td>
        <Td>
            <Flex gap = "0.5rem">
                <Box ml = "auto" p = "0.5rem" cursor= "pointer" color = "#22c40c" _hover= {{bgColor: "#9cf78f",borderRadius: "50%"}}>
                    <FaPencilAlt onClick = {() => {
                        setCurrentIndex(index);
                        onOpenUpdate();
                    }}/>
                </Box>
                <Box cursor = "pointer" p = "0.5rem" color = "#cf0815" _hover= {{bgColor: "#f7adb2",borderRadius: "50%"}}>
                    <FaTrash onClick={() => {
                        setCurrentIndex(index);
                        onOpenDelete();
                    }}/>
                </Box>
            </Flex>
        </Td>
    </Tr>
  )
}

export default Product
