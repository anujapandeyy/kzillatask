async function happy() {
    try {
      //further execution is stopped until promise is fulfilled.
      let response = await fetch("https://v2.jokeapi.dev/joke/Any");
  
      if (!response.ok) {
        throw new Error();
      }
  
      let result = await response.json();
  
      //if resolved
      console.log(result);
    } catch (error) {
      //if rejected
      console.log("Sorry, no jokes for you. Have a sad day ahead:(");
    }
  }
  
  //calling the function
  happy();
  