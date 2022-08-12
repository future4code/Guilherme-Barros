import { Box, Button, Flex,FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import { api } from '../../constants'
import useForm from '../../hooks/useForm'

export const Header = () => {

const{form,onChange,cleanFields}=useForm({
  name:"",
  lastName:"",
  participation:0
})
const insertParticipant=(e)=>{
  e.preventDefault()
api.post("/participant/create",form)
.then((res)=>{alert("Participante adicionado");})
.catch((error)=>{alert(error)})
cleanFields()
}
  return (
    <Box bg={'#00B8E2'} width={"100%"} >
    
       <form method='POST' onSubmit={insertParticipant}>
       <FormControl p={'2em'} >
       <Flex
    direction={'row'}

    >
      <Input 
      size='md' 
      width='30em' 
      placeholder='First Name' 
      focusBorderColor='white'
      bg={'white'} 
      m='1em'
      borderRadius='2px' 
      name='name'
      value={form.name}
    onChange={onChange}
      h={'3em'}></Input>
      <Input 
      size='md' 
      placeholder='Last Name' 
      m='1em'
      width='30em'
      bg={'white'} 
      onChange={onChange}
      name='lastName'
      value={form.lastName}
      focusBorderColor='white'
      h={'3em'}
      borderRadius='2px' 
      ></Input>
      <Input 
      size='md' 
      width='30em'
      placeholder='Participation' 
      m='1em'
      onChange={onChange}
      value={form.participation}
      name='participation'
      bg={'white'}
      borderRadius='2px' 
      focusBorderColor='white'
      h={'3em'}></Input>
      <Button color={'white'}
      bg='#00B8E2'
      border={'1px solid white'} 
      w='10em'
       h={'3em'}
       borderRadius='2px' 
       m='1em'
       _hover={{bg:'#05aacf'}}
       type='submit'
       >SEND</Button>
       </Flex>
      </FormControl>
      </form>
      </Box>
  )
}
