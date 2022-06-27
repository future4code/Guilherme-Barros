import React from "react";
import {
  Match,
  Info,
  ImgMatch,
  NameAge,
  Name,
  Age,
  DivImg,
  Bio,
} from "../../assets/style";


export const MatchImg = ({photo,name,age,bio}) => {


  return (
    <Match>
      <DivImg />
      <ImgMatch src={photo} />

      <Info>
        <NameAge>
          <Name>{name},</Name>
          <Age>{age}</Age>
        </NameAge>

        <Bio>{bio}</Bio>
      </Info>
    </Match>
  );
};
