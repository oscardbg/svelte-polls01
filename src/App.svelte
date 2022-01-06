<script>
   import Header from "./components/Header.svelte";
   import Footer from "./components/Footer.svelte";
   import Tabs from "./shared/Tabs.svelte";
   import CreatePoll from "./components/CreatePoll.svelte";
   import PollList from "./components/PollList.svelte";

   let items = ["Current Polls", "Add New Poll"];
   let activeItem = "Current Polls";

   let polls = [
      {
         id: 1,
         question: "Python or Javascript..?",
         answerA: "Python",
         answerB: "Javascript",
         votesA: 9,
         votesB: 19,
      },
   ];

   const tabChange = (e) => {
      activeItem = e.detail;
   };

   const handleAdd = (e) => {
      const poll = e.detail;
      polls = [poll, ...polls];
      activeItem = "Current Polls";
      console.log(polls);
   };

   const handleVote = (e) => {
      const { option, id } = e.detail;

      let newPolls = [...polls];
      let upvotedPoll = newPolls.find((poll) => poll.id == id);
      upvotedPoll =
         option === "a" ? upvotedPoll.votesA++ : upvotedPoll.votesB++;

      polls = newPolls;
   };
</script>

<Header />
<main>
   <Tabs {items} {activeItem} on:tabChange={tabChange} />
   {#if activeItem === items[0]}
      <PollList {polls} on:vote={handleVote} />
   {:else if activeItem === items[1]}
      <CreatePoll on:add={handleAdd} />
   {/if}
</main>
<Footer />

<style>
   main {
      max-width: 960px;
      margin: 40px auto;
   }
</style>
