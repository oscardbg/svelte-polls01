<script>
   import Button from "../shared/Button.svelte";
   import { createEventDispatcher } from "svelte";
   import PollStore from "../stores/PollStore";

   let dispatch = createEventDispatcher();
   let fields = { question: "", answerA: "", answerB: "" };
   let errors = { question: "", answerA: "", answerB: "" };
   let valid = false;

   const submitHandler = () => {
      valid = true;

      // Question validation
      if (fields.question.trim().length < 5) {
         valid = false;
         errors.question = "Question must be at least 5 characters long";
      } else {
         errors.question = "";
      }

      // Answer A validation
      if (fields.answerA.trim().length < 1) {
         valid = false;
         errors.answerA = "Answer A can not be empty";
      } else {
         errors.answerA = "";
      }

      // Answer B validation
      if (fields.answerB.trim().length < 1) {
         valid = false;
         errors.answerB = "Answer A can not be empty";
      } else {
         errors.answerB = "";
      }

      if (valid) {
         let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };

         // Save poll to the store
         PollStore.update((currentPolls) => {
            return [poll, ...currentPolls];
         });

         dispatch("add");
      }
   };
</script>

<form on:submit|preventDefault={submitHandler}>
   <div class="field">
      <label for="question">Poll Quesiton:</label>
      <input type="text" id="question" bind:value={fields.question} />
      <div class="error">{errors.question}</div>
   </div>
   <div class="field">
      <label for="question">Answer A:</label>
      <input type="text" id="answer-a" bind:value={fields.answerA} />
      <div class="error">{errors.answerA}</div>
   </div>
   <div class="field">
      <label for="question">Answer B:</label>
      <input type="text" id="answer-b" bind:value={fields.answerB} />
      <div class="error">{errors.answerB}</div>
   </div>
   <Button type="secondary" flat={true} inverse={true}>Add Poll</Button>
</form>

<style>
   form {
      width: 400px;
      margin: 0 auto;
      text-align: center;
   }
   .field {
      margin: 18px auto;
   }
   input {
      width: 100%;
      border-radius: 6px;
   }
   label {
      margin: 10px auto;
      text-align: left;
   }
   .error {
      font-weight: bold;
      font-size: 12px;
      color: #d91b42;
   }
</style>
