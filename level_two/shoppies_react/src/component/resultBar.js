import '../component/resultBar.css'

export default function ResultBar() {
  return (
      <div class="result_box boxes">
        <h3>
          <div class="search_word">Results</div>
        </h3>
        <div id="search_result">
          <ul class="list_search"></ul>
        </div>
      </div>
  );
}
