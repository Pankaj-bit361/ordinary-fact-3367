import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
const CategoryMain = () => {
	return (
		<>
			{/* <Bredcrumbs /> */}
			<Stack>
				<Flex
					alignItems={"flex-end"}
					w='100%'
					// justifyContent={"center"}
					mb='2'>
					<Text as='b' fontSize='2xl' color={'black'}>
						Sigma Beauty Products Collection
						<Text as='span' fontSize='sm' ml='2'>
							(119)
						</Text>
					</Text>
				</Flex>
				{/* <Banner /> */}
				<Flex
					alignItems={"flex-end"}
					w='100%'
					justifyContent={"center"}>
					<Text as='b' fontSize='2xl' mt='2' color={'black'}>
						All Products
					</Text>
				</Flex>
			</Stack>
		</>
	);
};
export default CategoryMain;


