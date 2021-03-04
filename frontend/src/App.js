import { useEffect, useState } from "react";

function App() {
  console.log("The Client is running...");

  let [postNow, setPostNow] = useState(false);

  useEffect(() => {
    if (!postNow) return;

    // let idS = ["uName", "uEmail", "pCode", "uCity", "uStreet", "uDoorNr", "uOther"];

    let myFormData = new FormData();

    let upload = document.querySelector("input[type='file']").files[0];
    let uname = document.querySelector("input[type='text']").value;

    let uName = document.getElementById("uName").value;
    let uEmail = document.getElementById("uEmail").value;
    let pCode = document.getElementById("pCode").value;
    let uCity = document.getElementById("uCity").value;
    let uStreet = document.getElementById("uStreet").value;
    let uDoorNr = document.getElementById("uDoorNr").value;
    let uOther = document.getElementById("uOther").value;

    myFormData.append("userName", uname);
    myFormData.append("userFile", upload);

    myFormData.append("uName", uName);
    myFormData.append("uEmail", uEmail);
    myFormData.append("pCode", pCode);
    myFormData.append("uCity", uCity);
    myFormData.append("uStreet", uStreet);
    myFormData.append("uDoorNr", uDoorNr);
    myFormData.append("uOther", uOther);

    fetch("http://localhost:9999/upload", {
      method: "POST",
      mode: "no-cors",
      body: myFormData,
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      });

    setPostNow(false);
  }, [postNow]);

  // let form = document.getElementById("uploadForm");

  let clickHandler = () => {
    setPostNow(true);
  };

  return (
    <div className="App">
      <h1>Public index</h1>

      <h3>forbidden upload</h3>
      <div id="uploadForm">
        <label htmlFor="userName">Type the user name here:</label>
        <input type="text" id="userName" name="userNameInput" />
        {/* <!--  --> */}
        <input type="file" name="uploadedFile" />
        <input type="submit" value="Upload!" onClick={clickHandler} />
      </div>
      {/* <!-- User name input --> */}
      <div id="newForm">
        <label htmlFor="uName">Felhasználó név:</label>
        <input type="text" name="uName" id="uName" />
        <label htmlFor="uEmail">Email cím:</label>
        <input type="email" name="uEmail" id="uEmail" />
        <div>
          <label htmlFor="pCode">Irányító Szám:</label>
          <input type="text" name="pCode" id="pCode" />
          <label htmlFor="uCity">Város</label>
          <input type="text" name="uCity" id="uCity" />
          <label htmlFor="uStreet">Utca</label>
          <input type="text" name="uStreet" id="uStreet" />
          <label htmlFor="uDoorNr">Házszám</label>
          <input type="text" name="uDoorNr" id="uDoorNr" />
          <label htmlFor="uOther">Egyéb</label>
          <input type="text" name="uOther" id="uOther" />
        </div>
        <button onClick={clickHandler} id="sendAll">
          Send All Data
        </button>
      </div>
    </div>
  );
}

export default App;

//egy userData appendelése, amielőtt a useData append minden olyan input mezőte, aminek a tartalma kell, minden szöveges vagy szövegszerű input mező tartalmát. egy objektumba kell beletenni, value érték- kulcs
