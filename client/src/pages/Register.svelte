<script lang="ts">
    import { push } from 'svelte-spa-router';
    import { api } from "../lib/api";
    import { isLoggedIn } from "../stores/auth.store";

    let name = $state("");
    let email = $state("");
    let password = $state("");
    let error = $state("");
    let success = $state("");

    async function handleRegister(e: Event) {
        e.preventDefault();
        try {
            const {data}= await api.post("/auth/register", { name, email, password });
            localStorage.setItem("token", data.token);
            isLoggedIn.set(true);
            success = "Registration successful!";
            error = "";
            console.log("Register success:", data);
            window.location.href = "/";

        } catch (err: unknown) {
            error = "Registration failed. Please try again.";
            success = "";
            console.log(err);
        }
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div class="w-full max-w-sm bg-white shadow-xl rounded-lg p-8">
    
    <!-- Title -->
    <h1 class="text-2xl font-bold text-gray-800 text-center">Register</h1>
    <p class="text-gray-500 text-sm text-center mb-6">Welcome! Please fill out the form to create an account.</p>

    <!-- Feedback Messages -->
    {#if error}
      <p class="text-red-500 text-sm mb-4 text-center">{error}</p>
    {/if}
    {#if success}
      <p class="text-green-600 text-sm mb-4 text-center">{success}</p>
    {/if}

    <!-- Form -->
    <form onsubmit={handleRegister} class="space-y-4">
      <input
        type="text"
        placeholder="Username"
        bind:value={name}
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />

      <input
        type="email"
        placeholder="Email"
        bind:value={email}
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />

      <input
        type="password"
        placeholder="Password"
        bind:value={password}
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Register
      </button>
    </form>

    <!-- Login Link -->
    <p class="text-sm text-gray-600 mt-6 text-center">
      Already have an account?
      <button onclick={() => push('/login')} class="text-blue-600 hover:underline font-medium">Login here</button>
    </p>

    <!-- Divider -->
    <div class="flex items-center my-6">
      <div class="flex-grow h-px bg-gray-300"></div>
      <span class="px-2 text-gray-400 text-sm">or</span>
      <div class="flex-grow h-px bg-gray-300"></div>
    </div>

    <!-- Google Sign-up -->
    <button
      id="googleauth"
      class="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
    >
      <img src="/src/assets/google.png" alt="Google" class="w-5 h-5"/>
      <span class="text-gray-700">Sign up with Google</span>
    </button>

  </div>
</div>
