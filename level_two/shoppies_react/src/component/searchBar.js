import magnify_glass from '../image/search.png'
import '../component/searchBar.css'

export default function SearchBar() {
  return (
    <div>
      <div class="input_main boxes">
        <div>Movie title</div>
        <div class="input_search">
          <img class="magnify_glass" src={magnify_glass} alt=""></img>
          <input
            class="input_box"
            placeholder="Search..."
          ></input>
        </div>
      </div>
    </div>
  );
}
