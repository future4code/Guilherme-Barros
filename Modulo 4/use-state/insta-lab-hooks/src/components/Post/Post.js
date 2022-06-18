import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
const [like,setLike]=useState(false)
const [comenting,setComenting]=useState(false)
const [nLikes,setLikeCount]=useState(0)
const [nComents,setComentCount]=useState(0)
const [coment,setComent]=useState([])
  const onClickCurtida = () => {
   if(like){
    setLike(!like)
    setLikeCount(nLikes-1)
   }else{
    setLike(!like)
    setLikeCount(nLikes+1)
   }

  };

  const onClickComentario = () => {
    setComenting(!comenting)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...coment, comentario]
    setComent(listaDeComentarios)
    setComenting(false)
    setComentCount(nComents+1)
  }
  const iconeCurtida = like ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  const caixaDeComentario=comenting?(
    <SecaoComentario enviarComentario={enviarComentario}/>
  ):(
    coment.map((comentario)=>{
      return(
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (
   
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
         icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={nLikes}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={nComents}
        />
      </PostFooter>
      { caixaDeComentario }
    </PostContainer>
  )
}

export default Post