import { useEffect, useState } from "react"
import { getProductDetails, updateProduct } from "../../apis/product";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";


const UpdateModal = ({isOpen,onClose,index,product_id}) => {
    const [data,setData] = useState(null);
    useEffect(() => {
        async function productDetails() {
            try {
                const details = await getProductDetails(product_id);
                setData(details);
            } catch(err) {
                toast({
                    title: "Error fetching details",
                    status: "error",
                    duration: 1000,
                    position: "top-right"
                })
            }
            
        }
        productDetails();
    },[index])
    
    const updateItem = async() => {
        try {
            await updateProduct(product_id,{costs: data?.costs,price: data?.price,quantity:data?.quantity});
            onClose();
        } catch(err) {
            toast({
                title: "Error updating details",
                status: "error",
                duration: 1000,
                position: "top-right"
            })
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update Costs</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Price (In Rupees)</FormLabel>
                        <Input value = {data?.price} onChange={(e) => setData(prev => ({...prev,price: e.target.value}))}/>
                        </FormControl>
                        <FormControl mt={4}>
                        <FormLabel>Cost (In Rupees)</FormLabel>
                        <Input value = {data?.costs} onChange={(e) => setData(prev => ({...prev,costs: e.target.value}))}/>
                        <FormLabel>Quantity</FormLabel>
                        <Input value = {data?.quantity} onChange={(e) => setData(prev => ({...prev,quantity: e.target.value}))}/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={updateItem}>
                    Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
      </Modal>
    )
}

export default UpdateModal
