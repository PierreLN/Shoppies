import SearchBar from "./component/searchBar";
import ResultBar from "./component/resultBar";
import NominationBar from "./component/nominationBar";
import "./App.css";

async function search(ele) {
  let key = "e626c0fc";
  let word = ele.value;
  let api_url = "https://www.omdbapi.com/?s=" + word + "&apikey=" + key;
  let responce = await fetch(api_url);
  let data = await responce.json();
  let title = "None";

  if (data["Response"] === "True") {
    for (let i = 0; i < 5; i++) {
      title = data["Search"][i]["Title"];
      let year = data["Search"][i]["Year"];
      let text = title + " (" + year + ")";
    }
  }

  return <div>{title}ghjkl</div>;
}

function App() {
  return (
    <div>
      <body>
        <div>
          <div class="main_boxes">
            <h1>The Shoppies</h1>
            <SearchBar></SearchBar>
          </div>
          <div class="results_and_nomination">
            <ResultBar></ResultBar>
            <NominationBar></NominationBar>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
