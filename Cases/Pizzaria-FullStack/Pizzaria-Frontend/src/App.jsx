import { ChakraProvider } from '@chakra-ui/react'
import { ConfigRoutes} from './routes/routes'

function App() {
  

  return (
    <ChakraProvider>
    <ConfigRoutes/>
  </ChakraProvider>
  )
}

export default App
