<template>
  <div class="mx-auto px-4 md:px-0 mt-8">
    <div
      v-if="!contacts.length"
      class="font-semibold text-xl flex items-center justify-center mx-auto"
    >
      Loading
      <span
        class="animate-spin w-7 h-7 border-r-4 border-r-slate-500 border-4 rounded-full inline-block border-slate-700 ml-2 relative"
      ></span>
    </div>
    <table v-else class="table-auto text-ellipsis mx-auto w-full md:w-4/5">
      <thead class="bg-slate-500 text-white text-left">
        <tr>
          <th class="p-2 font-semibold text-center rounded-tl-md">#</th>
          <th class="p-2 font-semibold">Name</th>
          <th class="p-2 font-semibold">Email</th>
          <th class="p-2 font-semibold">Designation</th>
          <th class="p-2 font-semibold">Contact NO.</th>
          <th class="p-2 font-semibold rounded-tr-md text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="contact in contacts"
          :key="contact.id"
          class="even:bg-slate-100 last:border-b-2 hover:bg-slate-200"
        >
          <td class="p-2 font-normal text-center">
            {{ contact.id }}
          </td>
          <td class="p-2 font-normal capitalize">{{ contact.name }}</td>
          <td class="p-2 font-normal">{{ contact.email }}</td>
          <td class="p-2 font-normal">{{ contact.designation }}</td>
          <td class="p-2 font-normarl">
            {{ contact.contact_no }}
          </td>
          <td class="p-2 font-normal flex gap-2 justify-center">
            <router-link
              :to="{ name: 'EditContact', params: { id: contact.id } }"
              class="text-white text-sm font-semibold px-4 py-1 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
            >
              Edit
            </router-link>

            <button
              @click="deleteContact(contact.id)"
              class="text-white text-sm font-semibold px-4 py-1 rounded bg-red-500 hover:bg-red-600 active:bg-red-700"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const contacts = ref([]);

    async function getContacts() {
      let url = "http://127.0.0.1:8000/api/contacts";
      await axios
        .get(url)
        .then((res) => {
          this.contacts = res.data.contacts;
        })
        .catch((error) => console.log(error));
    }

    async function deleteContact(id) {
      let url = `http://127.0.0.1:8000/api/delete-contact/${id}`;
      await axios
        .delete(url)
        .then((response) => {
          if (response.data.code == 200) {
            alert(response.data.message);
            this.getContacts();
          }
        })
        .catch((error) => console.log(error));
    }
    return {
      contacts,
      getContacts,
      deleteContact,
    };
  },
  created() {
    this.getContacts();
  },
};
</script>
