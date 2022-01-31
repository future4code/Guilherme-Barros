import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Grid, Text } from "@chakra-ui/react"

const TripCard=(props)=>{
	let data=new Date(props.data)
  const dataFormatada=data.toLocaleDateString('pt-BR',{timeZone:'UTC'})
	return (
		<Box
		bg="white"
		w="auto"
		p={4}
		border="1px solid"
		borderColor={"purple.400"}
		mb={10}
		borderRadius="15"
		cursor={"pointer"}
		_hover={{ bg: "gray.200", border: "2px solid", borderColor:'purple.500' }}
		
	      >
		<Grid
		  justify="center"
		  templateColumns="21em 1fr"
		  templateRows={"1fr"}
		>
		  <Text fontSize="3xl" fontWeight="700" onClick={() => props.goToDetailsPage(props.id)}>
		    {props.name}
		  </Text>
		 
		    <DeleteIcon
		      fontSize="3xl"
		      color="purple.400"
		      mt={10}
		      onClick={() => props.deleteTrip(props.id)}
		      _hover={{ color: "purple.500" }}
		    />
		  
		  <Text fontSize="2xl" color="purple.700" as="i" onClick={() => props.goToDetailsPage(props.id)}>
		    {dataFormatada}
		  </Text>
		</Grid>
	      </Box>
	)
}
export default TripCard;