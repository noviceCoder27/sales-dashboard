import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { logoutUser } from "../apis/user";

const Navbar = () => {

    const [toggleOpen,setToggleOpen] = useState(false);
    const [,,removeCookie] = useCookies(['accessToken']);

    const logout = async () => {
        try {
            await logoutUser();
            removeCookie('accessToken');
        } catch(err) {
            console.log(err)
        }
        
    }

    return (
        <Flex p = "1rem" bgColor = "#fae682" borderBottom= "4px solid black" justifyContent= "space-between" alignItems="center">
            <Heading>
                <Link to = "/dashboard">
                    SALES DASHBOARD
                </Link>
            </Heading>
            <Box position = "relative" fontSize="2rem" border = "2px solid black" borderRadius= "50%" p = "0.5rem" _hover={{bgColor: "#fcfcc5"}} cursor= "pointer"  onClick = {() => setToggleOpen(prev => !prev)}>
                <CiUser />
                {toggleOpen && <Flex direction = "column" alignItems ="center" gap = "1rem" position = "absolute" left = "-8rem" top = "3rem" bgColor = "white" p = "1rem 2rem" borderRadius="10px" boxShadow = "0px 8px 24px rgba(149, 157, 165, 0.2)">
                    <Text fontSize = "md" fontWeight= "600" p = "0.5rem" borderRadius = "8px" _hover = {{bgColor: "#f7adb2"}}>
                        <Link to = "/list">Products</Link>
                    </Text>
                    <Button bgColor = "transparent" onClick={logout}>Logout</Button>
                </Flex>}
            </Box>
        </Flex>
    )
}

export default Navbar
