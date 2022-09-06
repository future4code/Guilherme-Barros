import { Center, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHistoricPage, goToHomePage } from "../../router/coordinator";

export const Menu = () => {
  const navigate=useNavigate()

  return (
    <Center>
      <UnorderedList styleType={"none"}>
    
        <Flex>
        
          <ListItem
            color={"#f0f6fc"}
            _hover={{ borderBottom: "5px solid #f0f6fc" }}
            p={["0.5em", "0.5em"]}
            onClick={()=>goToHomePage(navigate)}
            cursor='pointer'
            mr={'1em'}
          >
          Início
          </ListItem>
          <ListItem
            color={"#f0f6fc"}
            _hover={{ borderBottom: "5px solid #f0f6fc" }}
            p={["0.5em", "0.5em"]}
            onClick={()=>goToHistoricPage(navigate)}
            cursor='pointer'
            ml={'1em'}
          >
            Histórico
          </ListItem>
          
        </Flex>
       
      </UnorderedList>
      </Center>
  );
};
