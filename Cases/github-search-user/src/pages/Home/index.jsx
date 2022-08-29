import {  Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Header } from "../../components/Header";

import { User } from "../../components/User";
import { GlobalContext } from "../../GlobalContext";

export const Home = () => {
  const { user } = useContext(GlobalContext);

  return (
    <Flex justifyContent={"center"} direction="column" bg="#0D1117" w={"100%"}>
      <Header/>
      <User
        name={user?.name}
        image={user?.avatar_url}
        bio={user?.bio}
        email={user?.email}
        html_url={user?.html_url}
        followers={user?.followers}
        following={user?.following}
        login={user?.login}
      />
    
    </Flex>
  );
};
