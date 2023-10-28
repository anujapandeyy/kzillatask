let p = fetch("https://api.adviceslip.com/advice");

p.then((response) => {
  if (!response.ok) {
    //goes directly to catch() block
    throw new Error();
  }
  return response.json();
})
  .then((result) => {
    //if resolved
    console.log(result);
  })
  .catch(() => {
    //if rejected
    console.log("An error occurred while fetching data.");
  });
