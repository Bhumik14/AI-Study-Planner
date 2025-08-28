<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Register from "./pages/Register.svelte";
  import Learning from "./pages/Learning.svelte";
  import Practice from "./pages/Practice.svelte";
  
  const routes = {
    "/": Home,
    "/login": Login,
    "/register": Register,
    "/learning": Learning,
    "/practice": Practice,
    "*": Login
  };
</script>

<Router {routes} />
