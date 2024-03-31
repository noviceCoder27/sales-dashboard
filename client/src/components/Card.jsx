import { Box, Text } from "@chakra-ui/react"


const Card = ({displayText,text}) => {
  return (
    <Box textAlign= "center" p = "2rem" w= "100%" bgColor = "lightyellow" border = "2px solid goldenrod" borderRadius= "10px">
        <Text fontSize = "clamp(3rem,3vw,4rem)">{displayText}</Text>
        <Text color = "darkgray" fontWeight= "500" >{text}</Text>
    </Box>
  )
}

export default Card
