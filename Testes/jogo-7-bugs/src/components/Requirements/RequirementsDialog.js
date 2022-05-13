import React from "react";
import { RequirementsOverlay, RequirementsContainer } from "./styled";

const RequirementsDialog = ({ onClose }) => {
  return (
    <>
      <RequirementsOverlay onClick={onClose}>
        <RequirementsContainer onClick={(e) => e.stopPropagation()}>
          <h2>Requisitos</h2>
          <h3>Página de produtos</h3>
          <ul>
            <li>Visualizar produtos</li>
            <ul>
              <li>Foto</li>
              <li>Nome</li>
              <li>Preço</li>
            </ul>
            <li>Filtrar por</li>
            <ul>
              <li>Valor mínimo</li>
              <li>Valor máximo</li>
              <li>Nome do produto (desconsiderando capitalização e acentos)</li>
            </ul>
            <li>Adicionar produtos ao carrinho</li>
          </ul>

          <h3>Página do carrinho</h3>
          <ul>
            <li>Visualizar produtos no carrinho</li>
            <ul>
              <li>
                Produtos iguais devem ser um único item, com a quantidade
                indicada
              </li>
            </ul>
            <li>Visualizar preço total do carrinho</li>
            <li>Deve ser possível finalizar a compra</li>
            <ol>
              <li>Coletar email do usuário</li>
              <li>Confirmar email digitado e valor final</li>
              <li>Informar que informações para pagamento serão enviadas</li>
              <li>Limpar carrinho e voltar para página de produtos</li>
            </ol>
          </ul>

          <button onClick={onClose}>Fechar</button>
        </RequirementsContainer>
      </RequirementsOverlay>
    </>
  );
};

export default RequirementsDialog;
