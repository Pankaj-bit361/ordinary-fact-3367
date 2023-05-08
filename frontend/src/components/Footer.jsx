import { Box, Divider, Flex, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Footer = () => {

    const [windowDimension,detectHW]=useState({
        winWidth:window.innerWidth
       })
      
       const detectSize=()=>{
        detectHW({
          winWidth:window.innerWidth
        })
       }
      useEffect(()=>{
        window.addEventListener("resize",detectSize)
      
        return ()=>{
          window.removeEventListener("resize",detectSize)
        }
      },[windowDimension])
      
      console.log(windowDimension.winWidth)
  return (
    <Box p="2%" mt={["5%","5%","3%"]} bg="#00a699" color="white">

 {windowDimension.winWidth>1000? <Box >
        <Grid gridTemplateColumns={"repeat(2,1fr)"}>
            <Box gridColumnStart={1} gridColumnEnd={2}>
                <Box fontSize={"1.8vw"}>We are here to help you!</Box>
            </Box>

            <Box gridColumnStart={2} gridColumnEnd={3}>
<Grid  gridTemplateColumns={"repeat(10,1fr)"} >
<Box gridColumnStart={1} mt="5%" gridColumnEnd={3}>Go Mobile:</Box>
    <Box gridColumnStart={3} mt="5%" gridColumnEnd={4}  w="100%"><Image w="35%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png?20220821121934"/></Box>
    <Box gridColumnStart={4} mt="8%" gridColumnEnd={5} w="100%"><Image w="35%" src="https://cdn-icons-png.flaticon.com/512/38/38002.png"/></Box>
    <Box gridColumnStart={5} mt="8%" gridColumnEnd={6} w="100%"><Image w="35%" src="https://static.vecteezy.com/system/resources/previews/011/047/536/original/smartphone-and-mobile-phone-free-png.png"/></Box>
<Box gridColumnStart={6} mt="5%" gridColumnEnd={8}>Follow us on:</Box>
<Box gridColumnStart={8} mt="8%" gridColumnEnd={9} w="100%"><Image w="35%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"/></Box>
    <Box gridColumnStart={9} mt="8%" gridColumnEnd={10} w="100%"><Image w="35%" src="https://www.wellybox.com/wp-content/uploads/2023/02/pngkey.com-twitter-logo-png-transparent-27646.png"/></Box>
    <Box gridColumnStart={10} mt="8%" gridColumnEnd={11} w="100%"><Image w="35%" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></Box>
</Grid>
            </Box>
        </Grid>
    </Box>
    :""}   
   




    <Box   mt={["5%","5%","3%"]} bg="#00a699" >
    <SimpleGrid columns={[2,2,4]} m="auto" w="80%" gap="2%" textAlign={"left"}>
        <Box  id="box1">

<Text fontWeight={700}>About Us</Text>
<Text fontWeight={600}>Join Sales</Text>
<Text fontWeight={600}>Success Stories</Text>
<Text fontWeight={600}> Press Section</Text>
<Text fontWeight={600}>Advertise With Us</Text>
<Text fontWeight={600}>Investor Section</Text>

        </Box>
        <Box id="box2">

        <Text  fontWeight={600}>Help</Text>
<Text fontWeight={600}>Feedback</Text>
<Text fontWeight={600}>Complaints</Text>
<Text fontWeight={600}>Customer Care</Text>
<Text fontWeight={600}>Jobs & Careers</Text>
<Text fontWeight={600}>Contact Us</Text>

        </Box>
        <Box  id="box3" mt={["10%","10%","0%"]}>



        <Text  fontWeight={700}>Suppliers Tool Kit</Text>
<Text fontWeight={600}>Sell on NovaMart</Text>
<Text fontWeight={600}>Latest BuyLead</Text>
<Text fontWeight={600}>Learning Centre</Text>
<Text fontWeight={600}>Ship With NovaMart</Text>
<Text fontWeight={600} display={["none","none","block"]}>GST E-invoice</Text>

        </Box>
        <Box  id="box4" mt={["10%","10%","0%"]}>

        <Text  fontWeight={700}>Buyers Tool Kit</Text>
<Text fontWeight={600}>Post Your Requirement</Text>
<Text fontWeight={600}>Product You Buy</Text>
<Text fontWeight={600}> Search Products & Suppliers</Text>
<Text fontWeight={600}>Pay With NovaMart</Text>
<Text fontWeight={600} display={["none","none","block"]}>Accounting Software</Text>

        </Box>
    </SimpleGrid>
    </Box>
    </Box>
  )
}

export default Footer