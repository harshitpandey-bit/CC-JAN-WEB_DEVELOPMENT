import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    )
}


const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    console.log(ans)
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
    }
    return (
       
      
        <VStack border=" 1px" shadows="lg"  p="30px" shadow="lg">
      <Text>{current + 1}) {quizzes[current].question}</Text>
       <Flex w="100%">
       <Text w="50%"  border="1px " p="10px"  _hover={{"background":"green.400","color":"white"}} bg={ans === "a" ? 'blue.400 ' : ''} color={ans === "a" ? 'white' : ''} onClick={() => setAns("a")}>{quizzes[current].a}</Text>
        <Text w="50%"  p="10px" border="1px" borderColor="grey"  _hover={{"background":"green.400","color":"white"}} bg={ans === "b" ? 'blue.400' : ''} color={ans === "b" ? 'white' : ''} onClick={() => setAns("b")}>{quizzes[current].b}</Text>
        </Flex>
       <Flex w="100%">
        <Text w="50%" p="10px" border="1px "  bg={ans === "c" ? 'blue.400 ' : ''} color={ans === "c" ? 'white' : ''} _hover={{"background":"green.400","color":"white"}} onClick={() => setAns("c")}>{quizzes[current].c}</Text>
        <Text w="50%" p="10px"  border="1px     " _hover={{"background":"green.400","color":"white"}} bg={ans === "d" ? 'blue.400' : ''} color={ans === "d" ? 'white' : ''} onClick={() => setAns("d")} >{quizzes[current].d}</Text>
        </Flex>
       <HStack mt="20px">
        <Button onClick={() => setAns("")} cursor="pointer" px="3" bg="blue.400" color="white" >Reset</Button>
        <Button onClick={saveHandler} bg="green.700" color="white" cursor="pointer">Save & Next</Button>
        <Button onClick={() => setExit(true)} bg="red.500" color="white" cursor="pointer">Exit</Button>
        </HStack>

        </VStack>
        
    )
}