<script>
  import Digital from "./Components/Clock.svelte";
  import Login from "./Components/Login.svelte";
  import Quiz from "./Components/Quiz.svelte";
  import Table from "./Components/Table.svelte";
  import Submit from "./Components/Submit.svelte";
  import List from "./Components/List.svelte";
  import Search from "./Components/Search.svelte";
  import Toggle from "./Components/Toggle.svelte";
  import Magic8 from "./Components/Magic8.svelte";
</script>

<main>
  <h1 class="title">First Grid</h1>

  <div class="container">
    <!-- Digital Clock -->

    <div id="clockd">
      <Digital />
    </div>

    <!-- Login Session -->

    <div id="login-form">
      <Login />
    </div>

    <!-- Quiz -->

    <div id="quiz">
      <Quiz />
    </div>

    <!-- Table Data -->

    <div id="table">
      <Table />
    </div>

    <!-- Submit Form -->

    <div id="adding">
      <Submit />
    </div>

    <!-- Order List -->

    <div id="order">
      <List />
    </div>

    <!-- List Items Seacrh -->

    <div id="searchlist">
      <Search />
    </div>

    <!-- list & images -->

    <div id="toggle-grid-list">
      <Toggle />
    </div>

    <!-- Magig 8 Ball Game -->

    <div id="ball">
      <Magic8 />
    </div>
  </div>
</main>

<style>
  .title {
    text-align: center;
    align-items: center;
    margin-left: 50rem;
  }

  .container > div {
    border-radius: 0.313rem;
    padding: 0.625rem;
    background-color: rgb(89, 133, 112);
    border: 0.125rem solid rgb(6, 76, 104);
  }

  .container {
    display: grid;
    width: 50rem;
    grid-template-columns: repeat(3, 35rem);
    grid-template-rows: repeat(3, 35rem);
    grid-gap: 2.5rem;
  }
</style>
