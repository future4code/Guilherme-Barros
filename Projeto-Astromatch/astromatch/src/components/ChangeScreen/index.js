import { Container } from "../../pages/Home/Container";
import MatchList from "../Matches/MatchList";
import { useState } from "react";
export const ChangeScreen = (props) => {
  const [telaAtual, setTelaAtual] = useState("inicial");

  const changeToInitial = () => {
    setTelaAtual("inicial");
  };
  const changeToMatches = () => {
    setTelaAtual("matches");
  };
  switch (telaAtual) {
    case "inicial":
      return (
        <Container
          changeToMatches={changeToMatches}
          changeToInitial={changeToInitial}
        />
      );

    case "matches":
      return (
        <MatchList
          changeToInitial={changeToInitial}
          setMatches={props.setMatches}
          matches={props.matches}
        />
      );
    default:
      return (
        <Container
          changeToInitial={changeToInitial}
          changeToMatches={changeToMatches}
          
        />
      );
  }
};
