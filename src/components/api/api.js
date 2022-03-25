let list = "";
export async function Fetch() {
  await fetch("https://catfact.ninja/facts")
    .then((resp) => resp.json())
    .then((data) => {
      list = data;
    })
    .catch((error) => console.log(error.message));

  if (list !== "") {
    return list;
  }
}
