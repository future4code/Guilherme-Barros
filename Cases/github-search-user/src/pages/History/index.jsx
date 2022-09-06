import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator";
import { Header } from "../../components/Header";

export const History = () => {
  const { history, setSearchUser,searchHistoric } = useContext(GlobalContext);
  const navigate = useNavigate();
  const searchAgain = (i) => {
    const findUser = history.find((val, index, array) => val == array[i]);
    setSearchUser(findUser);
    goToHomePage(navigate);
  };

  const searchs = history.sort((a, b) => {
    return b.searchTime - a.searchTime;
  });
  const filterHistoric=searchs?.filter((search)=> search.user.toLowerCase().includes(searchHistoric.toLowerCase()))
  return (
    <Box bg="#0D1117" h={"100vh"}>
      <Header/>
      <Center>
       
          <Flex
          bg="#0D1117"
          direction={"column"}
          justifyContent="center"
          alignContent={"center"}
          border="1px solid #f0f6fc"
          borderRadius="10px"
          w="20em"
          h={"auto"}
          mt="3em"
        >
          {filterHistoric.map((val, index, array) => {
            return (
              <Text
                direction={"column"}
                justifyContent="center"
                alignContent={"center"}
                border="1px solid #f0f6fc"
                borderRadius="10px"
                h={"3em"}
                w="20em"
                pl={"2em"}
                pt="0.7em"
                color="#f0f6fc"
                cursor={"pointer"}
                _hover={{ bg: "#161B22" }}
                onClick={() => searchAgain(index)}
                key={index}
              >
                {array[index].user}
              </Text>
            );
          })}
        </Flex>
      </Center>
    </Box>
  );
};
