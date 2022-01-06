import { writable } from "svelte/store";

const PollStore = writable([
   {
      id: 1,
      question: "Python or Javascript..?",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 19,
   },
   {
      id: 2,
      question: "React or Svelte..?",
      answerA: "React",
      answerB: "Svelte",
      votesA: 5,
      votesB: 68,
   },
]);

export default PollStore;
