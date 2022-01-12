<script>
    import { onMount, onDestroy } from "svelte";
    let time = new Date();
    $: hours = time.getHours();
    $: minutes = time.getMinutes();
    $: seconds = time.getSeconds();
    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);
    });
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="Digital">
    <h1>Digital Clock</h1>
    <div class="time">
        {hours <= 9 ? "0" + hours : hours}:
        {minutes <= 9 ? "0" + minutes : minutes}:
        {seconds <= 9 ? "0" + seconds : seconds}
    </div>
</div>

<style>
    .Digital {
        display: grid;
    }

    .Digital h1 {
        font-size: 25px;
        text-align: center;
    }

    .time {
        display: inline-block;
        padding-top: 180px;
        font-size: 60px;
        text-align: center;
        letter-spacing: 0.313rem;
    }
</style>
