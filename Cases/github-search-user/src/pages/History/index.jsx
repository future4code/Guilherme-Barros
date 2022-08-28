import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import {useNavigate} from 'react-router-dom'
import { goToHomePage } from "../../router/coordinator";
export const History = () => {
  const { history,setSearchUser } = useContext(GlobalContext);
const navigate=useNavigate()
  const searchAgain=(i)=>{
	const findUser=history.reverse().find((val, index, array)=>val==array[i])

	setSearchUser(findUser)
	goToHomePage(navigate)
  }

  const searchs = history.map((val, index, array) => {
    return (
      <Text
        direction={"column"}
        justifyContent="center"
        alignContent={"center"}
        border="1px solid #f0f6fc"
        borderRadius="10px"
        h={"3em"}
        w="30em"
        pl={"2em"}
        pt="0.7em"
        color="#f0f6fc"
	cursor={'pointer'}	
	_hover={{ bg: "#161B22" }}
	onClick={()=>searchAgain(index)}
      >
        {array[array.length - 1 - index]}
      </Text>
    );
  });

  return (
    <Box bg="#0D1117" h={"100vh"}>
      <Center>
        <Flex
          bg="#0D1117"
          direction={"column"}
          justifyContent="center"
          alignContent={"center"}
          border="1px solid #f0f6fc"
          borderRadius="10px"
          w="30em"
          h={"auto"}
          mt="3em"
        >
          {searchs}
        </Flex>
      </Center>
    </Box>
  );
};
