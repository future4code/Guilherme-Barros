import { Cont, ContDiv, BodyCont, ImgHeart, DivHeart } from "../../assets/style";
import { MatchImg } from "../../components/Profile/MatchImg";
import React from "react";
import { Head } from "../../components/Header/Head";
import { Foot } from "../../components/Footer/Foot";
import { useState, useEffect } from "react";
import { getMatch } from "../../services/HttpClient";
import PurpleHeart from "../../assets/heartpurple.gif"
export const Container = (props) => {
  const [match, setMatch] = useState({});

  useEffect(() => {
    getMatch(setMatch);
  }, []);
  return (
    <>
      <Cont>
        <ContDiv>
          <Head
            changeToMatches={props.changeToMatches}
            changeToInitial={props.changeToInitial}
          />
          {match ? (
            <BodyCont>
              <MatchImg {...match} />
              <Foot profileId={match.id} setMatch={setMatch} />
            </BodyCont>
          ) : (
            <DivHeart><ImgHeart src={PurpleHeart}></ImgHeart></DivHeart>
          )}
        </ContDiv>
      </Cont>
    </>
  );
};
