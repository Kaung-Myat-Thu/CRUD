<template>
  <div class="w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-80 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <Bars3Icon
            class="h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-96 origin-top-right rounded-md bg-gray-900 shadow-lg"
        >
          <div class="px-1 py-1">
            <MenuItem
              class="block font-bold px-4 py-2 text-white hover:bg-gray-700 hover:rounded"
            >
              <router-link to="/">Home</router-link>
            </MenuItem>
            <MenuItem
              class="block font-bold px-4 py-2 text-white hover:bg-gray-700 hover:rounded"
            >
              <router-link to="/add-contact">Add Contact</router-link>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
