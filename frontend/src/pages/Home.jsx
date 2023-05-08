import React, { useEffect, useState } from "react";
import banner from "../Images/homepage-banner1.jpg";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import mid1 from "../Images/middle image1.png";
import mid2 from "../Images/middle image2.png";
import mid3 from "../Images/middle image4.png";
import Submenu from "../components/Submenu";
import city1 from "../Images/city1.jpg";
import city2 from "../Images/city2.jpg";
import city3 from "../Images/city3.jpg";
import city4 from "../Images/city4.jpg";
import city5 from "../Images/city5.jpg";
import city6 from "../Images/city6.jpg";
import city7 from "../Images/city7.jpg";
import city8 from "../Images/city8.jpg";
import city9 from "../Images/city9.jpg";
import city10 from "../Images/city10.jpg";
import Footer from "../components/Footer";

const Home = () => {
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
  }, [windowDimension]);

  console.log(windowDimension.winWidth);

  return (
    <Box>
      <Box w="100%">
        {/* <Image src="https://i.ibb.co/4JS6wws/homepage-banner1.jpg" /> */}
        <Box></Box>
        <Box
          padding="8%"
          bgImage={"https://i.ibb.co/4JS6wws/homepage-banner1.jpg"}
        >
          <Text fontSize={"1.7vw"} color={"white"}>
            Search for products & find verified sellers near you
          </Text>
          <Flex w="60%" m="auto">
            <Select
              borderRadius={"0px"}
              w="20%"
              color="#2e3192"
              bg="white"
              gridColumnStart={3}
              gridColumnEnd={5}
            >
              <option>All India</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
            </Select>
            <InputGroup>
              <Input
                bg={"white"}
                border="0px"
                borderRadius={"0px"}
                placeholder="Search for products & brands..."
                size="md"
                borderLeft={"none"}
                _focus={{ border: "none" }}
                focusBorderColor="grey"
              />
              <InputRightAddon
                bg={"#00a699"}
                color="white"
                children={<Box bg={"#00a699"}>Search</Box>}
              />
            </InputGroup>
          </Flex>
        </Box>
      </Box>

      <Submenu />
      <Divider />
      <Box p={"2%"} bgColor="white">
        <Grid w="95%" m="auto" gap="1%" gridTemplateColumns={"repeat(7,1fr)"}>
          <Box gridColumnStart={1} gridColumnEnd={3}>
            <Text mt="10%" textAlign={"left"} fontSize={"3vw"}>
              We connect
            </Text>
            <Text
              mt="-4%"
              textAlign={"left"}
              fontSize={"3vw"}
              fontWeight={"700"}
            >
              Buyers & Sellers
            </Text>
            <Text mt="3%" textAlign={"left"} fontSize={"1.1vw"}>
              IndiaMART is India's largest online B2B marketplace, connecting
              buyers with suppliers.
            </Text>
            <Image
              mt="10%"
              src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAV8AAABECAYAAAAm0zZtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAwSSURBVHhe7ZrNjiQ5FYXrGVOax2HTKvaIJWKFVLVCPADsWNRII7GBFRs2vWiJERoJDYOghZI4tm/E9fW1w1GZGY6sPJ8U6s7wz7XvzwlHdD+dCSGE7A7FlxBCBkDxJYSQARxWfP/2+b/n3/3hn+df//aH889/9f18/eI3/wj3fv/2Y+hD7hvEEHFFPAl5JA4lvj/+9J/zd3/5KQgsChIi+8c//SvcQ5H++a//DkUqgvyzX/499EU7uT8QW8RQYom4IgcIeQQOI74QVjnZ4u9rRYh2OR1LAWMcOT7f//A1CC3ihvghljqOfJiSR+AQ4ovTLAoPJ6H3oIuZhXtMILB4OEqcvIelPIDRLm80iC25PxA7xBCxvNWFXJGH9z0yXHzhPDjxGt9v5TWW3w/HAhFFDBBbiK0uQvxuvaGgkDBWRFiKDOMwH9r4gD02iA9ihlihrm91wQ7yAtc9MlR8JUjXPN0gKCjY956iyeWIcOJPCC+KA4W4Jc7yWQnjMB7zyLy4eCI+LojVXvWHPLnXfBgmviKS+PPayAm4dcIitwO+v1XxSWwpvsflVnVdA2J/j7U+THzhMJxqesDTTV45e8FpCSclsj8U38eG4tvHEPGVzw29H8pRcPJtp/d7H4oTSdDbn1yPW/qd4nt8KL59DBFfCO+WkxFEF85FQePvveC0jMCQfaH4Pjae+OKtFfcvvbz6p/h2gqDAib2nXoBCRn/5uN47VmyxUPcFPr9UfBEz7/RE8T0+iI+NncTz0suLO8W3EzwBLzmNbvn0ALaessnlXOpzFBnm8E45FN/j44nvLaH4doKCwucAD9xH4PRl/5ENTrZ9vH4C5tzyqYJcziXiK8KLyxNYeX2l+B4XxIfiu87u4gtH1YQSQYMTETi5vE8M9hUGJ2EUqwdsUXz3BbHwYrwmmIhlS3iBPKC3fLYi++KJrzw0L728Wqb4doLCqn02QGGh3QauhRRsTdBxAkM72Y/a202teECP8AIRX3JcEB9bw/bA9N7Lyw2KbycortY3WznF1sRUwMkHfdC35fjWqZjchtqnHhFO24aiwv014QUYy3geG098bwnFtxM4au17IIQVRdYSYLShz9rrJ2zBJtkPeSh6WAHeIrzAE29yLCi+fRzqH9w0OLG2+mGeHofXTmHkdoig1sRUC/AW4UUf9F97KyJj8cQXMcP91tWbBxaKbycIQs9JFIXZ+jyBE22PiMMWi3Vf8DaCYmrFTwR4S8Eh5hiz56mKbMeLEWKMOmxda2/ENSi+naydioAUr3xSwBgUKS4JKsbjd+uzA/qwWMeAh+faGwfEuVd4AeZDzMmx2bvmKL4bQAHhSVcDjpTCRT8EE09FOfnI2DWn43TFYh0D4oJYbRHXFvIgbeUNOQYU3z6GiK+IaK0w0S4nJzhW95NTsLTVnC7F+t5XGXIZeCOROF0DzHNNMSe3A7Ha6yEpdX6PeTFEfNcKE+1ow8nV+6yAe2hrffOVU683nuwDPiugMC49lcgpmqfe+0AfkBAze9X+LQBx9vrXLqlx/P0eGSK+QAqz9Y8y70WKld96x4O3ExTIe2OBEw3G80F6XyBuEEcIsL282hQh9frXLoy5hX7sxTDxBXhiweHXfGXgKelYaPHcKsBfv/5vHnuPr5XEB/Wp34YgonhIP9rDdaj4AnniXeMJJsKLOclxEAFGbHrjLK+u3imJ3DdafG9xALsXhosvQAAQELxKvDcIEFzMwRPvMUFccbpBjBCr2ilHvuejH4qSwvvxEPHFP4Y/qvCCQ4gvQDDkpIPi21p0GPOoQbwXIKzyoEWsdczwJ35LDuBBzG+8HxOJL/585IfrYcQXoNjwNJQTEgpRPqyjaCmuHwMUnBSfLkRcrf8+SD4GEutHj/OhxFeDAoXoojAhwrj4f3Y/FnLaFQHmJ4bHgMIbOaz4EkLIR4biSwghA6D4EkLIACi+hBAyAIovIYQMgOJLCCEDoPgSQsgAKL6EEDIAii8hhAyA4ksIIQOg+BJCyAAovoQQMgCKLyGEDIDiSwghA6D4EkLIACi+hBAyAIovIYQMwBffzy/n09PT+al2fXpLHa/Fl/PLN0/n52/Tz3fw9qm+ri+vJ38f37xMlhNhz6fzy+f0u8W3z/nYtP447/P52t7ZSvBFbZ89YH9p7Ol108gZvYa+ObQP03X1PHsE3s7P2ofTtTWGrVrShLralFsS42vWSNzvunZcrjHXpuPku8eiL7exKr5OWxgjyXOJ+Iax40UXeH6IQti/PvR/r+iCrCi7/Brjn9tMhbr1wfHIpIdmXkdJjG/gx83iG+rm+fxcxHoPPpD4wvGn15f5KYv2ovBN4YVgpf5P8/1UZOn+EhTzBLfiGeaW9imgjugINfHNRNOKhDr9iY3QL7s/3TP9ZP35XnPhg5+eJ9/F9U82v0vr0HNhvWaPzg4MtVOAvZ/7HFdct70vNs39lYLL8wC2V8TX+l5w7vs5JNRypvRLmEc/IKa/v2Ddalzb1tGoxR7kbdneA3m7reOaH+w8YVzDT2hHnpX2Iy1/19ucvRX9KhqT1ZfuL23P5xc9n1lza71WP7y4XCS+1qANWlY8YTFKQLLf1oZNpNhunTa3y0a1bUVYq9eWHBxairXqvcX1zHOgXQdCzzMRfVP/HZN0+S37meeX33Mfs/8qKcmcxF5IfZQ/bCylSCKl7SLOlrT+06fnfF9VjH8rhHXqvTk55K/b5pOZS9ar9ti2dUBsThr0foq9Gf9k8bX7Vr/1PGFMw360kXIs+FvX10TDTrMtzJvW3uwX82HOgRTzJSdSXcgepAbnnIx25hxp2bJt3n4nLhNf4+yiKLVRu6CM3EaY2xZimCuO77KtcOdLNuf7FQcJRUJq+2ptWTLMRFsSuKafAnl/4O/BI9pfe+pmGPtYX5ZkRVGpQnJZ1rBqWwhr0Ou28/s257U286uMSZZDhf9XbB2Q1fxQ/inrJ/fPkp9lHmpknjf8WfV9xNosaqAVv97YNvvlGuPRzolev/h2vPjsJ75pHl8QchthntQvv6JjCzsT3uaE0ObNp9fvOLsQBJkfQS7GpqB780xgzRKstp9A6fPW/qpk6y+TMvfzYl+vteo7Z4+BUABx7XFs6of7vetPc4QrKwZtf7mw1mDL5OPCRvFdsXVEVvNDCVPpq5r4ln7TxPgm3zRj62iIWk9kXR/8Nr3G9TnyeyCOlzHVnJjo84uZT1/GRzuK78JS9NKW2yjmMXjtreRbTUyg16qKz10TEkfvPfQ/oPjOxPky+9hfJdH0Wr0418ntgGjrdD5N9/vnEVSSV/wqtNdZFkvW3869YuuQ2Jw06P2Wvsr9s+RnS2TSPCHv2/2yh6m5vIfZnJ9ODMo233bZz9ZUHKfX0MyJiT6/rPhCMUR8I7pQcxve3Jou24rQf0241Fq9/tn8LfF1nZ+L0rqfSp937aE4TSzkiWNiYuyj71wUjTlL8n1G4j2vkIR6vPV8K0ndXGc5NrNZ+L+/gI6Dv0ddXxKX0t/52CVXvHgu6HnC31dzLyfcd+MOWrZ780L3i3+f+9kanmjnRK9fWm05VxVfG4CwWNmALY5sc9ZGdKjeQG7PODzM7QcYhLGVthm1Hru3uC81vw1cGLvszfrB/i6SsQh06fOuPaRxNi75/DZZ428tjljf4vs0p7bdEDq71zk2uOy6ZtIa7P6MnWLuNC7uJa5T54wtlmX+ZE/WU/h/zdZBSb5e1pj2rfcKQr9lv3Gvy7gsP22sq3Xi5Emg4Tft94adZpuev9kvrm9eh+0bfrdzotcvsU2PLXMTXFV85wBgE8EhcMyyiLD41Bbb430gCTBvLmxG9be2dPvUFv6bUBH4SJi70jbjBGq2PY2N6xNnp+KV/mGsCsTEvJ9w5W1ZEEFmG5Q+79pDwvrZ2p8TLVywG/cjyYHxeaLIfivzGfK9y75UkbgYn+Mq8qvcWz6fWacen+XTtH74QNoL/0fato6KjZW6lD/03k6vb1m+hTaVa3k8l37hvuNj7ac4tpYvKebJVsvf9bY8r1pzzPvw7GEfWjSdnOj1C7BtVnhBh/gSQj4CX15fKiJIRkDxJYSQAVB8CSFkABRfQggZAMWXEEIGQPElhJABUHwJIWQAFF9CCNmd8/n/0FUlZ5I5D+cAAAAASUVORK5CYII="
            />
          </Box>
          <Box gridColumnStart={3} gridColumnEnd={8}>
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
              <Image
                src={"https://hm.imimg.com/imhome_gifs/cricket_fever.jpg"}
              />
              <Image src="https://hm.imimg.com/imhome_gifs/home-banner-4.jpg" />
            </Carousel>
          </Box>
        </Grid>
      </Box>

      {windowDimension.winWidth > 1000 ? (
        <Box bgColor="white" pb="5%">
          <Box w="95%" m="auto" bgColor="white">
            <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
              Building Construction Material & Equipment
            </Text>
            <Grid gridTemplateColumns={"repeat(7,1fr)"} mt="1%">
              <Box
                gridColumnStart={1}
                gridColumnEnd={3}
                id="box11"
                w="88%"
                textAlign={"left"}
                fontWeight={400}
                fontSize={"1.3vw"}
                display={"flex"}
                p="3%"
                justifyContent={"end"}
                flexDir={"column"}
                color="white"
                backdropFilter="auto"
                backdropContrast="30%"
                bgImage={
                  "https://hm.imimg.com/imhome_gifs/building-construction.jpg"
                }
              >
                <Box>
                  {" "}
                  <Text>Prefabricated Houses</Text>
                  <Text>Scaffolding Planks & Plates</Text>
                  <Text>Construction Machines</Text>
                  <Text>Crushing Machines & Plants</Text>
                  <Button mt="2%" bg="#19a598" w="50%">
                    ViewAll
                  </Button>
                </Box>
              </Box>

              <Box gridColumnStart={3} gridColumnEnd={8} id="box12">
                <SimpleGrid columns={[1, 2, 3]} gap="1%">
                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex gap="5%">
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontSize={["3rem", "1.5rem", "1rem"]}
                          fontWeight={700}
                          color="blackAlpha.900"
                        >
                          Brick Making Machines
                        </Text>
                        <Text fontSize={["3vw", "1.5vw", "1vw"]}>
                          Fly Ash Brick Making Machine
                        </Text>
                        <Text fontSize={["3vw", "1.5vw", "1vw"]}>
                          Clay Brick Making Machine
                        </Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Passenger Lifts
                        </Text>
                        <Text>Residential Elevator</Text>
                        <Text>Kone Passenger lift</Text>
                        <Text>Stair Lift</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          TMT Bars
                        </Text>
                        <Text>TMT Steel Bars</Text>
                        <Text>TATA TMT Bars</Text>
                        <Text>Kamdhenu TMT Bars</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                    color="#666666"
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg"
                        />
                      </Box>
                      <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Plywoods
                        </Text>
                        <Text>SHuttering Plywoord</Text>
                        <Text>Laminated Plywood</Text>
                        <Text>Waterproof Plywood</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Excavator
                        </Text>
                        <Text>Hitachi Excavator</Text>
                        <Text>Hyundai Excavator</Text>
                        <Text>Komatsu Excavator</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/VG/QG/GLADMIN-27799/emulsion-paints-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Emulsion Paints
                        </Text>
                        <Text>Asian Emulsion </Text>
                        <Text>Berger Emulsion </Text>
                        <Text>Nerolac Emulsion </Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/UT/PB/GLADMIN-12558/wood-door-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Wooden Door
                        </Text>
                        <Text>Designer Wooden</Text>
                        <Text>Plywood Door</Text>
                        <Text>Wooden Flush Door</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/YD/WE/GLADMIN-23639/building-brick-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Building Brick
                        </Text>
                        <Text>Red Brick</Text>
                        <Text>Fly Ash Bricks</Text>
                        <Text>Cement Brick</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          PVC Pipes
                        </Text>
                        <Text>Finolex Pipes</Text>
                        <Text>Rigid PVC Pipes</Text>
                        <Text>Flexible PVC Pipes</Text>
                      </Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Box>
            </Grid>
          </Box>
        </Box>
      ) : windowDimension.winWidth > 650 ? (
        <Box m="auto" w="90%">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
            Building Construction Material & Equipment
          </Text>
          <SimpleGrid columns={3} gap="1%">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Brick Making Machines
                  </Text>
                  <Text>Fly Ash Brick Making Machine</Text>
                  <Text>Clay Brick Making Machine</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Passenger Lifts
                  </Text>
                  <Text>Residential Elevator</Text>
                  <Text>Kone Passenger lift</Text>
                  <Text>Stair Lift</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    TMT Bars
                  </Text>
                  <Text>TMT Steel Bars</Text>
                  <Text>TATA TMT Bars</Text>
                  <Text>Kamdhenu TMT Bars</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Plywoods
                  </Text>
                  <Text>SHuttering Plywoord</Text>
                  <Text>Laminated Plywood</Text>
                  <Text>Waterproof Plywood</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Excavator
                  </Text>
                  <Text>Hitachi Excavator</Text>
                  <Text>Hyundai Excavator</Text>
                  <Text>Komatsu Excavator</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/VG/QG/GLADMIN-27799/emulsion-paints-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Emulsion Paints
                  </Text>
                  <Text>Asian Emulsion </Text>
                  <Text>Berger Emulsion </Text>
                  <Text>Nerolac Emulsion </Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/UT/PB/GLADMIN-12558/wood-door-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Wooden Door
                  </Text>
                  <Text>Designer Wooden</Text>
                  <Text>Plywood Door</Text>
                  <Text>Wooden Flush Door</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/YD/WE/GLADMIN-23639/building-brick-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Building Brick
                  </Text>
                  <Text>Red Brick</Text>
                  <Text>Fly Ash Bricks</Text>
                  <Text>Cement Brick</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    PVC Pipes
                  </Text>
                  <Text>Finolex Pipes</Text>
                  <Text>Rigid PVC Pipes</Text>
                  <Text>Flexible PVC Pipes</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      ) : (
        <Box w="90%" m="auto">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"3vw"}>
            Building Construction Material & Equipment
          </Text>
          <SimpleGrid columns={2} gap="1%" bg="white">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Brick Making Machines
                  </Text>
                  <Text>Fly Ash Brick Making Machine</Text>
                  <Text>Clay Brick Making Machine</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Passenger Lifts
                  </Text>
                  <Text>Residential Elevator</Text>
                  <Text>Kone Passenger lift</Text>
                  <Text>Stair Lift</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    TMT Bars
                  </Text>
                  <Text>TMT Steel Bars</Text>
                  <Text>TATA TMT Bars</Text>
                  <Text>Kamdhenu TMT Bars</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Plywoods
                  </Text>
                  <Text>SHuttering Plywoord</Text>
                  <Text>Laminated Plywood</Text>
                  <Text>Waterproof Plywood</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Excavator
                  </Text>
                  <Text>Hitachi Excavator</Text>
                  <Text>Hyundai Excavator</Text>
                  <Text>Komatsu Excavator</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    PVC Pipes
                  </Text>
                  <Text>Finolex Pipes</Text>
                  <Text>Rigid PVC Pipes</Text>
                  <Text>Flexible PVC Pipes</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      )}

      {windowDimension.winWidth > 1000 ? (
        <Box bgColor="white" pb="5%">
          <Box w="95%" m="auto" mt="3%">
            <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
              Electronics & Electrical Goods & Supplies
            </Text>
            <Grid gridTemplateColumns={"repeat(7,1fr)"} mt="1%">
              <Box
                gridColumnStart={1}
                gridColumnEnd={3}
                id="box11"
                w="88%"
                textAlign={"left"}
                fontWeight={400}
                fontSize={"1.3vw"}
                display={"flex"}
                p="3%"
                justifyContent={"end"}
                flexDir={"column"}
                color="white"
                backdropFilter="auto"
                backdropContrast="30%"
                bgImage={
                  "https://hm.imimg.com/imhome_gifs/electronics-electrical-goods.jpg"
                }
              >
                <Box>
                  {" "}
                  <Text>Voltage & Power Stabilizers</Text>
                  <Text>GPS and Navigation Devices</Text>
                  <Text>Biometrics & Access Control Devices</Text>
                  <Text>CCTV, Surveillance Systems and Parts</Text>
                  <Button mt="2%" bg="#19a598" w="50%">
                    ViewAll
                  </Button>
                </Box>
              </Box>

              <Box gridColumnStart={3} gridColumnEnd={8} id="box12">
                <SimpleGrid columns={3} gap="1%">
                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex gap="5%">
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Office Automation Products
                        </Text>
                        <Text>Multifunction Printer</Text>
                        <Text>Xerox Machines</Text>
                        <Text>Fingerprint Scanners</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Sensors & Transducers
                        </Text>
                        <Text>Level Sensors</Text>
                        <Text>Proximity Sensor</Text>
                        <Text>Load Cell</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Process Controllers
                        </Text>
                        <Text>Level Controllers</Text>
                        <Text>Motor Controllers</Text>
                        <Text>Temperature Controller</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                    color="#666666"
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg"
                        />
                      </Box>
                      <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          VFD
                        </Text>
                        <Text>VFD</Text>
                        <Text>PLC</Text>
                        <Text>HMI</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Diodes & Active Devices
                        </Text>
                        <Text>Integrated Circuits</Text>
                        <Text>Thyristors</Text>
                        <Text>Light Emitting Diode</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Wires & Cables
                        </Text>
                        <Text>House Wire</Text>
                        <Text>Armoured Cable</Text>
                        <Text>Power Cable</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/VB/IL/GLADMIN-2/street-light-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Commercial Lights
                        </Text>
                        <Text>Flood Lights</Text>
                        <Text>Street Lights</Text>
                        <Text>Panel Light</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/LX/YW/GLADMIN-2/inverter-batteries-125x125.png"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Batteries
                        </Text>
                        <Text>Lithium Battery</Text>
                        <Text>Inverter Batteries</Text>
                        <Text>Electric Vehicle Battery</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/EX/HO/GLADMIN-37340/solar-power-systems-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Solar & Renewable Energy
                        </Text>
                        <Text>Solar Panels</Text>
                        <Text>Solar Inverter</Text>
                        <Text>Solar Pumps</Text>
                      </Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Box>
            </Grid>
          </Box>
        </Box>
      ) : windowDimension.winWidth > 650 ? (
        <Box w="90%" m="auto" mt="2%">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
            Electronics & Electrical Goods & Supplies
          </Text>
          <SimpleGrid columns={3} gap="1%">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Office Automation Products
                  </Text>
                  <Text>Multifunction Printer</Text>
                  <Text>Xerox Machines</Text>
                  <Text>Fingerprint Scanners</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Sensors & Transducers
                  </Text>
                  <Text>Level Sensors</Text>
                  <Text>Proximity Sensor</Text>
                  <Text>Load Cell</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Process Controllers
                  </Text>
                  <Text>Level Controllers</Text>
                  <Text>Motor Controllers</Text>
                  <Text>Temperature Controller</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    VFD
                  </Text>
                  <Text>VFD</Text>
                  <Text>PLC</Text>
                  <Text>HMI</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Diodes & Active Devices
                  </Text>
                  <Text>Integrated Circuits</Text>
                  <Text>Thyristors</Text>
                  <Text>Light Emitting Diode</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Wires & Cables
                  </Text>
                  <Text>House Wire</Text>
                  <Text>Armoured Cable</Text>
                  <Text>Power Cable</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/VB/IL/GLADMIN-2/street-light-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Commercial Lights
                  </Text>
                  <Text>Flood Lights</Text>
                  <Text>Street Lights</Text>
                  <Text>Panel Light</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/LX/YW/GLADMIN-2/inverter-batteries-125x125.png"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Batteries
                  </Text>
                  <Text>Lithium Battery</Text>
                  <Text>Inverter Batteries</Text>
                  <Text>Electric Vehicle Battery</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/EX/HO/GLADMIN-37340/solar-power-systems-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Solar & Renewable Energy
                  </Text>
                  <Text>Solar Panels</Text>
                  <Text>Solar Inverter</Text>
                  <Text>Solar Pumps</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      ) : (
        <Box mt="5%" m="auto" w="90%">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"3vw"}>
            Electronics & Electrical Goods & Supplies
          </Text>
          <SimpleGrid columns={2} gap="1%">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Office Automation Products
                  </Text>
                  <Text>Multifunction Printer</Text>
                  <Text>Xerox Machines</Text>
                  <Text>Fingerprint Scanners</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Sensors & Transducers
                  </Text>
                  <Text>Level Sensors</Text>
                  <Text>Proximity Sensor</Text>
                  <Text>Load Cell</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Process Controllers
                  </Text>
                  <Text>Level Controllers</Text>
                  <Text>Motor Controllers</Text>
                  <Text>Temperature Controller</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    VFD
                  </Text>
                  <Text>VFD</Text>
                  <Text>PLC</Text>
                  <Text>HMI</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Diodes & Active Devices
                  </Text>
                  <Text>Integrated Circuits</Text>
                  <Text>Thyristors</Text>
                  <Text>Light Emitting Diode</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Wires & Cables
                  </Text>
                  <Text>House Wire</Text>
                  <Text>Armoured Cable</Text>
                  <Text>Power Cable</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      )}

      {windowDimension.winWidth > 1000 ? (
        <Box bgColor="white" pb="5%">
          <Box w="95%" m="auto" mt="3%">
            <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
              Chemicals, Dyes, Solvents & Allied Products
            </Text>
            <Grid gridTemplateColumns={"repeat(7,1fr)"} mt="1%">
              <Box
                gridColumnStart={1}
                gridColumnEnd={3}
                id="box11"
                w="88%"
                textAlign={"left"}
                fontWeight={400}
                fontSize={"1.3vw"}
                display={"flex"}
                p="3%"
                justifyContent={"end"}
                flexDir={"column"}
                color="white"
                backdropFilter="auto"
                backdropContrast="30%"
                bgImage={"https://hm.imimg.com/imhome_gifs/bigBn03.jpg"}
              >
                <Box>
                  {" "}
                  <Text>Paint Additives</Text>
                  <Text>Inorganic Salts</Text>
                  <Text>Organic & Inorganic Solvents</Text>
                  <Text>Waterproofing Chemicals</Text>
                  <Button mt="2%" bg="#19a598" w="50%">
                    ViewAll
                  </Button>
                </Box>
              </Box>

              <Box gridColumnStart={3} gridColumnEnd={8} id="box12">
                <SimpleGrid columns={[1, 2, 3]} gap="1%">
                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex gap="5%">
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/VT/MS/EJ/SELLER-37223018/isopropyl-alcohol-125x125.jpeg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Industrial Alochol
                        </Text>
                        <Text>Isopropyl Alochol</Text>
                        <Text>Rubbing Alochol</Text>
                        <Text>Ethyl Alochol</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/QG/AM/MY-6319721/buffer-solution-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Chemical Compound
                        </Text>
                        <Text>IPA HCL</Text>
                        <Text>Glycerine</Text>
                        <Text>Silver Nitrate</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/CB/VE/MY-2136567/biodegradable-chelant-125x125.png"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Industrial Chemicals
                        </Text>
                        <Text>Speciality Chemicals</Text>
                        <Text>Waterproofing Chemicals</Text>
                        <Text>Adhesive Chemicals</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                    color="#666666"
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://4.imimg.com/data4/SH/TT/MY-1235568/reactive-m-dyes-125x125.jpg"
                        />
                      </Box>
                      <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Industrial Dyes
                        </Text>
                        <Text>Acid Dyes</Text>
                        <Text>Direct Dyes</Text>
                        <Text>Solvent Dyes</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/DP/KR/MY-3300499/thermoplastic-resin-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Resin
                        </Text>
                        <Text>PVC Resin</Text>
                        <Text>Ion Resin</Text>
                        <Text>Polyster Resin</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://4.imimg.com/data4/VN/QS/MY-4148413/chemical-fertilizer-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Chemical Fertilizers
                        </Text>
                        <Text>Micronutrient Fertilizers</Text>
                        <Text>Phosphate Fertilizers</Text>
                        <Text>Sulphur Fertilizers</Text>
                      </Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Box>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box w="90%" mt="2%" m="auto">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
            Chemicals, Dyes, Solvents & Allied Products
          </Text>
          <SimpleGrid columns={{ sm: 2, md: 3 }} gap="1%">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/VT/MS/EJ/SELLER-37223018/isopropyl-alcohol-125x125.jpeg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Industrial Alochol
                  </Text>
                  <Text>Isopropyl Alochol</Text>
                  <Text>Rubbing Alochol</Text>
                  <Text>Ethyl Alochol</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/QG/AM/MY-6319721/buffer-solution-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Chemical Compound
                  </Text>
                  <Text>IPA HCL</Text>
                  <Text>Glycerine</Text>
                  <Text>Silver Nitrate</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/CB/VE/MY-2136567/biodegradable-chelant-125x125.png"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Industrial Chemicals
                  </Text>
                  <Text>Speciality Chemicals</Text>
                  <Text>Waterproofing Chemicals</Text>
                  <Text>Adhesive Chemicals</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://4.imimg.com/data4/SH/TT/MY-1235568/reactive-m-dyes-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Industrial Dyes
                  </Text>
                  <Text>Acid Dyes</Text>
                  <Text>Direct Dyes</Text>
                  <Text>Solvent Dyes</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/DP/KR/MY-3300499/thermoplastic-resin-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Resin
                  </Text>
                  <Text>PVC Resin</Text>
                  <Text>Ion Resin</Text>
                  <Text>Polyster Resin</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://4.imimg.com/data4/VN/QS/MY-4148413/chemical-fertilizer-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Chemical Fertilizers
                  </Text>
                  <Text>Micronutrient Fertilizers</Text>
                  <Text>Phosphate Fertilizers</Text>
                  <Text>Sulphur Fertilizers</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      )}

      {windowDimension.winWidth > 1000 ? (
        <Box bgColor="white" mt="2%" pb="5%">
          <Box m="auto" w="95%">
            <Grid gridTemplateColumns={"repeat(3,1fr)"} gap="2%">
              <Box gridColumnStart={1} gridColumnEnd={2} padding={"10%"}>
                <Text textAlign={"left"} fontWeight={600} fontSize={"2.5vw"}>
                  Get free Quotes from multiple Sellers
                </Text>
                <Flex
                  gap="5%"
                  m="auto"
                  mt="5%"
                  fontSize={"0.9vw"}
                  textAlign={"left"}
                >
                  <Box w="30%">
                    <Image src={mid1} w="80%" />
                    <Text>Tell us what You Need</Text>
                  </Box>
                  <Box w="30%">
                    {" "}
                    <Image src={mid2} w="80%" />
                    <Text>Receive free quotes from sellers</Text>
                  </Box>
                  <Box w="30%">
                    <Image src={mid3} w="75%" mt="-5%" />
                    <Text>Seal the deal</Text>
                  </Box>
                </Flex>
              </Box>

              <Box gridColumnStart={2} gridColumnEnd={4} padding={"5%"}>
                <Text textAlign={"left"} fontWeight={500} fontSize={"2vw"}>
                  Tell us your Requirement
                </Text>
                <Input
                  mt="2%"
                  w="80%"
                  borderRadius={"0px"}
                  mr={"20%"}
                  placeholder="Enter Product/Service name"
                />
                <Flex mt="2%" w="65%">
                  <Box p="1%" border={"1px solid #e2e8f0"}>
                    +91
                  </Box>
                  <Input borderRadius={"0px"} placeholder="Enter your mobile" />
                </Flex>

                <Input
                  mr={"70%"}
                  mt="2%"
                  w="30%"
                  placeholder="Enter your Name"
                />
                <Button color="white" bgColor={"#19a598"} mt="2%">
                  Submit Requirement
                </Button>
              </Box>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box mt="5%">
          {" "}
          <Text ml="10%" textAlign={"left"} fontWeight={500} fontSize={"3.5vw"}>
            Tell us your Requirement
          </Text>
          <Input
            mt="2%"
            w="80%"
            borderRadius={"0px"}
            placeholder="Enter Product/Service name"
          />
          <Flex mt="2%" w="80%" m="auto">
            <Box p="1%" border={"1px solid #e2e8f0"}>
              +91
            </Box>
            <Input borderRadius={"0px"} placeholder="Enter your mobile" />
          </Flex>
          <Input mt="2%" w="80%" placeholder="Enter your Name" />
          <Button color="white" bgColor={"#19a598"} mt="2%">
            Submit Requirement
          </Button>
        </Box>
      )}

      {windowDimension.winWidth > 1000 ? (
        <Box bgColor="white" pb="5%">
          <Box w="95%" m="auto" mt="3%">
            <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
              Pharmaceutical Drug, Medicine, Medical Care & Consultation
            </Text>
            <Grid gridTemplateColumns={"repeat(7,1fr)"} mt="1%">
              <Box
                gridColumnStart={1}
                gridColumnEnd={3}
                id="box11"
                w="88%"
                textAlign={"left"}
                fontWeight={400}
                fontSize={"1.3vw"}
                display={"flex"}
                p="3%"
                justifyContent={"end"}
                flexDir={"column"}
                color="white"
                backdropFilter="auto"
                backdropContrast="30%"
                bgImage={"https://hm.imimg.com/imhome_gifs/bigBn06.jpg"}
              >
                <Box>
                  {" "}
                  <Text>Pharma Raw Material</Text>
                  <Text>Pharmaceuticals Chemicals</Text>
                  <Text>Clinic Trial Services</Text>
                  <Text>X-ray Services</Text>
                  <Button mt="2%" bg="#19a598" w="50%">
                    ViewAll
                  </Button>
                </Box>
              </Box>

              <Box gridColumnStart={3} gridColumnEnd={8} id="box12">
                <SimpleGrid columns={[1, 2, 3]} gap="1%">
                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex gap="5%">
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/KT/MJ/MY-16675294/pharmaceutical-drug-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Pharmaceutical Drug
                        </Text>
                        <Text>Antiplatelet Drug</Text>
                        <Text>Antiparasitic Drug</Text>
                        <Text>Antibiotic Tablets</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/JR/DH/GLADMIN-7427/nutritional-supplements-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Nutraceuticals
                        </Text>
                        <Text>Weight Loss Supplements</Text>
                        <Text>Dietary Supplements</Text>
                        <Text>Mineral Supplements</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/PQ/HW/MY-7191707/thinq-mass-gainer-282-lbs-29-125x125.png"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Fitness Supplements
                        </Text>
                        <Text>Weight Gain Capsule</Text>
                        <Text>Weight Gain Nutrition</Text>
                        <Text>Immune Booster</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                    color="#666666"
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/BA/YT/MY-2018319/multidisciplinary-care-125x125.jpg"
                        />
                      </Box>
                      <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Medical Tratment Services
                        </Text>
                        <Text>Dental Services</Text>
                        <Text>Eye Tratment</Text>
                        <Text>Plastic Surgery Services</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/JM/MB/MY-4222986/8-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Medical Test Services
                        </Text>
                        <Text>CT Scan</Text>
                        <Text>UltraSound Services</Text>
                        <Text>Blood Testing</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/YC/QB/MY-3773531/allopathic-pcd-pharma-franchise-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          PCD Pharma Franchise
                        </Text>
                        <Text>Pharma Franchise</Text>
                        <Text>Allopathic PCD Pharma </Text>
                        <Text>Ayurvedic PCD Pharma </Text>
                      </Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Box>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box w="90%" m="auto">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"3vw"}>
            Pharmaceutical Drug, Medicine, Medical Care & Consultation
          </Text>
          <SimpleGrid columns={[2, 3]} gap="1%">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/KT/MJ/MY-16675294/pharmaceutical-drug-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Pharmaceutical Drug
                  </Text>
                  <Text>Antiplatelet Drug</Text>
                  <Text>Antiparasitic Drug</Text>
                  <Text>Antibiotic Tablets</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/JR/DH/GLADMIN-7427/nutritional-supplements-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Nutraceuticals
                  </Text>
                  <Text>Weight Loss Supplements</Text>
                  <Text>Dietary Supplements</Text>
                  <Text>Mineral Supplements</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/PQ/HW/MY-7191707/thinq-mass-gainer-282-lbs-29-125x125.png"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Fitness Supplements
                  </Text>
                  <Text>Weight Gain Capsule</Text>
                  <Text>Weight Gain Nutrition</Text>
                  <Text>Immune Booster</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/BA/YT/MY-2018319/multidisciplinary-care-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Medical Tratment Services
                  </Text>
                  <Text>Dental Services</Text>
                  <Text>Eye Tratment</Text>
                  <Text>Plastic Surgery Services</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/JM/MB/MY-4222986/8-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Medical Test Services
                  </Text>
                  <Text>CT Scan</Text>
                  <Text>UltraSound Services</Text>
                  <Text>Blood Testing</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/YC/QB/MY-3773531/allopathic-pcd-pharma-franchise-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    PCD Pharma Franchise
                  </Text>
                  <Text>Pharma Franchise</Text>
                  <Text>Allopathic PCD Pharma </Text>
                  <Text>Ayurvedic PCD Pharma </Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      )}

      <Box w="100%" bg="white" mt="5%" p="1%">
        <Text
          fontWeight={600}
          ml={"10%"}
          textAlign={"left"}
          fontSize={["3vw", "2.2vw"]}
        >
          Find Suppliers from Top Cities
        </Text>
        <SimpleGrid columns={5} w="90%" m="auto" mt="2%">
          <Box m="auto" p="5%">
            <Image src={city1} />
            <Box>Delhi</Box>
          </Box>

          <Box m="auto">
            {" "}
            <Image src={city2} />
            <Box>Bengaluru</Box>
          </Box>

          <Box m="auto">
            {" "}
            <Image src={city3} />
            <Box>Chennai</Box>
          </Box>
          <Box m="auto">
            {" "}
            <Image src={city4} />
            <Box>Mumbai</Box>
          </Box>
          <Box m="auto">
            {" "}
            <Image src={city5} />
            <Box>Ahmedabad</Box>
          </Box>
          <Box mt="10%" m="auto">
            {" "}
            <Image src={city6} />
            <Box>Kolkata</Box>
          </Box>
          <Box mt="10%" m="auto">
            {" "}
            <Image src={city7} />
            <Box>Pune</Box>
          </Box>
          <Box mt="10%" m="auto">
            {" "}
            <Image src={city8} />
            <Box>Surat</Box>
          </Box>

          <Box mt="10%" m="auto">
            {" "}
            <Image src={city9} />
            <Box>Jaipur</Box>
          </Box>
          <Box mt="10%" m="auto">
            {" "}
            <Image src={city10} />
            <Box>Hyderabad</Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* //chnage */}

      {windowDimension.winWidth > 1000 ? (
        <Box bgColor="white" pb="5%">
          <Box w="95%" m="auto" mt="3%">
            <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.5vw"}>
              Apparel, Clothing & Garments
            </Text>
            <Grid gridTemplateColumns={"repeat(7,1fr)"} mt="1%">
              <Box
                gridColumnStart={1}
                gridColumnEnd={3}
                id="box11"
                w="88%"
                textAlign={"left"}
                fontWeight={400}
                fontSize={"1.3vw"}
                display={"flex"}
                p="3%"
                justifyContent={"end"}
                flexDir={"column"}
                color="white"
                backdropFilter="auto"
                backdropContrast="30%"
                bgImage={
                  "https://hm.imimg.com/imhome_gifs/apparel-clothing-garments.jpg"
                }
              >
                <Box>
                  {" "}
                  <Text>Apparel & Clothing Fabric</Text>
                  <Text>Kids Wear</Text>
                  <Text>Ladies Suits</Text>
                  <Text>Dress Material</Text>
                  <Button mt="2%" bg="#19a598" w="50%">
                    ViewAll
                  </Button>
                </Box>
              </Box>

              <Box gridColumnStart={3} gridColumnEnd={8} id="box12">
                <SimpleGrid columns={[1, 2, 3]} gap="1%">
                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/OC/VP/GLADMIN-43237/ladies-kurtis-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Ladies Kurtis
                        </Text>
                        <Text>Designer Kurtis</Text>
                        <Text>Cotton Kurtis</Text>
                        <Text>Ladies Woolen Kurtis</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/EK/BM/GLADMIN-2296/mens-t-shirts-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Mens T-Shirt
                        </Text>
                        <Text>Men Round Neck</Text>
                        <Text>Mens Polo</Text>
                        <Text>Graphic Printed</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                    color="#666666"
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/CS/SE/MY-2/blazers-125x125.jpg"
                        />
                      </Box>
                      <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Blazers
                        </Text>
                        <Text>Mens Blazers</Text>
                        <Text>Womens Blazers</Text>
                        <Text>Designer Blazers</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex gap="5%">
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/XM/FR/GLADMIN-8367/safety-shoes-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Safety Shoes
                        </Text>
                        <Text>Leather Shoes</Text>
                        <Text>Steel to Safety Shoes</Text>
                        <Text>Industrial Shoes</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/MM/IB/GLADMIN-2576/trouser-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Trouser
                        </Text>
                        <Text>Cargo Pant</Text>
                        <Text>Jogger Pant</Text>
                        <Text>Chino Trousers</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/FH/NO/GLADMIN-1110/mannequins-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Mannequins
                        </Text>
                        <Text>Female Mannequins</Text>
                        <Text>Dress Forms</Text>
                        <Text>Male Mannequins</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/PP/PP/GLADMIN-/commercial-uniforms-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Commercial Uniforms
                        </Text>
                        <Text>Worker Uniform</Text>
                        <Text>HouseKeeping Uniform</Text>
                        <Text>Corporate Uniform</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    padding={"2%"}
                  >
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://3.imimg.com/data3/RR/YL/GLADMIN-105908/shirt-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Shirt
                        </Text>
                        <Text>Printed Shirt</Text>
                        <Text>Designer Shirt</Text>
                        <Text>Plain Shirt</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
                    <Flex>
                      <Box w="50%">
                        <Image
                          mt="10%"
                          src="https://5.imimg.com/data5/FK/WJ/GLADMIN-2/synthetic-fabric-125x125.jpg"
                        />
                      </Box>
                      <Box
                        padding={"5%"}
                        fontSize={"1vw"}
                        textAlign={"left"}
                        color="#666666"
                      >
                        <Text
                          fontWeight={700}
                          fontSize={"1.1vw"}
                          color="blackAlpha.900"
                        >
                          Synthetic Fabric
                        </Text>
                        <Text>Rayon Fabrics</Text>
                        <Text>Faux Fur Fabrics</Text>
                        <Text>Viscose Fabrics</Text>
                      </Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Box>
            </Grid>
          </Box>
        </Box>
      ) : windowDimension.winWidth > 650 ? (
        <Box w="90%" m="auto">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"2.8vw"}>
            Apparel, Clothing & Garments
          </Text>
          <SimpleGrid columns={3} gap="1%">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/OC/VP/GLADMIN-43237/ladies-kurtis-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Ladies Kurtis
                  </Text>
                  <Text>Designer Kurtis</Text>
                  <Text>Cotton Kurtis</Text>
                  <Text>Ladies Woolen Kurtis</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/EK/BM/GLADMIN-2296/mens-t-shirts-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Mens T-Shirt
                  </Text>
                  <Text>Men Round Neck</Text>
                  <Text>Mens Polo</Text>
                  <Text>Graphic Printed</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/CS/SE/MY-2/blazers-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Blazers
                  </Text>
                  <Text>Mens Blazers</Text>
                  <Text>Womens Blazers</Text>
                  <Text>Designer Blazers</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/XM/FR/GLADMIN-8367/safety-shoes-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Safety Shoes
                  </Text>
                  <Text>Leather Shoes</Text>
                  <Text>Steel to Safety Shoes</Text>
                  <Text>Industrial Shoes</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/MM/IB/GLADMIN-2576/trouser-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Trouser
                  </Text>
                  <Text>Cargo Pant</Text>
                  <Text>Jogger Pant</Text>
                  <Text>Chino Trousers</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/FH/NO/GLADMIN-1110/mannequins-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Mannequins
                  </Text>
                  <Text>Female Mannequins</Text>
                  <Text>Dress Forms</Text>
                  <Text>Male Mannequins</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/PP/PP/GLADMIN-/commercial-uniforms-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Commercial Uniforms
                  </Text>
                  <Text>Worker Uniform</Text>
                  <Text>HouseKeeping Uniform</Text>
                  <Text>Corporate Uniform</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/RR/YL/GLADMIN-105908/shirt-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Shirt
                  </Text>
                  <Text>Printed Shirt</Text>
                  <Text>Designer Shirt</Text>
                  <Text>Plain Shirt</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://5.imimg.com/data5/FK/WJ/GLADMIN-2/synthetic-fabric-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Synthetic Fabric
                  </Text>
                  <Text>Rayon Fabrics</Text>
                  <Text>Faux Fur Fabrics</Text>
                  <Text>Viscose Fabrics</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      ) : (
        <Box m="auto" w="90%">
          <Text ml="1%" mt="1%" textAlign={"left"} fontSize={"3vw"}>
            Apparel, Clothing & Garments
          </Text>
          <SimpleGrid columns={[2]} gap="1%">
            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/OC/VP/GLADMIN-43237/ladies-kurtis-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Ladies Kurtis
                  </Text>
                  <Text>Designer Kurtis</Text>
                  <Text>Cotton Kurtis</Text>
                  <Text>Ladies Woolen Kurtis</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/EK/BM/GLADMIN-2296/mens-t-shirts-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Mens T-Shirt
                  </Text>
                  <Text>Men Round Neck</Text>
                  <Text>Mens Polo</Text>
                  <Text>Graphic Printed</Text>
                </Box>
              </Flex>
            </Box>

            <Box
              boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px"
              padding={"2%"}
              color="#666666"
            >
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/CS/SE/MY-2/blazers-125x125.jpg"
                  />
                </Box>
                <Box padding={"5%"} fontSize={"1vw"} textAlign={"left"}>
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Blazers
                  </Text>
                  <Text>Mens Blazers</Text>
                  <Text>Womens Blazers</Text>
                  <Text>Designer Blazers</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex gap="5%">
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/XM/FR/GLADMIN-8367/safety-shoes-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Safety Shoes
                  </Text>
                  <Text>Leather Shoes</Text>
                  <Text>Steel to Safety Shoes</Text>
                  <Text>Industrial Shoes</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px" padding={"2%"}>
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/MM/IB/GLADMIN-2576/trouser-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Trouser
                  </Text>
                  <Text>Cargo Pant</Text>
                  <Text>Jogger Pant</Text>
                  <Text>Chino Trousers</Text>
                </Box>
              </Flex>
            </Box>

            <Box boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 12px">
              <Flex>
                <Box w="50%">
                  <Image
                    mt="10%"
                    src="https://3.imimg.com/data3/FH/NO/GLADMIN-1110/mannequins-125x125.jpg"
                  />
                </Box>
                <Box
                  padding={"5%"}
                  fontSize={"1vw"}
                  textAlign={"left"}
                  color="#666666"
                >
                  <Text
                    fontWeight={700}
                    fontSize={"1.1vw"}
                    color="blackAlpha.900"
                  >
                    Mannequins
                  </Text>
                  <Text>Female Mannequins</Text>
                  <Text>Dress Forms</Text>
                  <Text>Male Mannequins</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      )}

      <Footer />
    </Box>
  );
};

export default Home;
