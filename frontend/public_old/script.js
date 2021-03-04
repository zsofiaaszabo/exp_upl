//
window.addEventListener("load", () => {
  console.log("The Client is running...");

  let form = document.getElementById("uploadForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("default form submit on hold");

    let form = document.getElementById("uploadForm");

    let myFormData = new FormData();
    let upload = document.querySelector("input[type='file']").files[0];
    //TODO: .files[0] !!!
    let uname = document.querySelector("input[type='text']").value;

    //
    myFormData.append("userName", uname);
    myFormData.append("userFile", upload);

    fetch("/upload", {
      method: "POST",
      body: myFormData,
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      });
  });
});
//írni egy function, hogy megakadályozza, hogy lefusson a submit
