import { createRouter, createWebHistory } from "vue-router";
import ContactList from "@/pages/ContactList";
import AddContact from "@/pages/AddContact";
import EditContact from "@/pages/EditContact";

const routes = [
  {
    name: "ContactList",
    path: "/",
    component: ContactList,
  },
  {
    name: "AddContact",
    path: "/add-contact",
    component: AddContact,
  },
  {
    name: "EditContact",
    path: "/contact/edit/:id?",
    component: EditContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
