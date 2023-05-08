import React from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import logo from "../Images/Novamart.png"
import { TiHomeOutline } from 'react-icons/ti';
import { BiMessageDetail } from 'react-icons/bi';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
const Mobnav = () => {
  return (
    <div>
    <Box bgColor={"#00a699"} color="white">
    <Grid gridTemplateColumns={"repeat(3,1fr)"}>
    <Box gridColumnStart={1} gridColumnEnd={2}> <RxHamburgerMenu size={"40px"}/></Box>


<Box gridColumnStart={2} gridColumnEnd={3}><Image w="50%" src={logo}/></Box>

<Flex gridColumnStart={3} gridColumnEnd={4} p={"2%"} gap="10%" justifyContent={"end"}>

<Box>
<Box><TiHomeOutline/></Box>
  <Box> <Text fontSize={"1.2vw"}>Sell</Text></Box></Box>
  
  <Box>
  <Box><BiMessageDetail/></Box>
  <Box> <Text fontSize={"1.2vw"}>Messages</Text></Box></Box>

   {/* <Box>
  <Box ml="32%"><BiMessageDetail/></Box> 
    <Text fontSize={"1.2vw"}>Messages</Text>
   </Box> */}
   </Flex>


</Grid>
    </Box>
    
    </div>
  )
}

export default Mobnav