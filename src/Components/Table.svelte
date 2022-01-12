<script>
  import { rows } from "../store.js";

  let rows_value;
  const columns = ["Name", "Username", "Age"];

  rows.subscribe((value) => {
    rows_value = value;
  });

  function removeRow(index) {
    rows.set(rows_value.filter((row) => row != index));
  }
</script>

<div class="Table">
  <h1>Tables Data</h1>
  <table border="3" class="tables">
    <caption>Data</caption>
    <thead>
      <tr class="change-column">
        {#each columns as column}
          <th>{column}</th>
        {/each}
        <th />
      </tr>
    </thead>
    <tbody>
      {#each rows_value as row}
        <tr class="remove-row">
          {#each row as cell}
            <td contenteditable="true" bind:innerHTML={cell} />
          {/each}
          <td> <button on:click={removeRow(row)}> Delete </button></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .Table h1 {
    font-size: 25px;
    text-align: center;
  }

  .tables {
    justify-content: center;
    border-collapse: collapse;
    border: 0.125rem solid #000000;
    margin: 1.25rem auto;
  }

  .tables th {
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    padding: 0.625rem;
    min-width: 3.75rem;
    border: 0.125rem solid #000000;
  }

  .tables {
    font-size: 18px;
  }

  .remove-row td:nth-child(4) {
    border-color: transparent;
    text-align: center;
  }

  .change-column th:nth-child(4) {
    border-color: transparent;
  }

  .tables td {
    text-align: left;
    padding: 0.188rem;
    border: 0.125rem solid #000000;
  }
</style>
