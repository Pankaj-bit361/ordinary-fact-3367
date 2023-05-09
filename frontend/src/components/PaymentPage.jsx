
import React, { useEffect, useState } from 'react' 
import { 
    Box, 
    FormControl, 
    Input, 
    FormLabel, 
    Heading, 
    Button, 
    Checkbox, 
    Text, 
    Grid, 
    Divider 
  } from "@chakra-ui/react"; 
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { getCartProducts } from '../redux/Cart/action';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Mobnav from './Mobnav';
//   import { TbDiscount2 } from 'react-icons/tb'; 
// import { AiOutlineRight } from 'react-icons/ai'; 

 
const PaymentPage = () => { 
  let total=0;
  const navigate=useNavigate()
  let [priceji,setprice]=useState(0)
  let token=JSON.parse(localStorage.getItem("token"))
  const [data,setdata]=useState([])
  const dispatch=useDispatch()


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


useEffect(()=>{
  axios.get(`https://distinct-blue-blazer.cyclic.app/cart`,{
    headers:{
      Authorization:`Bearer ${token}`
  }
  }).then((res)=>{
setdata(res.data)
  })
 
for(var i=0;i<data?.length;i++){
    total+=data[i]?.quantity*data[i]?.price
}
setprice(total)
},[data])

const deleteandadd=()=>{
  axios
  .post("https://distinct-blue-blazer.cyclic.app/order/add",data,{
   headers:{
     Authorization:`Bearer ${token}`
 }
  })
  .then((res) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Order Successfully placed',
      showConfirmButton: false,
      timer: 2000
    })
    navigate("/")
    console.log(res.data,"line 29")   
  })

  axios
  .delete("https://distinct-blue-blazer.cyclic.app/cart/deleteAll",{
   headers:{
     Authorization:`Bearer ${token}`
 }
  })
  .then((res) => {
    console.log(res.data,"line 29") 
     
    dispatch(getCartProducts()) 
  })
}
console.log(priceji,"total")
  return ( 
  
    <Box>
  {windowDimension.winWidth>767?<Navbar/>:<Mobnav/>}
    <Box 
    w={'90%'} 
    boxShadow="md" 
    p="6" 
    rounded="md" 
    bg="#EEEEEE" 
    mt="8%" 
    mb={"8%"} 
    display={"flex"} 
    justifyContent={'space-around'} 
    flexDirection={["column", "column","column", "row"]} 
    m={"auto"} 
    gap={'4%'} 
  > 
    <Box bg={'white'}  w={["80%","80%","80%",'70%']}  borderRadius={'3%'} pr={'4%'} pl={'5%'} m={'auto'}> 
      <Box> 
        <FormControl isRequired> 
          <Heading size={"md"} m="5%"> 
            Shipping Information 
          </Heading> 
          <FormLabel ml={'2%'}>Full name</FormLabel> 
          <Input placeholder="First name" type={"text"}  /> 
 
          <FormLabel ml={'2%'} mt={'2%'}>Street address</FormLabel> 
          <Input placeholder="Enter Address" type={"text"}  /> 
          <FormLabel ml={'2%'} mt={'2%'}>Zipcode</FormLabel> 
          <Input placeholder='Enter Zipcode'  type={" number"} /> 
          <FormLabel ml={'2%'} mt={'2%'}>Email</FormLabel> 
          <Input placeholder="Enter E-mail" type={"email"}  /> 
          <Checkbox defaultChecked m={"4%"}> 
            Billing address same as shipping 
          </Checkbox> 
        </FormControl> 
      </Box> 
      <Box m={"5%"}> 
        <FormControl isRequired> 
          <Heading mb='2%' size={"md"}>Payment Information</Heading> 
          <FormLabel ml={'2%'} mt={'2%'}>Debit card number</FormLabel> 
          <Input placeholder="Card number" type={"number"} /> 
          <FormLabel ml={'2%'} mt={'2%'}>Name on card name</FormLabel> 
          <Input placeholder="Card name" type={"text"}/> 
          <FormLabel ml={'2%'} mt={'2%'}>Expiry date</FormLabel> 
          <Input placeholder="Phone number" type={"date"}  /> 
          <FormLabel ml={'2%'} mt={'2%'}>CVV</FormLabel> 
          <Input  type={"number"}  /> 
        </FormControl> 
      </Box> 
    </Box> 
    <Box w={["70%","70%","70%",'30%']} alignSelf={'center'} mt={'5%'}> 
                <Grid gap={'3%'} mb={'70%'}> 
                    <Box bg='white' w={'100%'} h='auto' p={'10%'} borderRadius={'10'}> 
                        <Text fontSize={'30'}fontWeight={'bold'}>Order Summary</Text> 
                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}> 
                            <Text>Total MRP</Text> 
                            <Text color='#00ACC1'>{priceji}</Text> 
                        </Box> 
                       
                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}> 
                            <Text>Shipping Charges</Text> 
                            <Text color="#00ACC1">FREE</Text> 
                        </Box> 
                        <Box mt='5%' display={'flex'} justifyContent={'space-between'}> 
                            <Text as='bold'>Payable Amount</Text> 
                            <Text as='bold'>{priceji}</Text> 
                        </Box> 
                        <Divider mt='5%' fontWeight={'bold'}/> 
                        <Button w='100%' mt="8%"  pl={'20%'} pr={'20%'}
onClick={deleteandadd}
as='bold' color='white' bg='#00ACC1' _hover={{bg:"#0097A7"}}> 
                            Confirm Payment 
                        </Button> 
                         
                    </Box> 
                </Grid> 
            </Box> 

</Box>
      <Footer/>
</Box>
  ) 
} 
 
export default PaymentPage