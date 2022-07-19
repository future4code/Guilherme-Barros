import React from 'react'
import { Box, Center,Image, Flex, FormControl, FormLabel, Input,InputRightElement, Button, InputGroup, Text } from '@chakra-ui/react'
import Logo from './../../assets/logo.png'
import { goToHomePage } from '../../routes/coordinator'
export const Header = () => {
  return (
    <Flex
    direction={["column", "row"]}
    justify={["space-between"]}
    align={"center"}
    bg={"green.600"}
    borderBottom={"solid 2px #dedede"}
    p={[".5em", 0]}
    w={["full"]}
    gap={[2, 0]}
	color='white'
    >
	<Image
	src={Logo}
        w={["8em", "10em"]}
        h={["4em", "5.5em"]}
        p={[0, "0.5em"]}
        m={[0, 3]}
        cursor={"pointer"}
        onClick={() => {
          goToHomePage(navigate)
        }}
	/>
	Header</Flex>
  )
}
