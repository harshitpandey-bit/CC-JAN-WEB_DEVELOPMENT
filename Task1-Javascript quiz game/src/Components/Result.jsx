import { Button, Heading, HStack, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <VStack className='w-full h-screen flex justify-center items-center'>
            <HStack className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <Heading as="h2" className='text-2xl p-3 my-2'>{correct} are correct out of {quizzes.length}</Heading>
                <Button onClick={playAgain} className='border border-orange-500 p-3 text-2xl rounded'>Play agian</Button>
            </HStack>
        </VStack>
    )
}
