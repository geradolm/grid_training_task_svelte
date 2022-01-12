<script>
  let search = "";
  let games = [
    { title: "Avengers", image: "avengers.jpg" },
    { title: "Call of Duty - Vanguard", image: "call-of-duty.jpg" },
    { title: "Destinity 2", image: "destinity.jpg" },
    { title: "Fifa 22", image: "fifa-22.jpg" },
    { title: "Need for Speed", image: "need-for-speed.jpg" },
    { title: "Resident Evil 2", image: "resident-evil-2.jpg" },
    { title: "Spiderman", image: "spider-man.jpg" },
    {
      title: "Halo: Combat Evolved",
      image: "halo-combat-evolved.jpg",
    },
    { title: "Mortal Kombar 11", image: "mortal-kombat11.jpg" },
  ];

  $: games = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );
</script>

<div class="Search">
  <h1>Search</h1>
  <div class="search">
    <div>
      <input
        class="search-bar"
        type="search"
        id="searchGame"
        bind:value={search}
        placeholder="Search Game"
      />
    </div>
    {#each games as game}
      <ul class="list-search">
        <li>
          <b>
            <img src={game.image} alt="Game Logo" />
            <p>{game.title}</p>
          </b>
        </li>
      </ul>
    {/each}
  </div>
</div>

<style>
  .Search h1 {
    font-size: 25px;
    text-align: center;
    margin-top: 0;
  }

  .search-bar {
    padding-left: 0.125rem;
    padding-top: 0.063rem;
    width: auto;
    height: 2.5rem;
  }

  .list-search {
    margin: 0 auto;
    padding: 0;
    text-align: left;
    width: 100%;
  }

  .list-search li {
    width: 100%;
    height: 1.875rem;
    padding: 0.625rem;
    margin-left: 1.563rem;
  }

  .list-search li b {
    display: table;
    width: 100%;
  }

  .list-search li img {
    display: table-cell;
    height: 2.5rem;
    vertical-align: middle;
    width: 2.5rem;
  }

  .list-search li:hover p {
    color: #0096d4;
  }

  .list-search li p {
    color: #000;
    display: table-cell;
    font-weight: 500;
    vertical-align: middle;
    width: 100%;
    text-align: justify;
    padding-left: 0.938rem;
    font-size: 25px;
  }
</style>
