import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'


export default function Home() {
  return (
    <HStack spacing="30%" w={["100%",'100%',"80%","70%"]} m="auto" mt="30px">
          
    <Image src={require("./body-img.png")} boxSize="250px"></Image>
    <Box rounded="md"   py="20px" px="40px" bg="white" shadow="lg">
      <Text fontSize="30px" fontWeight="extrabold" color="Green"> Let's Play</Text>
      <Text>Be the First</Text>
      <Stack spacing="29px" mt="20px">
        <Card grad='linear(to-r, blue.200, blue.500)' img_src="./kisspng.png" course="Science"/>
        <Card grad='linear(to-r, red.200, red.500)' img_src="./kisspng.png" course="Computer Science"/>
        <Card grad='linear(to-r, green.200, blue.500)' img_src="./kisspng.png" course="History" />
        </Stack>
    </Box>
   </HStack>

  )
}
