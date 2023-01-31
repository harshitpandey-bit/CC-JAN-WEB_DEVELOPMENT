
import React, { useState } from 'react'
import {Box,Flex,Text,Image, Button, useDisclosure, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, Input} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

export default function Card({grad,img_src,course}) {
 const [name,setName]=useState("")
 const { isOpen, onOpen, onClose } = useDisclosure()
 const nav=useNavigate()
 const handleSave=(data)=>{
  localStorage.setItem('userName',name)
  if (data==="Science")
  {
    nav("/science")
  }
  else if(data==="Computer Science")
  {
     nav("/computer_science")
 }
 else if(data==="History")
 {
    nav("/history")
 }
 onClose()
 }
  return (
    <Box shadow="dark-lg" rounded="md" p="5px" w="250px"  bgGradient={grad} color="white">
                <Flex justifyContent="space-between">                
                <Box >   
                <Button rounded="full" bgImage={require('./Start-icon.png')} onClick={onOpen} bgSize="cover" position="relative" top="-20px" left="3px"></Button>
                <Text>{course}</Text>
                {/* <Text>Text1</Text>
                <Text>Text</Text> */}
                </Box>
                  <Image src={require("./kisspng.png")} boxSize="50px"  position="relative" top="-30px"></Image>
                </Flex>
              

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="Text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleSave(course)}>
              Save & Continue
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>

              </Box>
  )
}