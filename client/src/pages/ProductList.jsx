import { Box, Flex, Spinner, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { useProductContext } from "../context/ProductContext"
import Navbar from "../components/Navbar";
import DeleteModal from "../components/modal/DeleteModal";
import UpdateModal from "../components/modal/UpdateModal";
import { useState } from "react";
import Product from "../components/Product";




const ProductList = () => {
    const {products} = useProductContext();
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const { isOpen: isOpenUpdate, onOpen: onOpenUpdate, onClose: onCloseUpdate } = useDisclosure();
    const [currentIndex,setCurrentIndex] = useState(0);
    const tableBody = products?.map((product,index) => (
        <Product 
        key = {index} 
        product = {product} 
        index = {index} 
        setCurrentIndex={setCurrentIndex}
        onOpenDelete={onOpenDelete}
        onOpenUpdate={onOpenUpdate}
        />
    ))

    return (
        <>
            <Navbar />
            {products ?
            <>
                <DeleteModal isOpen = {isOpenDelete} onClose = {onCloseDelete} index = {currentIndex} product_id = {products[currentIndex]?._id}/>
                <UpdateModal isOpen = {isOpenUpdate} onClose = {onCloseUpdate} index = {currentIndex} product_id = {products[currentIndex]?._id}/>
                <Box p = "3rem">
                    <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                            <TableCaption>List of all products</TableCaption>
                            <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Category</Th>
                                <Th></Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            {tableBody}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </> 
            :
            <Flex mt = "5rem" justifyContent= "center"  >
                <Spinner color = "yellow.500" size = "xl"/>
            </Flex>
            
            }
        
        </>
        
    )
}

export default ProductList
