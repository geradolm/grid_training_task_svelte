<script>
  let quiz = {
    questions: [
      {
        text: "HTML is what type of language?",
        responses: [
          { text: "Markup Language", correct: true },
          { text: "Macro Language" },
          { text: "Programming Language" },
          { text: "Scripting Language" },
        ],
      },
      {
        text: "What amount of bits commonly equals one byte?",
        responses: [
          { text: "1" },
          { text: "128" },
          { text: "64" },
          { text: "8", correct: true },
        ],
      },
      {
        text: "What is the most preferred image format used for logos?",
        responses: [
          { text: ".png" },
          { text: ".jpeg" },
          { text: ".svg", correct: true },
          { text: ".gif" },
        ],
      },
      {
        text: "In web development, what does CSS stand for?",
        responses: [
          { text: "Counter Strike: Source" },
          { text: "Cascading Style Sheet", correct: true },
          { text: "Corrective Style Sheet" },
          { text: "Computer Style Sheet" },
        ],
      },
    ],
  };

  quiz = quiz;

  let questionIndex = 0;
  let userResponses = Array(quiz.questions.length).fill(false);
  let soundPath = "completion-of-a-level.mp3";

  function next() {
    questionIndex++;
  }

  function score() {
    return userResponses.filter(function (val) {
      return val;
    }).length;
  }

  function sound() {
    if (questionIndex === 4) {
      let soundmp3 = new Audio(soundPath);
      soundmp3.play();
    }
  }
</script>

<div class="Quiz">
  <h1>Quiz</h1>
  <div>
    {#each quiz.questions as question, index}
      {#if index === questionIndex}
        <div>
          <h2>{question.text}</h2>
          <ol>
            {#each question.responses as response}
              <li class="answer-option">
                <label>
                  <input type="radio" bind:value={userResponses[index]} />
                  {response.text}
                </label>
              </li>
            {/each}
          </ol>
          <button on:click={next}>next</button>
        </div>
      {/if}
    {/each}
  </div>

  <div>
    {#if questionIndex === quiz.questions.length}
      <h3>
        Quiz finished
        <p>Total score: {score()} / {quiz.questions.length}</p>
        <p>{sound()}</p>
      </h3>
    {/if}
  </div>
</div>

<style>
  .Quiz h1 {
    font-size: 25px;
    text-align: center;
  }

  .Quiz h2 {
    font-size: 30px;
    text-align: center;
  }

  .Quiz h3,
  p {
    font-size: 35px;
    text-align: center;
  }

  .answer-option {
    font-size: 25px;
  }

  .Quiz button {
    background-color: #0a1813;
    color: white;
    padding: 0.875rem 1.25rem;
    margin: 0.5rem 0;
    border: none;
    cursor: pointer;
    width: 40%;
  }

  .Quiz button:hover {
    opacity: 0.8;
    color: #2c8871;
  }
</style>
