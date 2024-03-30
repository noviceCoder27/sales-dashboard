import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react"
import { googleAuth, twitterAuth } from "../apis/user"
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import BackgroundImage from './../assets/user.png'
import SphereImage from './../assets/sphere.png'
import EllipseImage from './../assets/ellipse.png'


const gradient = {
    "background": "linear-gradient(139deg, rgba(123,108,235,1) 0%, rgba(228,117,166,1) 100%)"
}

const Auth = () => {
  
    return (
        <Flex w= "100%" minH = "100vh" direction= {{base: "column",md: "row"}}>
            <Box w = {{base: "100%",md: "60%"}} style = {gradient} position= "relative" overflowY="hidden">
                <Heading mt = "5rem" ml = "2rem" color = "white" fontSize= "3rem">
                    Welcome To The Website
                </Heading>
                <Text ml = "2rem" color = "white" fontWeight= "bold" mt = "1rem"  mb = "2rem" >Log in to your account first before heading to the dashboard page</Text>
                <Image src = {BackgroundImage} display = {{base: "none",md: "block"}} alt = "Background" position= "absolute" bottom = "0" right = "0"/>
                <Image src = {SphereImage} display = {{base: "none",xl: "block"}} alt = "Background" position= "absolute" top = "-5rem" right = "5rem"/>
                <Image src = {EllipseImage} display = {{base: "none",xl: "block"}} alt = "Background" position= "absolute" bottom = "-5rem" right = "50%" />
            </Box>
            <Flex w = {{base: "100%",md: "40%"}} direction = "column" p = "2rem"  alignItems="center">
                <Heading mt = "6rem" mb = "2rem" fontWeight= "500" color = "#846ff0">
                    Sign In
                </Heading>
                <Flex direction = "column" gap = '1rem'>
                    <Button onClick={googleAuth} background = "white" border = "2px solid gray" borderRadius="20px">
                        <FaGoogle />
                        <Text ml = "0.5rem">Sign in with Google</Text>
                    </Button>
                    <Button onClick={twitterAuth} background = "white" border = "2px solid gray" borderRadius="20px">
                        <FaTwitter />
                        <Text ml = "0.5rem">Sign in with Twitter</Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Auth
