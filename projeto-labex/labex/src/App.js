import { ChakraProvider } from '@chakra-ui/react'
import { Routes } from './routes/Router';


function App() {
  return (
    <ChakraProvider>
     <Routes/>
    </ChakraProvider>
  );
}

export default App;
