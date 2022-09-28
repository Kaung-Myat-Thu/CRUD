<template>
  <div class="mt-8 mx-auto px-4 md:px-0">
    <div class="mx-auto max-w-lg shadow-lg rounded-lg p-4">
      <div
        v-if="errors.length"
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
      <form @submit.prevent="updateContact" class="w-full" novalidate>
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
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contact: {},
      name: "",
      email: "",
      designation: "",
      contact_no: "",
      errors: [],
    };
  },
  methods: {
    async getContact() {
      let url = `http://127.0.0.1:8000/api/edit-contact/${this.$route.params.id}`;
      await axios.get(url).then((response) => {
        this.contact = response.data;
      });
    },

    async updateContact() {
      this.errors = [];
      if (!this.contact.name) {
        this.errors.push("Name is required");
      }
      if (!this.contact.email) {
        this.errors.push("Email is required");
      }
      if (!this.contact.designation) {
        this.errors.push("Designation is required");
      }
      if (!this.contact.contact_no) {
        this.errors.push("Contact Number is required");
      }

      if (!this.errors.length) {
        let formData = new FormData();
        formData.append("name", this.contact.name);
        formData.append("email", this.contact.email);
        formData.append("designation", this.contact.designation);
        formData.append("contact_no", this.contact.contact_no);

        let url = `http://127.0.0.1:8000/api/update-contact/${this.$route.params.id}`;
        await axios
          .post(url, formData)
          .then((response) => {
            if (response.status == 200) {
              alert(response.data.message);
            }
          })
          .catch((err) => this.errors.push(err.response));
      }
    },
  },
  created() {
    this.getContact();
  },
};
</script>
