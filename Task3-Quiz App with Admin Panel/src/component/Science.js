import { Box, Button, Divider, Flex, HStack, Image, Progress, requiredChakraThemeKeys, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Ques from "./Sci-ques"
 var ans=""

console.log(Ques)
export default function Science() {
     const [count,setCount]=useState(0)
     const[option,setOption]=useState("")
    
     const  handleNext =()=>{
         setCount(count+1)
        ans=ans+option
        
        console.log(ans)

     }

     
    
     useEffect(()=>{

     },[count])

    return (
   <VStack w="30%" display="flex" m="auto" align="center" rounded='10px' p="30px" mt="20px" shadow="lg"  bg="white">     
        <HStack fontSize="8px" spacing="40px" p="10px" shadow="dark-lg" rounded="10px" bg="blue.400">
            <HStack>
                <Image src={require("./user.png")} boxSize="50px"   rounded="full" ></Image>
                <VStack spacing="">
                    <Text>Rank</Text>
                    <Text fontSize="10px" as="b">2223</Text>
                </VStack>
            </HStack>
            <Divider orientation='vertical' h="20px" colorScheme="gray.100" />
            <HStack>
            <Image src={require("./kisspng.png")} boxSize="50px"   rounded="full" border="2px" borderColor="white"></Image>
                <VStack spacing="">
                    <Text>Points</Text>
                    <Text fontSize="10px" as='b'>234</Text>                </VStack>
            </HStack>
        </HStack>
    
     <Box w="50%">
        <Text textAlign="center">Level 4</Text>
        <Progress value={50} h="2px" size="lg" isAnimated="true" rounded="10px" mt="10px"/>
        
     </Box>
     <VStack spacing="50px" mt="30px">
        <Text as="b">{Ques[count].q}</Text>
        <VStack>
            <Button onClick={()=>setOption("a")}>{Ques[count].a} </Button>
            <Button onClick={()=>setOption("b")}>{Ques[count].b}  </Button>
            <Button  onClick={()=>setOption("c")}>{Ques[count].c}  </Button>
            <Button onClick={()=>setOption("d")}>{Ques[count].d}  </Button>
        </VStack>
     </VStack>
     <HStack>
        <Button  shadow="dark-lg"colorScheme="blue">Previous</Button>
        <Button shadow="dark-lg" colorScheme="yellow">Skip</Button>
        <Button shadow="dark-lg" colorScheme="green" onClick={handleNext} isDisabled={count==Ques.length-1}>Next</Button>

     </HStack>
   </VStack>
  )
}