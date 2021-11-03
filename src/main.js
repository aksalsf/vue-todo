import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

library.add(faTrash, faCheck);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
