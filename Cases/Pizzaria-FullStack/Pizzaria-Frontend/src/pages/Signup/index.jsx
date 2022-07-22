import React from 'react'
import { api } from '../../constants';
import useForm from '../../hooks/useForm';
import { Box, Center, Flex, FormControl, FormLabel, Input,InputRightElement, Button, InputGroup, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export const Signup = () => {
	const [show, setShow] = React.useState(false)
	const handleClick = () => setShow(!show)
	const { form, onChange, cleanFields } = useForm({
	  email: "",
	  name:"",
	  password: "",
	  role:""
	});
	const navigate=useNavigate()
	const signup=(e)=>{
	  e.preventDefault()
	  api.post("/user/signup",form)
	  .then(({data})=>{alert("Cadastrado com sucesso")
	  goToLoginPage(navigate)})
	  .catch((err)=>console.log(err))
	  cleanFields()
	}
	return (
	  <Center>
	  <Flex 
	  alignItems={"center"}
	  justifyContent={"center"}
	  >
	    <form onSubmit={signup} method='POST'>
	<FormControl p={'5em'} method>
	<Text fontSize='5xl' align={"center"} p={"4"}>Cadastro</Text>
	 <Box p={"4"}>
	  <FormLabel htmlFor='email' >Email</FormLabel>
	  <Input
	      id='email'
	      type='email'
	      size={"md"}
	      p={'1em'}
	      placeholder={"Digite o email"}
	      w={"30em"}
	      name='email'
	      autoFocus
	      focusBorderColor='lime'
	      required
	      value={form.email}
	      onChange={onChange}
	    />
	    </Box>
	    <Box p={"4"}>
	  <FormLabel htmlFor='name' >Nome</FormLabel>
	    <Input
	      id='name'
	      type='name'
	      size={"md"}
	      p={'1em'}
	      placeholder={"Digite o seu nome"}
	      w={"30em"}
	      name="name"
	      value={form.name}
	      focusBorderColor='lime'
	      onChange={onChange}
	    />
	    </Box>
	    <Box p={"4"}>
	     <FormLabel htmlFor='password' >Senha</FormLabel>
	     <InputGroup size='md' >
	     <Input
	      pr='4.5rem'
	      type={show ? 'text' : 'password'}
	      placeholder='Digite a senha'
	      name='password'
	      required
	      value={form.password}
	      onChange={onChange}
	      focusBorderColor='lime'
	    />
	    <InputRightElement width='4.5rem'>
	      <Button h='1.75rem' size='sm' onClick={handleClick}>
		{show ? 'Hide' : 'Show'}
	      </Button>
	    </InputRightElement>
	    </InputGroup>
	    </Box>
	    <Box p={"4"}>
	     <FormLabel htmlFor='password' >Confirme sua senha</FormLabel>
	     <InputGroup size='md' >
	     <Input
	      pr='4.5rem'
	      type={show ? 'text' : 'password'}
	      placeholder='Digite a senha novamente'
	      focusBorderColor='lime'
	    />
	    <InputRightElement width='4.5rem'>
	      <Button h='1.75rem' size='sm' onClick={handleClick}>
		{show ? 'Hide' : 'Show'}
	      </Button>
	    </InputRightElement>
	    </InputGroup>
	    </Box>
	    <Box p={"4"}>
	  <FormLabel htmlFor='role' >Cargo</FormLabel>
	    <Input
	      id='role'
	      type='role'
	      size={"md"}
	      p={'1em'}
	      name='role'
	      value={form.role}
	      onChange={onChange}
	      placeholder={"Digite o nível do cargo (NORMAL ou ADMIN)"}
	      w={"30em"}
	      focusBorderColor='lime'
	    />
	    </Box>
	    <Center p={"4"}>
	    <Button colorScheme='green' p={"4"} type='submit'>Enviar</Button>
	    </Center>
	</FormControl>
	</form>
	</Flex>
	</Center>
	)
      }

