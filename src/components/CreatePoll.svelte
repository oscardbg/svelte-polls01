<script>
   import Button from "../shared/Button.svelte";

   let fields = {
      question: "",
      answerA: "",
      answerB: "",
   };

   const submitHandler = () => {
      console.log(fields);
   };
</script>

<form on:submit|preventDefault={submitHandler}>
   <div class="field">
      <label for="question">Poll Quesiton:</label>
      <input type="text" id="question" bind:value={fields.question} />
   </div>
   <div class="field">
      <label for="question">Answer A:</label>
      <input type="text" id="answer-a" bind:value={fields.answerA} />
   </div>
   <div class="field">
      <label for="question">Answer B:</label>
      <input type="text" id="answer-b" bind:value={fields.answerB} />
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
</style>
