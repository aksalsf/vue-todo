import { createApp } from "vue";

import Toaster from "@meforma/vue-toaster";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";

library.add(faTrash, faCheck);

const app = createApp(App);

app.use(Toaster, {
  position: "top",
  queue: true,
  duration: 3 * 1000,
});

app.component("fa", FontAwesomeIcon);

app.mount("#app");
