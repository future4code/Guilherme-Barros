import { ChakraProvider } from '@chakra-ui/react'
import Header from './component/Header';
function App() {
  return (
    <ChakraProvider>
     <Header/>
    </ChakraProvider>
  );
}

export default App;
