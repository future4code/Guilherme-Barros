import { Box, Text, Spacer, Button, Center } from "@chakra-ui/react";
function Highlights() {
  return (
    <>
      <Box
        border="1px solid purple"
        borderRadius={6}
        w="100%"
        h="auto"
        p="0.5em"
        color="black"
        fontSize="3xl"
      >
        Colônia Lunar
        <Spacer />
        <Text as="i" color="purple">
          19/01/2022 - 19/02/2022
        </Text>
        <Spacer />
	
       {/* <Text fontSize='1.5rem'>

         <Text color='purple'>Description:</Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          blanditiis ducimus. Odit autem ex unde labore reprehenderit laboriosam
          libero recusandae velit id repudiandae? Provident debitis voluptatibus
          alias? Dolore, corrupti aliquid.
        </Text>*/} 
        <Center pt="0.5em">
          <Button colorScheme="purple">Saiba Mais</Button>
        </Center>
      </Box>
    </>
  );
}

export default Highlights;
