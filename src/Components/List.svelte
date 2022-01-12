<script>
  let products = [
    { name: "Cheese & Bacon Rolls x9", price: 1.75, active: false },
    { name: "Diet Coke Pack x8", price: 4.25, active: false },
    { name: "Lager Beer Bottles 12x", price: 9.55, active: false },
    { name: "Multipack Crisps 6x", price: 1.75, active: false },
  ];

  function toggleActive(s) {
    s.active = !s.active;
  }

  function total() {
    let total = 0;
    products.forEach(function (s) {
      if (s.active) {
        total += s.price;
      }
    });
    return total;
  }
</script>

<div class="List">
  <h1>Order List</h1>
  <form>
    <div>
      <ul class="list-group">
        <br /><br /><br />
        {#each products as product}
          <li class="list-group-item" value="product">
            <label class="list-products"
              ><input type="checkbox" on:click={toggleActive(product)} />
              {product.name} - {product.price}</label
            >
          </li>
        {/each}
      </ul>
      <br /><br />
      {#if (total = total)}
        <div class="total">Total: {total()}</div>
      {/if}
    </div>
  </form>
</div>

<style>
  .List h1 {
    font-size: 25px;
    text-align: center;
  }

  .list-group-item {
    font-size: 20px;
    cursor: pointer;
  }

  .total {
    font-size: 35px;
  }

  .list-products {
    font-size: 30px;
  }
</style>
