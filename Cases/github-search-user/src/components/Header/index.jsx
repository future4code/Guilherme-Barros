import { Button, Center, Flex, Image, Input,Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../constants";
import { GlobalContext } from "../../GlobalContext";
import useForm from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import { Menu } from "../Menu";
import logo from "./../../assets/GitHub-Mark/PNG/Github-Logo-Light.png";
export const Header = () => {
  const { form, onChange, cleanFields } = useForm({
    name: "",
  });
  const { searchUser, setUser, history,searchHistoric,setSearchHistoric } = useContext(GlobalContext);

  const [u, isLoadingU, errorU] = useRequestData(searchUser);

  useEffect(() => {
    if (searchUser !== undefined) {
      setUser(u);
    }
  }, [u]);

  const handleSearchHistoric = ({ target }) => {
    setSearchHistoric(target.value)
  }
  const getUser = (e) => {
    e.preventDefault();
    api
      .get(`/${form.name}`)
      .then(({ data }) => {
        setUser(data);
        const time = Date.now();
        history.push({ user: form.name, searchTime: time });
        localStorage.setItem("searchs", JSON.stringify(history));
      })
      .catch((error) => console.log(error));
    cleanFields();
  };

  return (
    <Flex bg={"#161B22"} direction={["column", "row"]}
   
    align={"center"}
    w={["100%"]}
    >
      <a href="https://www.github.com" target={"_blank"}>
        <Image src={logo} m="1em" cursor={"pointer"} h="5em" />
      </a>
      {window.location.pathname==='/' ? (
        <Center w='100%'>
         <form method="GET" onSubmit={getUser}>
       
            
         <Input
          
           placeholder="Pesquise um usuário..."
           type={"search"}
           name="name"
           value={form.name}
           onChange={onChange}
           focusBorderColor="#f0f6fc"
       width={'20em'}
           m="1em"
           color={"#f0f6fc"}
           options={history}
         ></Input>
 
         <Button
           type={"submit"}
           
           m='1em'
           bg="#OD1117"
           color="#f0f6fc"
           _hover={{ color: "#BABBBD" }}
           border="1px solid #f0f6fc"
           
         >
           Buscar
         </Button>
        
        
         
           <Menu />
         
        
       </form>
       </Center>
      ):(  <Flex direction={'column'}  align={"center"}
    w={["100%"]}>
      <Center w='100%'>
        <form>
      <Input
        
        placeholder="Histórico de pesquisa"
        type={"search"}
        name="name"
        value={searchHistoric}
        onChange={handleSearchHistoric}
        focusBorderColor="#f0f6fc"
        width={"15em"}
        m="1em"
        color={"#f0f6fc"}
        options={history}
      ></Input>

     
      
        <Menu />
        </form>
        </Center>
    </Flex>)}
     
    </Flex>
  );
};
