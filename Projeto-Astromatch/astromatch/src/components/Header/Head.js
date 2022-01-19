import { Header, Img, ImgMatches } from "../../assets/style";
import Logo from "../../assets/logo.png";
import Matches from "../../assets/matches.png";
export const Head = ({changeToInitial,changeToMatches}) => {
  return (
    <Header>
      <Img src={Logo} onClick={() => changeToInitial()} />
      <ImgMatches onClick={() => changeToMatches()} src={Matches} />
    </Header>
  );
};
export default Head;
