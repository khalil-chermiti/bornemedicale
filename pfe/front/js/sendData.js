/**sed data to be persisted in database */
const sendData = () => {
  const authToken = getAuthToken();
  const data = parseDataToFloat();

  if (!authToken) {
    alert("vous devez vous connecter pour enregistrer vos données");
    return;
  }

  if (!data) {
    alert("aucune donnée à enregistrer");
  }

  fetch("http://localhost:3000/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
      Cookie: "access_token" + authToken,
    },
    credentials: "same-origin",
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      alert("vos données ont été enregistrées");
      // navigate to ./partsauto/getinfos.html
      window.location.href = "../partsauto/getinfos.html";
    })
    .catch(err => {
      console.log(err);
      alert("erreur lors de l'enregistrement des données");
    });
};
