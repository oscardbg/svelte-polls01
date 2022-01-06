<script>
   import App from "../App.svelte";

   import Card from "../shared/Card.svelte";
   import PollStore from "../stores/PollStore";

   export let poll = {};

   // Reactive values
   $: totalVotes = poll.votesA + poll.votesB;
   $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
   $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

   // Handle votes function
   const handleVote = (option, id) => {
      PollStore.update((currentPolls) => {
         let newPolls = [...currentPolls];
         let upvotedPoll = newPolls.find((poll) => poll.id == id);
         upvotedPoll =
            option === "a" ? upvotedPoll.votesA++ : upvotedPoll.votesB++;

         return newPolls;
      });
   };
</script>

<Card>
   <div class="poll">
      <h3>{poll.question}</h3>
      <p>Total votes: {totalVotes}</p>
      <div class="answer" on:click={() => handleVote("a", poll.id)}>
         <div class="percent percent-a" style="width: {percentA}%" />
         <span> {poll.answerA} ({poll.votesA}) </span>
      </div>
      <div class="answer" on:click={() => handleVote("b", poll.id)}>
         <div class="percent percent-b" style="width: {percentB}%" />
         <span> {poll.answerB} ({poll.votesB}) </span>
      </div>
   </div>
</Card>

<style>
   .poll {
      user-select: none;
   }
   h3 {
      margin: 0 auto;
      color: #555;
   }
   p {
      margin-top: 6px;
      font-size: 14px;
      color: #aaa;
      margin-bottom: 30px;
   }
   .answer {
      background: #fafafa;
      cursor: pointer;
      margin: 10px auto;
      position: relative;
   }
   .answer:hover {
      opacity: 0.6;
   }
   span {
      display: inline-block;
      padding: 10px 20px;
   }
   .percent {
      height: 100%;
      position: absolute;
      box-sizing: border-box;
   }
   .percent-a {
      background: rgba(217, 27, 66, 0.2);
      border-left: 4px solid #d91b42;
   }
   .percent-b {
      background: rgba(69, 196, 150, 0.2);
      border-left: 4px solid #45c496;
   }
</style>
