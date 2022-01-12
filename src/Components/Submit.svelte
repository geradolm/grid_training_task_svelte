<script>
  import { rows } from "../store.js";
  let new_user = {
    first_name: "",
    last_name: "",
    age: 0,
  };

  function addNewUser() {
    rows.update((rows) => [
      ...rows,
      [new_user.first_name, new_user.last_name, new_user.age],
    ]);
    new_user = {
      first_name: "",
      last_name: "",
      age: 0,
    };
  }
</script>

<hr />
<h1>Submit Form</h1>
<div class="form-group">
  <label for="name">Name</label>
  <input
    type="text"
    class="form-name"
    id="name"
    bind:value={new_user.first_name}
  />
</div>
<div class="form-group">
  <label for="lastName">Last Name</label>
  <input
    type="text"
    class="form-lastname"
    id="lastName"
    bind:value={new_user.last_name}
  />
</div>
<div class="form-group">
  <label for="age">Age</label>
  <input
    type="number"
    id="age"
    min="1"
    max="100"
    class="form-age"
    bind:value={new_user.age}
  />
</div>

<button on:click={addNewUser}>Add User </button>

<style>
</style>
