import {
  Box,
  Text,
  Flex,
  Spacer,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Highlights from "../component/Highlights";

function ListTripsPage() {
  return (
    <div >
      <Flex>
        
       <Text ml='1rem'>Valor Máximo:</Text>
      <Input
          type="text"
          size="md"
          m="1rem"
          w="20rem"
          p="1em"
          borderColor="purple"
          focusBorderColor="purple.400"
        />
        
        <Text>Destino:</Text>
      <Input
          type="text"
          size="md"
          m="1rem"
          w="20rem"
          p="1em"
          borderColor="purple"
          focusBorderColor="purple.400"
        />
        <Text>Valor Mínimo:</Text>
      <Input
          type="text"
          size="md"
          m="1rem"
          w="20rem"
          p="1em"
          borderColor="purple"
          focusBorderColor="purple.400"
        />
        <Text>Ordenar:</Text>
      <Select
          type="text"
          size="md"
          m="1rem"
          w="20rem"
     
          borderColor="purple"
          focusBorderColor="purple.400"
        >
          <option value="Brasil">Brasil</option>
          <option value="Estados Unidos">Estados Unidos</option>
          <option value="Canadá">Canadá</option> 
        </Select>
        </Flex>
        <Flex w='auto' p='1em'>
        <Highlights/>
        <Spacer  ml='1em'/>
        <Highlights/>
        </Flex>
        <Flex  p='1em' >
        <Highlights/>
        <Spacer  ml='1em'/>
        <Highlights />
        </Flex>
    </div>
  );
}

export default ListTripsPage;