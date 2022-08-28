import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

export const Menu = () => {
  return (
    <div>
      <UnorderedList listStyle>
        <Flex>
          <ListItem color={"#f0f6fc"} m="1em">
            <a href="/">Início</a>
          </ListItem>
          <ListItem color={"#f0f6fc"} m="1em">
            <a href="/historico">Histórico</a>
          </ListItem>
        </Flex>
      </UnorderedList>
    </div>
  );
};
