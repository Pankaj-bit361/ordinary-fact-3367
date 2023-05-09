import React from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { TiHomeOutline } from 'react-icons/ti';

import {BsQuestionCircle} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineFolderOpen} from "react-icons/ai"
import {AiFillFileAdd} from "react-icons/ai"
import {BsShieldCheck} from "react-icons/bs"
import {BsTruck} from "react-icons/bs"
import {MdOutlineWatchLater} from "react-icons/md"
import { Box, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react';
const MobNavside = ({setState}) => {

const ok=()=>{
    setState(false)
}

  return (
    <div>
        <Box h="100vh"   w="50%" border={"1px solid black"}>
<Box bg={"#00a699"} >
  <Flex  w="90%" m="auto" justifyContent={"space-between"}>
  <Text>Login</Text>
  <Text>Edit Profile</Text>
  <Box mr="-60%" onClick={ok}><RxCross1 size="30px"/></Box>
  </Flex>
</Box>

<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%" >
  <Flex gap="10%">
    <Box mt="1%"><TiHomeOutline/></Box>
    <Text  fontSize={"1.2rem"} >Home</Text>
    
  </Flex>
</Box>

<Text  w="90%" m="auto" fontWeight={600} mt="2%">BUY</Text>
<Divider/>

<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%">
  <Flex  gap="10%">
<AiOutlineFolderOpen/>
    <Text>View All Categories</Text>
  </Flex> 
</Box>
<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%">
  <Flex gap="10%">
    <BiMessageDetail/>
    <Text>Messages</Text>
    
  </Flex>
</Box>

<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%">
  <Flex  gap="10%">
    <AiOutlineSearch/>
    <Text>Search</Text>
   
  </Flex>
</Box>

<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%">
  <Flex  gap="10%">
    <AiFillFileAdd/>
    <Text>Post Your Requirement</Text>
  </Flex>
</Box>

<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%">
  <Flex  gap="10%">
  <MdOutlineWatchLater/>
    <Text>My Orders</Text>
  </Flex>
</Box>

<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%"> 
  <Flex gap="10%" >
    <BsShieldCheck/>
    <Text>Pay With Novamart</Text>
  </Flex>
</Box>

<Box fontSize={"1.2rem"} w="90%" m="auto" fontWeight={400} mt="2%">
  <Flex gap="10%">
    <BsTruck/>
    <Text>Ship with Novamart</Text>
  </Flex>
</Box>


</Box>
    </div>
  )
}

export default MobNavside