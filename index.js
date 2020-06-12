const theFetchFunction = (fetchURL) => {
  let newURL;
  if(fetchURL.substring(0,8) !== "https://")
    newURL = "https://"+fetchURL;
  else newURL = fetchURL;

  console.log(newURL);

  fetch(newURL, {mode: 'cors'})
  .then(response => {
    if (!response.ok) {
      console.log(`FAILURE: ${response.status}`);

      //"h".sus
    }
    else {
        console.log(`SUCCESS: ${response.status}`);
    }

    if (response.status>=200&&response.status<=299) {
      alert("Connection successfully made and everyting is fine!");
      console.log("Everything is fine");
    }
    else if (response.status>= 400 && response.status <=499 )
    {
      alert("Start freaking out...there's a client-side error");
      console.warn("Client-side error");

    }
    else {
      alert("Throw a tantrum because the server isn't working");
      console.warn("Server error");
    }

   return response.ok;

  })
  .then(console.log)
  .catch(error => alert("Something went wrong"+error));
}

const searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", e => {
    const url = document.querySelector(".text").value;
    theFetchFunction(url);
})

