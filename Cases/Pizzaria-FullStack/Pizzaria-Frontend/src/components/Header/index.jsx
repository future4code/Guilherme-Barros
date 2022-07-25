import React, { useContext } from 'react'
import {Image, Flex, Menu, UnorderedList,ListItem, Input,
  InputGroup,
  InputRightElement,} from '@chakra-ui/react'
import Logo from './../../assets/logo.png'
import { goToCartPage, goToHomePage, goToOrderPage } from '../../routes/coordinator'
import { SearchIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../GlobalContext'
export const Header = () => {
  const navigate= useNavigate()
  const { searchPizza, setSearchPizza } = useContext(GlobalContext)
  const handlePizza = ({ target }) => {
    setSearchPizza(target.value)
  }

  return (
    <Flex
    direction={["column", "row"]}
    justify={["space-between"]}
    align={"flex-end"}
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
  <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="white" />}
        />
        <Input
          value={searchPizza}
          onChange={handlePizza}
          type={"search"}
          variant="flushed"
          placeholder="Procure uma Pizza..."
          _placeholder={{ color: "white" }}
          mb={'1em'}
          color={"white"}
          focusBorderColor='white'
        />
      </InputGroup>
  <Menu>
  <UnorderedList styleType={"none"} m={["0 auto"]}>
    <Flex >
    <ListItem
     bg={"background.blue"}
     _hover={{ bg: "#E3350D" }}
     color={"white"}
     p={["0.5em", "2.7em"]}
     cursor={"pointer"}
     onClick={() => goToCartPage(navigate)}
     borderBottom={'5px solid #ca3614'}
     display={"flex"}
     alignItems={"center"}
     flexFlow={"column"}
    >
      Carrinho
    </ListItem>
    <ListItem
     bg={"background.blue"}
     _hover={{ bg: "#E3350D" }}
     color={"white"}
     p={[".5em", "2.7em"]}
     cursor={"pointer"}
     onClick={() => goToOrderPage(navigate)}
     borderBottom={'5px solid #ca3614'}
     display={"flex"}
     alignItems={"center"}
     flexFlow={"column"}
    >
      Pedidos
    </ListItem>
    </Flex>
  </UnorderedList>
  </Menu>
	</Flex>
  )
}
