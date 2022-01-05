<script>
   import Header from "./components/Header.svelte";
   import Footer from "./components/Footer.svelte";
</script>

<Header />
<main>
   <h1>Hello {name}!</h1>
   <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
   </p>
</main>
<Footer />

<style>
   main {
      max-width: 960px;
      margin: 40px auto;
   }
</style>
