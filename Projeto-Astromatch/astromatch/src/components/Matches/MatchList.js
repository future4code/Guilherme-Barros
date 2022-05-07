import { useEffect } from "react";
import Head from "../Header/Head";
import { getMatches } from "../../services/HttpClient";
import {
  Cont,
  PerfIcon,
  PerfName,
  Perf,
  Lista,
  DivHeartBroked,
  ImgHeartBroken,
} from "../../assets/style";
import HeartBroked from "../../assets/heart-break-icon.jpg";
const MatchList = (props) => {
  useEffect(() => {
    getMatches(props.setMatches);
  }, []);

  const lista = props.matches.map((match, index) => {
    return (
      <Perf key={index}>
        <PerfIcon src={match.photo}></PerfIcon>
        <PerfName>{match.name}</PerfName>
      </Perf>
    );
  });
  return (
    <>
      <Cont>
        <Head
          changeToMatches={props.changeToMatches}
          changeToInitial={props.changeToInitial}
        />
        {lista.length != [] ? (
          <Lista>{lista}</Lista>
        ) : (
          <DivHeartBroked>
            <ImgHeartBroken src={HeartBroked}></ImgHeartBroken>
            <p>Nenhum Match adicionado ainda :(</p>
          </DivHeartBroked>
        )}
      </Cont>
    </>
  );
};
export default MatchList;
