import { Box, Button, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { api } from '../../constants'

export const ItemCard = ({id,img_url,ingredients,name,quantity,price,orderId}) => {
	const deleteItem=(id)=>{
		api.delete(`/item/delete/${id}`,{headers: { 'Authorization': localStorage.getItem('token') }})
		.then(({data})=>{
			alert('Pizza removida do carrinho');
		      }).catch((error)=>console.log(error.message))
	}
	const buyItens=(id)=>{
		console.log(id);
			    api.post(`/order/create`,{"orderId":id},{headers: { 'Authorization': localStorage.getItem('token') }})
			    .then(({data})=>{
				    alert('Compra concluída');
				  }).catch((error)=>console.log(error.message))
		    }
  return (
    <Flex m='1em'>
		<Image  w={'10em'}  src={img_url}/>
		
			<Flex
			direction={'column'}
			p={'1em'}
			>
			<Text  fontSize='2xl'>{name}
			
			</Text>
			<Text>{ingredients}</Text>
			<Text>Quantidade: {quantity}</Text>
		<Text>R$ {price}</Text>
			</Flex>
			<Flex direction={'column'} m={'1em'}>
			<Button colorScheme={'green'} mb={'1em'} onClick={()=>buyItens(orderId)}>Confirmar compra</Button>
			<Button colorScheme={'red'} mt={'1em'} onClick={()=>deleteItem(id)}>Remover</Button>
		
	
				
			</Flex>
	
    </Flex>
  )
}
