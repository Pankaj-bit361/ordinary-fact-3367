import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import logo from "../Images/Novamart.png"
import { TiHomeOutline } from 'react-icons/ti';
import {BiMessageDetail} from "react-icons/bi"

import { Box, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react';
import MobNavside from './MobNavside';
import { useNavigate } from 'react-router-dom';
const Mobnav = () => {

const [state,setState]=useState(false) 

const navigate=useNavigate()

const setthestate=()=>{
setState(true)
}

console.log(state)
  return (
    <div>
    <Box bgColor={"#00a699"} color="white">
    <Grid gridTemplateColumns={"repeat(3,1fr)"}>

    <Box w="80%" m="auto" gridColumnStart={1} gridColumnEnd={2} onClick={setthestate}> <RxHamburgerMenu size={"40px"}/></Box>


<Box m="auto" gridColumnStart={2} gridColumnEnd={3}><Image onClick={()=>navigate("/")} w={["80%","65%","50%"]} src={logo}/></Box>
    {/* <Box w="80%" m="auto" gridColumnStart={1} gridColumnEnd={2} onClick={setthestate} > <RxHamburgerMenu size={"40px"}/></Box>


<Box m="auto" gridColumnStart={2} gridColumnEnd={3}><Image w={["80%","65%","50%"]} src={logo}/></Box> */}

<Flex gridColumnStart={3} gridColumnEnd={4} p={"2%"} gap="10%" justifyContent={"center"} alignContent={"center"}>

<Box >
<Box ml="10%"><TiHomeOutline /></Box>
  <Box> <Text fontSize={["0.6rem","0.8rem","1rem"]}>Sell</Text></Box></Box>
  
  <Box>
  <Box ml="30%"><BiMessageDetail  /></Box>
  <Box> <Text fontSize={["0.6rem","0.8rem","1rem"]}>Messages</Text></Box></Box>

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