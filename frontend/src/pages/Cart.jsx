import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getCartProducts, updateCartSuccess, updateCartdata } from '../redux/Cart/action'
import { Box, Button, Center, Divider, Flex, Grid, Image, Select, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
// import  "../components/cart.css"
import styled from 'styled-components';
import axios from 'axios'
const Cart = () => {
    const [state,setState] = useState([])

const [count,setcount]=useState(0)
const dispatch=useDispatch()

const data=useSelector((state)=>state.CartReducer.products)
// console.log(data)
let total=0;
for(var i=0;i<data.length;i++){
    total+=data[i].quantity*data[i].price
}
useEffect(()=>{
dispatch(getCartProducts())
},[])

const handlechange=(id,e)=>{
console.log(e.target.value,id)
let ob={
    quantity:+e.target.value
}
 dispatch(updateCartdata(id,ob)).then(()=>dispatch(getCartProducts()))

console.log(data)

}
// useEffect(()=>{
//     dispatch(getCartProducts())
// },[location.search])



  return (
    <DIV>
    <Box bg={"#faf9f8"}>
    <Box w="80%" m="auto" mt="5%" >
    <Box fontSize={"2.2rem"} fontWeight={"700"} >Shopping Bag</Box>
    <Grid mt="4%" templateColumns="repeat(11,1fr)" gap={"4%"} >
<Box className='box1'  bg="white" gridColumnStart={1} gridColumnEnd={8} >
<SimpleGrid columns={[1]}>
{data?.map((item)=>(
    <Box mb="2%" p="3%">
    <Grid ml="" templateColumns="repeat(3,1fr)" >
        <Box gridColumnStart={1} gridColumnEnd={2}>
            <Image src={item.images.image1} w="65%" />
        </Box>
        <Box gridColumnStart={2} gridColumnEnd={3} mt="2%" >
           <Text textAlign={"left"} fontWeight={"700"} fontFamily={"app"} fontSize={"1.4vw"} > {item.title.length>=16?item.title.substring(0,16)+"...":item.title}</Text>
           <Flex   gap="5%" textAlign={"left"}  fontSize={"1.2vw"}>
           <Text fontWeight={"600"}>Price:</Text>
            <Text fontWeight={"600"} textAlign={"left"}>Rs.{item.price}</Text></Flex> 
            <Flex  gap="5%" textAlign={"left"} fontWeight={"600"} fontSize={"1.1vw"}>
            <Text fontWeight={"600"}>Rating:</Text>
                <Text fontWeight={"600"}>{item.rating}</Text>
            </Flex>
            <Flex gap="5%" mt="5%">
<Box border={"1px solid black"}  w="40%" ><Flex justifyContent={"center"} mt="10%"><AiOutlineHeart size={"25"}/></Flex>  </Box>
<Select w="40%" border={"1px solid black"} borderRadius={"0%"} onChange={(e)=>handlechange(item.id,e)} >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
</Select>
            </Flex>
        </Box>
        <Box gridColumnStart={3}   gridColumnEnd={4}>

<Flex mt="5%"  ml="5%" fontWeight={600} gap="10%">
    <Text fontWeight={"600"}  fontSize={"1.1vw"}>Category:</Text>
    <Text fontWeight={"600"} fontSize={"1.1vw"}>{item.categories}</Text>
</Flex>
<Flex mt="5%" ml="5%" fontWeight={600} gap="10%">
    <Text fontWeight={"600"} fontSize={"1.1vw"}>Color:</Text>
    <Text fontWeight={"600"} fontSize={"1.1vw"}>{item.color}</Text>
</Flex>
<Button fontWeight={"600"}  mt="20%" w="60%" bg="blackAlpha.900"  color={"white"} >Remove</Button>

{/* bg={item.color==="white"?"black":item.color} */}
        </Box>
       
    </Grid>
    </Box>
))}
</SimpleGrid>
</Box>



<Box  p="5%" className='box2'   bg="white" gridColumnStart={8} gridColumnEnd={12}>
<Text textAlign={"left"} fontWeight={600} fontSize={"1.5vw"}>Price Detail</Text>
<Divider height={"2px"} color={"blackAlpha.900"}/>
<Flex mt="5%" fontWeight={600} textAlign={"left"} justifyContent={"space-between"}>
<Text fontWeight={"600"} >Order Value</Text>
<Text fontWeight={"600"}>{total} </Text>
</Flex>
<Flex mt="2%" fontWeight={600} justifyContent={"space-between"} textAlign={"left"}>
<Text fontWeight={"600"}  >Delivery</Text>
<Text fontWeight={"600"}>FREE </Text>
</Flex>
<Divider/>
<Flex mt="5%" fontWeight={600} justifyContent={"space-between"} textAlign={"left"}>
<Text fontWeight={"700"} >Total</Text>
<Text fontWeight={"700"}>FREE </Text>
</Flex>
<Button mt="5%" w="100%" bg="blackAlpha.900" color="white">Continue to Checkout</Button>
<Flex mt="5%" justifyContent={'space-around'}>
    <Text mt="1%" fontWeight={600} fontSize={"1.1vw"}>Cash on Delivery</Text>
    <Image w="10%"  src={"https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"}/>
    <Image mt="2%" h="3vh" w="15%" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
</Flex>
<Flex  justifyContent={'space-around'}>
   <Image mt="5%" height={"4vh"} w="15%"  src="https://seeklogo.com/images/E/EMI-logo-C397570FF2-seeklogo.com.png" />
    <Image mt="5%" height={"5vh"} w="25%"  src={"https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png"}/>
    <Image  w="20%" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upi-icon.png" />
</Flex>
</Box>
    </Grid>
   
    </Box>
    </Box>
    </DIV>
  )
}
const DIV = styled.div`
  *{
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

`;
export default Cart