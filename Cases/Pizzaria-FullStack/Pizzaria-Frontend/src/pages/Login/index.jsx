import { Box, Center, Flex, FormControl, FormLabel, Input,InputRightElement, Button, InputGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../constants'
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToHomePage } from '../../routes/coordinator'
export const Login = () => {
	const [show, setShow] = React.useState(false)
	const handleClick = () => setShow(!show)
	const navigate = useNavigate()
	const { form, onChange, cleanFields } = useForm({
	  email: "",
	  password: ""
	});
	useProtectedPage()
      const login=(e)=>{
	e.preventDefault();
	  api.post('/user/login',form)
	  .then(({data})=>{
	    localStorage.setItem("token", data.token);
	    goToHomePage(navigate)})
	  .catch((err)=>console.log(err))
      
	cleanFields();
      }
      
	return (
	 <Center>
	  <Flex 
	  alignItems={"center"}
	  justifyContent={"center"}
	  >
	    <form method='POST' onSubmit={login}>
	<FormControl p={'5em'} >
	<Text fontSize='5xl' align={"center"} p={"4"}>Login</Text>
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
	      required
	      value={form.email}
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
	      id='password'
	      required
	      focusBorderColor='lime'
	      value={form.password}
	      onChange={onChange}
	    />
	    <InputRightElement width='4.5rem'>
	      <Button h='1.75rem' size='sm' onClick={handleClick}>
		{show ? 'Hide' : 'Show'}
	      </Button>
	    </InputRightElement>
	    </InputGroup>
	    </Box>
	    <Text align={'center'}>Não é cadastrado? - <a href='/signup'>Cadastre-se</a></Text>
	    <Center p={"4"}>
	    <Button colorScheme='green' p={"4"} type='submit'>Entrar</Button>
	    </Center>
	</FormControl>
	</form>
	</Flex>
	</Center>
	)
}
