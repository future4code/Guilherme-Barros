import { Box, Button, Center, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../../components/Header'
import { api } from '../../constants'
import useForm from '../../hooks/useForm'

export const PizzaCreate = () => {
 
  const { form, onChange, cleanFields } = useForm({
	  price: 0,
	  name:"",
	  ingredients: "",
	  imgUrl:""
	});
  const create=(e)=>{
    e.preventDefault()
    api.post("/pizza/create",{"name":form.name,"price":form.price,
    "ingredients":form.ingredients,"img_url":form.imgUrl},
    {headers: { 'Authorization': localStorage.getItem('token') }})
    .then(({data})=>{
      alert('Pizza criada');
    }).catch((error)=>console.log(error.message))
    cleanFields()
  }
  return (
    <Box>
	<Header/>
  <Center>
	  <Flex 
	  alignItems={"center"}
	  justifyContent={"center"}
	  >
	    <form onSubmit={create} method='POST'>
	<FormControl p={'5em'} method>
	<Text fontSize='5xl' align={"center"} p={"4"}>Crie uma Pizza</Text>
	 <Box p={"4"}>
	  <FormLabel htmlFor='name' >Nome</FormLabel>
	  <Input
	      id='name'
	      type='text'
	      size={"md"}
	      p={'1em'}
	      placeholder={"Digite o nome da Pizza"}
	      w={"30em"}
	      name='name'
	      autoFocus
	      focusBorderColor='lime'
	      required
	      value={form.name}
	      onChange={onChange}
	    />
	    </Box>
	    <Box p={"4"}>
	  <FormLabel htmlFor='price' >Preço</FormLabel>
	    <Input
	      id='price'
	      type='number'
	      size={"md"}
	      p={'1em'}
	      placeholder={"Digite o preço da Pizza"}
	      w={"30em"}
	      name="price"
	      value={form.price}
	      focusBorderColor='lime'
	      onChange={onChange}
	    />
	    </Box>
	    <Box p={"4"}>
	     <FormLabel htmlFor='ingredients' >Ingredientes</FormLabel>
	     <InputGroup size='md' >
	     <Textarea
	      pr='4.5rem'
	      type='textarea'
	      placeholder='Digite os ingredientes da Pizza'
	      name='ingredients'
	      required
	      value={form.ingredients}
	      onChange={onChange}
	      focusBorderColor='lime'
	    />
	    </InputGroup>
	    </Box>
	    <Box p={"4"}>
	     <FormLabel htmlFor='img' >Imagem para exibição</FormLabel>
	     <InputGroup size='md' >
	     <Input
       id='imgUrl'
       name='imgUrl'
	      pr='4.5rem'
	      type='text'
	      placeholder='Digite uma imagem com url web para a pizza'
	      focusBorderColor='lime'
        required
        value={form.imgUrl}
	      onChange={onChange}
	    />
	    </InputGroup>
	    </Box>
	    <Center p={"4"}>
	    <Button colorScheme='green' p={"4"} type='submit'>Enviar</Button>
	    </Center>
	</FormControl>
	</form>
	</Flex>
	</Center>
  </Box>
  )
}
