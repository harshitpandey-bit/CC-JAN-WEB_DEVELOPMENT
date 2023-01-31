import React from 'react'
import {Box,Text,HStack,Image,Flex,Button} from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Box w={["100%","100%","90%","80%"]}  m="auto"  py="13px" color="white" >

    <Flex spacing="30px"  justifyContent="space-between" align="center">
            <HStack  spacing="24px" display="flex">
              <Flex  align="center">
                  <Image
                boxSize='40px'
                objectFit='cover'
                src={require("./images/quiz_icon.png")}
                alt='Dan Abramov'
                />
                <Text fontSize="20px" as="b">Quizzy</Text>

                </Flex>
              <HStack fontSize="15px" spacing='25px'>
                <Text>Menu1</Text>
                <Text>Menu1</Text>
                <Text>Menu1</Text>
              </HStack>
            </HStack>
            <HStack  spacing="24px">
                 <Button color="#7c4dff" shadow="lg" border="1px" borderColor="#b087fa" >Login</Button>
            </HStack>
      </Flex>
      </Box>
  )
}