import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import axiosUtil from "./http/axiosUtil";
import "./theme/index.css";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlaneDeparture,
  faUserAlt,
  faHammer,
  faGlobeEurope,
  faHotel,
  faShip,
  faMapMarkedAlt,
  faUmbrellaBeach,
  faCar,
  faPercentage,
  faGift,
  faMobile,
  faListAlt,
  faRoute,
  faPhone,
  faSearch,
  faMapMarkerAlt,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFontAwesome,
  faFacebook,
  faTwitter,
  faLinkedin,
  faVimeo,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPlaneDeparture,
  faUserAlt,
  faHammer,
  faGithub,
  faFontAwesome,
  faGlobeEurope,
  faHotel,
  faShip,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faUmbrellaBeach,
  faCar,
  faPercentage,
  faGift,
  faMobile,
  faListAlt,
  faRoute,
  faFacebook,
  faTwitter,
  faLinkedin,
  faVimeo,
  faYoutube,
  faInstagram,
  faPhone,
  faSearch,
  faHome
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(ElementUI, { locale });
Vue.use(VueCookies);
Vue.prototype.$axiosUtil = axiosUtil;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
