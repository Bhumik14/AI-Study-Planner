<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/login.svelte";
  import Register from "./pages/register.svelte";
  const routes = {
    "/": Home,
    "/login": Login,
    "/register": Register,
    "*": Login
  };
</script>

<Router {routes} />
