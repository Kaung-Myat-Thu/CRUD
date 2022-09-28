<template>
  <div class="mt-8 mx-auto px-4 md:px-0">
    <div class="mx-auto max-w-lg shadow-lg rounded-lg p-4">
      <div
        v-if="contact.errors.length"
        class="text-red-500 text-sm bg-red-50 rounded shadow p-2"
      >
        <ul class="ml-2">
          <li
            class="list-disc list-inside"
            v-for="(error, i) in contact.errors"
            :key="i"
          >
            {{ error }}
          </li>
        </ul>
      </div>
      <form class="w-full" @submit.prevent="saveContact" novalidate>
        <div class="my-2">
          <label>Name</label>
          <input
            v-model="contact.name"
            type="text"
            class="form-input capitalize w-full mt-2 rounded text-sky-700"
            placeholder="Eg. John Doe"
          />
        </div>
        <div class="my-2">
          <label>Email</label>
          <input
            v-model="contact.email"
            type="email"
            class="form-input w-full mt-2 rounded text-sky-700"
            placeholder="Eg. johndoe@gmail.com"
          />
        </div>
        <div class="my-2">
          <label>Designation</label>
          <input
            v-model="contact.designation"
            type="text"
            class="form-input w-full mt-2 rounded text-sky-700"
            placeholder="Eg. laravel developer"
          />
        </div>
        <div class="my-2">
          <label>Contact Number</label>
          <input
            v-model="contact.contact_no"
            type="tel"
            class="form-input w-full mt-2 rounded text-sky-700"
            placeholder="Eg. 999-999-9999"
          />
        </div>
        <button
          type="submit"
          class="w-full mt-2 bg-blue-500 rounded-md text-center text-white font-semibold py-2 hover:bg-blue-600 active:bg-blue-700"
        >
          Add Contact
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
export default {
  setup() {
    const contact = reactive({
      name: "",
      email: "",
      designation: "",
      contact_no: "",
      errors: [],
    });
    async function saveContact() {
      contact.errors = [];
      if (!contact.name) {
        contact.errors.push("Name is required");
      }
      if (!contact.email) {
        contact.errors.push("Email is required");
      }
      if (!contact.designation) {
        contact.errors.push("Designation is required");
      }
      if (!contact.contact_no) {
        contact.errors.push("Contact Number is required");
      }

      if (!contact.errors.length) {
        let formData = new FormData();
        formData.append("name", contact.name);
        formData.append("email", contact.email);
        formData.append("designation", contact.designation);
        formData.append("contact_no", contact.contact_no);

        let url = "http://127.0.0.1:8000/api/add-contact";
        await axios
          .post(url, formData)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              contact.name = "";
              contact.email = "";
              contact.designation = "";
              contact.contact_no = "";
              alert(response.data.message);
            }
          })
          .catch((err) => contact.errors.push(err.response));
      }
    }
    return {
      contact,
      saveContact,
    };
  },
};
</script>
