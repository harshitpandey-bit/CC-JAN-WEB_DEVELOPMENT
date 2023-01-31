import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <Flex w="100%" h="400px" align="center" justify="center">
            <Button onClick={() => setStart(true)}>Start</Button>
        </Flex>
    )
}
