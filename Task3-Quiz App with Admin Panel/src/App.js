import logo from './logo.svg';
import './App.css';
import {Box,Flex, HStack, Image,Stack,Text} from "@chakra-ui/react"
import Navbar from "./component/header/Navbar"
import Card from './component/Card';
import Allroute from './Allroute';
import Science from './component/Science';
function App() {
  return (
    <Box boxShadow='lg' w="100%" background="#a481f6"   >
         <Navbar/>
        <Allroute/>        
        {/* <Science/> */}
    </Box>
  );
}

export default App;
