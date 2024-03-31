import { Button, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, useToast } from '@chakra-ui/react'
import React from 'react'
import { deleteProduct } from '../../apis/product'
import { useProductContext } from '../../context/ProductContext'

const DeleteModal = ({isOpen,onClose,product_id}) => {

    const {products,setProducts} = useProductContext();
    const toast = useToast();

    const removeItem = async () => {
        try {
            await deleteProduct(product_id);
            const updatedProducts = products.filter(product => product._id !== product_id);
            setProducts(updatedProducts);
            onClose();
        } catch(err) {
            toast({
                title: "Error deleting product",
                status: "error",
                duration: 1000,
                position: "top-right"
            })
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size = 'lg' >
            <ModalOverlay />
            <ModalContent p = "2rem">
                <ModalBody mb = "2rem">
                    <Heading fontWeight= "bold">Are you sure you want to remove this product</Heading>
                </ModalBody>
                <hr />
                <ModalFooter display = "flex" gap = "1rem">
                    <Button _hover = {{bgColor: "#f7adb2"}} onClick = {removeItem}>Remove</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default DeleteModal
