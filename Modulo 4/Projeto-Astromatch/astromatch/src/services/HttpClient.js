import { httpClient } from "../constants/index";

export const getMatch = (setMatch) => {
  const request = httpClient.get(`person`);

  request
    .then((response) => {
      setMatch(response.data.profile);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMatches = (setMatchList) => {
  const request = httpClient.get(`matches`);
  request
    .then((res) => {
      setMatchList(res.data.matches);
      console.log(res.data.matches);
    })
    .catch((err) => {
      alert(err.response);
    });
};

export const limpaMatches = (setMatches) => {
  const request = httpClient.put(`clear`);
  request
    .then(() => {
      setMatches([]);
      alert("Lista de Matches apagada");
    })
    .catch((err) => {
      alert(err.response);
    });
};
export const accept = (profileId, setMatch) => {
  const bodyAcept = {
    id: profileId,
    choice: true,
  };
  const request = httpClient.post(`choose-person`, bodyAcept);
  request
    .then(() => getMatch(setMatch))
    .catch((err) => {
      alert(err.response);
    });
};
export const reject = (profileId, setMatch) => {
  const bodyReject = {
    id: profileId,
    choice: false,
  };
  const request = httpClient.post(`choose-person`, bodyReject);
  request.then(() => getMatch(setMatch)).catch((err) => {
    alert(err.response);
  });
};
