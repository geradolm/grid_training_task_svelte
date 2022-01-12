<script>
  let username = "";
  let password = "";
  let doLogin = false;
  let doError = false;
  let user = {
    doLogin: false,
    doError: false,
  };
  function toggle() {
    user.doLogin = !user.doLogin;
    user.doError = !user.doError;
  }

  let login = () => {
    if (username === "developer" && password === "developyn") {
      user.doLogin = true;
      return;
    }
    if (username !== "developer" || password !== "developyn") {
      user.doError = true;
      return;
    }
    function toggle() {
      login.loggedIn = !user.loggedIn;
    }
  };
</script>

<div class="Login">
  <h1>Log In Session</h1>
  <form>
    <label for="username">Username</label>
    <input
      id="username"
      type="text"
      bind:value={username}
      placeholder="username"
      required
    />
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      bind:value={password}
      placeholder="password"
      required
    />
    <button type="submit" on:click|preventDefault={login}> Login </button>

    {#if user.doLogin}
      <button on:click={toggle}>Log in successfull.!</button>
    {/if}
    {#if user.doError}
      <button on:click={toggle}>Incorrect User or Password</button>
    {/if}
  </form>
</div>

<style>
  .Login h1 {
    font-size: 25px;
    text-align: center;
  }

  .Login label {
    font-size: 35px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.75rem 1.25rem;
    margin: 0.5rem 0;
    display: inline-block;
    border: 0.063rem solid #ccc;
    box-sizing: border-box;
    font-size: 15px;
  }

  .Login button {
    display: grid;
    background-color: #0a1813;
    color: white;
    padding: 0.875rem 1.25rem;
    margin: 2.5rem 0.5rem 1.5rem;
    border: none;
    cursor: pointer;
    width: 40%;
  }

  .Login button:hover {
    opacity: 0.8;
    color: #2c8871;
  }
</style>
