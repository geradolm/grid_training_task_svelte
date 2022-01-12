<script>
  let layout = "grid";
  let layout_list_grid = [
    {
      title: "Avengers",
      image: { large: "avengers.jpg", small: "avengers.jpg" },
    },
    {
      title: "Call of Duty - Vanguard",
      image: { large: "call-of-duty.jpg", small: "call-of-duty.jpg" },
    },
    {
      title: "Destinity 2",
      image: { large: "destinity.jpg", small: "destinity.jpg" },
    },
    { title: "Fifa 22", image: { large: "fifa-22.jpg", small: "fifa-22.jpg" } },
    {
      title: "Need for Speed",
      image: { large: "need-for-speed.jpg", small: "need-for-speed.jpg" },
    },
    {
      title: "Resident Evil 2",
      image: { large: "resident-evil-2.jpg", small: "resident-evil-2.jpg" },
    },
    {
      title: "Spiderman",
      image: { large: "spider-man.jpg", small: "spider-man.jpg" },
    },
    {
      title: "Halo: Combat Evolved",
      image: {
        large: "halo-combat-evolved.jpg",
        small: "halo-combat-evolved.jpg",
      },
    },
    {
      title: "Mortal Kombar 11",
      image: { large: "mortal-kombat11.jpg", small: "mortal-kombat11.jpg" },
    },
  ];
</script>

<div class="Toggle">
  <h1>Toggle Grid List</h1>
  <div class="tool-bar">
    <b
      class="list-icon"
      on:click={layout.list}
      bind={layout == "list"}
      title="List"
      style="background-image:url(list-icon.svg)"
    />
    <b
      class="grid-icon"
      on:click={layout.grid}
      bind={layout == "grid"}
      title="Grid"
      style="background-image:url(grid-icon.svg)"
    />
  </div>
  {#if layout === "grid"}
    <ul class="grid">
      {#each layout_list_grid as layouts}
        <li>
          <b>
            <img src={layouts.image.large} alt="grid pictures" />
          </b>
        </li>
      {/each}
    </ul>
  {/if}
  {#if layout === "list"}
    <ul class="list">
      {#each layout_list_grid as layouts}
        <li>
          <b
            ><img src={layouts.image.small} alt="small pictures" />
            <p>{layouts.title}</p>
          </b>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .Toggle h1 {
    font-size: 25px;
    text-align: center;
    margin-top: 0.188rem;
    margin-bottom: 0.188rem;
  }

  .Toggle {
    display: grid;
    max-width: 64rem;
    min-width: 18.75rem;
    text-align: center;
  }

  .tool-bar {
    height: 2.188rem;
    width: 31.25rem;
    text-align: right;
  }

  .tool-bar b {
    border: 0.063rem solid #e4e4e4;
    border-bottom: 0.063rem solid #908f8f;
    cursor: pointer;
    display: inline-block;
    height: 2rem;
    margin-top: 0;
    margin-right: 0.313rem;
    width: 2rem;
  }

  /* .tool-bar b.active {
    background-color: rgba(0, 0, 0, 0.5);
    border: 0.063rem solid #908d8d;
    border-right: 0.063rem solid #e2e2e2;
    border-bottom: 0.063rem solid #e2e2e2;
  } */

  .tool-bar b.list-icon {
    background-image: url("list-icon.svg");
  }

  .tool-bar b.grid-icon {
    background-image: url("grid-icon.svg");
  }

  /* list & images - Grid layout */

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 8rem);
    grid-template-rows: repeat(3, 8rem);
    grid-gap: 0.3rem;
    padding: 0px;
  }

  .grid li {
    display: inline-block;
    position: relative;
    width: 100%;
  }

  .grid li img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.125rem solid #fff;
    height: 99%;
    position: absolute;
    width: 98%;
  }

  .grid li img:hover {
    border: 0.125rem solid #000;
    box-shadow: 0 0 5.625rem --0.625rem rgba(0, 0, 0, 1);
  }

  /* list & images - List layout */

  .list {
    margin: 0 auto;
    padding: 0;
    text-align: left;
    width: 100%;
  }

  .list li {
    width: 100%;
    height: 1.875rem;
    padding: 0.625rem;
    margin-left: 1.563rem;
  }

  .list li b {
    display: table;
    width: 100%;
  }

  .list li img {
    display: table-cell;
    height: 1.875rem;
    vertical-align: middle;
    width: 1.875rem;
  }

  .list li:hover p {
    color: #0096d4;
  }

  .list li p {
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
