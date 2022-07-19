import { Like, Dislike, Footer } from "../../assets/style";
import { accept } from "../../services/HttpClient";
import { reject } from "../../services/HttpClient";
export const Foot = ({profileId,setMatch}) => {
  


  return (
    <Footer>
      <Dislike onClick={()=>reject(profileId,setMatch)}>X</Dislike>
      <Like onClick={()=>accept(profileId,setMatch)}>♥️</Like>
    </Footer>
  );
};
export default Foot;
