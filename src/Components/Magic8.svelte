<script>
  let answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Ask again",
  ];
  let question = "";
  let answer = "";

  function getAnswer() {
    if (!question) {
      return;
    }
    let index = Math.floor(Math.random() * answers.length);
    answer = answers[index];
  }
</script>

<div class="Magic8">
  <h1>Magic 8 Ball Game</h1>
  <div>
    <div class="circle" style="background-image:url(Magic8Ball.png)">
      <p>{answer}</p>
    </div>
    <form class="question-box" on:submit|preventDefault={getAnswer}>
      <div class="question-game">
        <label for="question">Ask: </label>
        <input id="question" bind:value={question} />
      </div>
      <button type="submit">get answer</button>
    </form>
  </div>
</div>

<style>
  .Magic8 h1 {
    font-size: 25px;
    text-align: center;
    margin-top: 0.188rem;
    margin-bottom: 0.188rem;
  }

  .circle {
    background-position: center;
    background-size: 25rem;
    width: 25rem;
    height: 25rem;
    margin-left: 4.375rem;
    justify-content: center;
    align-items: center;
  }

  .circle p {
    text-align: center;
    height: 1.25rem;
    width: 12.5rem;
    padding-top: 11.875rem;
    padding-left: 6.25rem;
    color: #fff;
    font-size: 18px;
  }

  .question-game {
    width: 23rem;
    height: 2.5rem;
  }

  .question-box {
    display: flex;
    flex-direction: row;
  }

  .question-box button {
    background-color: #0a1813;
    color: white;
    border: none;
    cursor: pointer;
    width: 10.125rem;
    padding-left: 0.375rem;
    height: 2.5rem;
  }

  .question-box input {
    width: 9.375rem;
    height: 1.875rem;
    margin-right: 9.375rem;
  }

  .question-box label {
    font-size: 25px;
  }
</style>
