import { createApp } from "vue";
import VConsole from "vconsole"
import App from "./App.vue";
import "dotenv"
const isPc = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

if (import.meta.env.mode !== "development" && !isPc()) {
  const vConsole = new VConsole();
}

const app = createApp(App);
app.mount("#app");
