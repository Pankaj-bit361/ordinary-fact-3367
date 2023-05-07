import { Box, Button, Flex, Grid, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import logo from "../Images/Novamart.png"
import {AiOutlineTag} from "react-icons/ai"
import {TiHomeOutline} from "react-icons/ti"
import {BsQuestionCircle} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
const Navbar = () => {
    const [ok,setok]=useState(false)
  return (
   <Box padding={"1%"} border={"1px solid black"} bg="#2e3192" >
   <Box w="95%" m="auto">
<Grid templateColumns='repeat(2, 1fr)' gap="2%">
<Grid  templateColumns='repeat(9, 1fr)' id="box1" >
    <Image  marginLeft={"-8%"} mt="8%" src={logo} gridColumnStart={1}  gridColumnEnd={3}/>
    {/* <Text color={"white"}  gridColumnStart={1}  gridColumnEnd={3} fontSize={"1rem"}>🅽🅾🆅🅰🅼🅰🆁🆃</Text> */}
    <Select borderRadius={"0px"} color="#2e3192" bg="white"  gridColumnStart={3}  gridColumnEnd={5}>
        <option>All India</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Kolkata</option>
    </Select>
    {/* <Input  gridColumnStart={3}  gridColumnEnd={6}/>
    <Button gridColumnStart={6}  gridColumnEnd={7} ><AiOutlineSearch/>Search</Button> */}
    <InputGroup  gridColumnStart={5} gridColumnEnd={10} >
        
          <Input bg={"white"} border="0px" borderRadius={"0px"} placeholder='Search for products & brands...' size='md'  borderLeft={"none"} _focus={{border:"none"}} focusBorderColor='grey' />
          <InputRightAddon bg={"#00a699"} color="white" children={<Box bg={"#00a699"} >Search</Box>}/>
          
        </InputGroup>
</Grid>
<Grid id="box2" color="white" templateColumns='repeat(2, 1fr)' >
   <Button w={"40%"} gridColumnStart={1} gridColumnEnd={2} borderRadius={"2px"}  fontSize={"1.2vw"} bg="white" color="#2e3192">Get Best Price</Button>
 <Flex gridColumnStart={2} gridColumnEnd={3} gap="8%">
   <Box  >
    <Box ml="35%"><AiOutlineTag/></Box>
    <Text fontSize={"1.2vw"}>Shopping</Text>
   </Box>
   <Box>
   <Box ml="10%"><TiHomeOutline/></Box>
    <Text fontSize={"1.2vw"}>Sell</Text>
   </Box>
   <Box>
 <Box  ml="20%">
 <BsQuestionCircle/></Box>
  
    <Text fontSize={"1.2vw"} >Help</Text>
   </Box>
   <Box>
  <Box ml="32%"><BiMessageDetail/></Box> 
    <Text fontSize={"1.2vw"}>Messages</Text>
   </Box>
   <Box>
   <Box  ml="22%"><CgProfile/></Box>
    <Text fontSize={"1.2vw"}>login</Text>
   </Box>
   </Flex>
 
</Grid>
</Grid>
   </Box>
   </Box>
  )
}

export default Navbar