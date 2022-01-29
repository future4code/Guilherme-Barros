import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Grid, Text } from "@chakra-ui/react"

const TripCard=(props)=>{
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
		_hover={{ bg: "gray.200", borderColor: "purple.500" }}
		onClick={() => props.goToDetailsPage(props.id)}
	      >
		<Grid
		  justify="center"
		  templateColumns="21em 1fr"
		  templateRows={"1fr"}
		>
		  <Text fontSize="3xl" fontWeight="700">
		    {props.name}
		  </Text>
		  <button>
		    <DeleteIcon
		      fontSize="3xl"
		      color="purple.400"
		      mt={10}
		      onClick={() => props.deleteTrip(props.id)}
		      _hover={{ color: "purple.500" }}
		    />
		  </button>
		  <Text fontSize="2xl" color="purple.700">
		    {props.data}
		  </Text>
		</Grid>
	      </Box>
	)
}
export default TripCard;