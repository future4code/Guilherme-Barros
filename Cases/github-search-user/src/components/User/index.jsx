import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "./../../assets/Github-Mark/PNG/GitHub-Logo-Light.png";
export const User = (props) => {
  return (
    <Center>
      <Flex
        bg="#0D1117"
        direction={"column"}
        justifyContent="center"
        alignContent={"center"}
        border="1px solid #f0f6fc"
        borderRadius="10px"
        m={"3em"}
        h={"auto"}
      >
        {props.image == undefined ? (
          <Image borderRadius="full" boxSize="15em" m={"1em auto"} src={logo} />
        ) : (
          <a href={props?.html_url} target="blank">
            <Image
              src={props?.image}
              borderRadius="full"
              boxSize="20em"
              m={"2em auto"}
              cursor="pointer"
              alt={props?.login}
            />
          </a>
        )}
        {props.name == undefined ? (
          <Text fontSize="5xl" color="#BABBBD" m={"0 0.55em"}>
            Nome
          </Text>
        ) : (
          <Text fontSize="5xl" color="#BABBBD" m={"auto 0.55em"}>
            {props?.name}
          </Text>
        )}
        {props.login === undefined ? (
          <Text fontSize="3xl" color="#646B74" m={"auto 1em"}>
            Login
          </Text>
        ) : (
          <Text fontSize="3xl" color="#646B74" m={"auto 1em"}>
            {props?.login}
          </Text>
        )}
        {props.bio == undefined ? (
          <Text fontSize="2xl" color="#BABBBD" m={"auto 1.3em"}>
            Bio
          </Text>
        ) : (
          <Text fontSize="2xl" color="#BABBBD" m={"auto 1.3em"}>
            {" " + props?.bio}
          </Text>
        )}

        <Text fontSize="2xl" color="#BABBBD" m={"1em 1.3em"}>
          <strong>
            {" " + props.followers === undefined ? 0 : props.followers}
          </strong>
          &nbsp; Seguidores &nbsp; · &nbsp;{" "}
          <strong>
            {" " + props.following == undefined ? 0 : props.following}
          </strong>
          &nbsp;Seguindo
        </Text>
      </Flex>
    </Center>
  );
};
