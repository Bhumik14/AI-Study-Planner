<script lang="ts">
  let topic = "";

  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log("Topic entered:", topic);
  }
</script>

<div class="max-w-lg mx-auto mt-16 p-6 bg-white rounded-2xl shadow-lg">
  <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
    What do you want to learn?
  </h1>

  <form on:submit={handleSubmit} class="flex space-x-2">
    <input
      type="text"
      placeholder="Enter your topic"
      bind:value={topic}
      class="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    />
    <button
      type="submit"
      class="px-5 py-2 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
    >
      Go
    </button>
  </form>
</div>
