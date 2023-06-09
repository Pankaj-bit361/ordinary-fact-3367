import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { deleteCartdata, getCartProducts, updateCartSuccess, updateCartdata } from '../redux/Cart/action'
import { Box, Button, Center, Divider, Flex, Grid, Image, Select, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
// import  "../components/cart.css"
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Mobnav from '../components/Mobnav'
import Footer from '../components/Footer'
const Cart = () => {
    const [state,setState] = useState([])


    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
      });
    
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
        });
      };
      useEffect(() => {
        window.addEventListener("resize", detectSize);
    
        return () => {
          window.removeEventListener("resize", detectSize);
        };
      }, [windowDimension])
    
      console.log(windowDimension.winWidth);
    

const [count,setcount]=useState(0)
const dispatch=useDispatch()
const navigate=useNavigate()
let token=JSON.parse(localStorage.getItem("token"))
const data=useSelector((state)=>state.CartReducer.products)
// console.log(data)
let total=0;
for(var i=0;i<data?.length;i++){
    total+=data[i]?.quantity*data[i]?.price
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

const removeprod=(id)=>{
dispatch(deleteCartdata(id)).then(()=>dispatch(getCartProducts()))
}

const postandeleteall=()=>{
 navigate("/payment")
}

  return (
    <DIV>
    {windowDimension.winWidth>767?<Navbar/>:<Mobnav/>}
    <Box bg={"#faf9f8"}>
    <Box w="80%" m="auto"  >
    <Box fontSize={"2.2rem"} fontWeight={"700"} >Shopping Bag</Box>
    <Grid mt="4%" templateColumns="repeat(11,1fr)" gap={"4%"} >
<Box className='box1'  bg="white" gridColumnStart={1} gridColumnEnd={8} >
<SimpleGrid columns={[1]}>
{data?.map((item)=>(
    <Box mb="2%" p="3%" key={item._id}>
    <Grid ml="" templateColumns="repeat(3,1fr)" >
        <Box gridColumnStart={1} gridColumnEnd={2}>
            <Image src={item?.media[0]?.url} w="65%" />
        </Box>
        <Box gridColumnStart={2} gridColumnEnd={3} mt="2%" >
           <Text textAlign={"left"} fontWeight={"700"} fontFamily={"app"}fontSize={["2vw","1.8vw","1.1vw"]} > {item?.name.length>=16?item?.name?.substring(0,16)+"...":item?.name}</Text>
           <Flex   gap="5%" textAlign={"left"}  fontSize={["2vw","1.8vw","1.1vw"]}>
           <Text fontWeight={"600"} fontSize={["2vw","2vw","1.1vw"]}>Price:</Text>
            <Text fontWeight={"600"} textAlign={"left"} fontSize={["2vw","1.8vw","1.1vw"]}>Rs.{item?.price}</Text></Flex> 
            <Flex  gap="5%" textAlign={"left"} fontWeight={"600"} fontSize={["2vw","1.8vw","1.1vw"]}>
            <Text fontWeight={"600"} fontSize={["2vw","1.8vw","1.1vw"]}>Rating:</Text>
                <Text fontWeight={"600"} fontSize={["2vw","1.8vw","1.1vw"]}>{item?.rating}</Text>
            </Flex>
            <Flex gap="5%" mt="5%">
<Box border={"1px solid black"}  w="40%" ><Flex justifyContent={"center"} mt="10%"><AiOutlineHeart size={"25"}/></Flex>  </Box>
<Select w="40%" border={"1px solid black"} borderRadius={"0%"} onChange={(e)=>handlechange(item?._id,e)} >
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
    <Text fontWeight={"600"} fontSize={["1.5vw","1.8vw","1.1vw"]}>Brand:</Text>
    <Text fontWeight={"600"} fontSize={["1.5vw","1.8vw","1.1vw"]}>{item?.brand_name}</Text>
</Flex>
<Flex mt="5%" ml="5%" fontWeight={600} gap="5%">
    <Text fontWeight={"600"} fontSize={["1.5vw","1.8vw","1.1vw"]}>popularity:</Text>
    <Text fontWeight={"600"} fontSize={["1.5vw","1.8vw","1.1vw"]}>{item?.tracking_metadata?.popularity}</Text>
</Flex>
<Button fontWeight={"600"}  mt="8%" w="60%" bg="#2e3192" onClick={()=>removeprod(item?._id)} color={"white"} >Remove</Button>

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
<Button mt="5%" w="100%" bg="#2e3192" onClick={postandeleteall} color="white">Continue to Checkout</Button>
<Flex mt="5%" justifyContent={'space-around'}>
    <Text mt="1%" fontWeight={600} fontSize={"1.1vw"}>Cash on Delivery</Text>
    <Image w="10%"  src={"https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"}/>
    <Image mt="2%" h="3vh" w="15%" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
</Flex>
<Flex  justifyContent={'space-around'}>
   <Image mt="5%" height={"4vh"} w="15%"  src="https://seeklogo.com/images/E/EMI-logo-C397570FF2-seeklogo.com.png" />
    <Image mt="5%" height={"5vh"} w="25%"  src={"https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png"}/>
    <Image mt="4%" w="20%" src="https://static.businessworld.in/article/article_extra_large_image/1589892172_FHqF6Z_UPI.jpg" />
</Flex>
</Box>
    </Grid>
   
    </Box>
    </Box>
    <Footer/>
    </DIV>
  )
}
const DIV = styled.div`
  *{
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

`;
export default Cart