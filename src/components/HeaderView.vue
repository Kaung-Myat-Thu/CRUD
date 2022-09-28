<template>
  <header class="bg-slate-300 w-full px-12 py-4 mb-4">
    <div class="flex items-center justify-between md:justify-start gap-4">
      <div>
        <h1
          class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700"
        >
          {{ title }}
        </h1>
      </div>
      <div class="md:hidden">
        <DropdownMenu />
      </div>
      <nav class="hidden md:block">
        <ul class="flex items-center gap-4">
          <li>
            <router-link to="/" class="cursor-pointer">
              <h1
                class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 hover:from-red-500 hover:to-red-700 hover:drop-shadow-lg"
              >
                Home
              </h1>
            </router-link>
          </li>
          <li>
            <router-link to="/add-contact" class="cursor-pointer">
              <h1
                class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 hover:from-red-500 hover:to-red-700 hover:drop-shadow-lg"
              >
                Add Contact
              </h1>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu.vue";
export default {
  props: {
    title: String,
  },
  components: {
    DropdownMenu,
  },
};
</script>
