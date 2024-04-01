<script lang="ts">
import { defineComponent } from "vue";
import liff from "@line/liff";
export default defineComponent({
  data() {
    return {
      LineUserData: null,
    };
  },
  async mounted() {
    await this.initLiff();
    liff
      .sendMessages([
        {
          type: "text",
          text: "Hello, World!",
        },
      ])
      .then(() => {
        console.log("send");
      });
  },
  methods: {
    async initLiff() {
      await liff.init({
        liffId: import.meta.env.VITE_LIFF_ID,
      });
      if (!liff.isLoggedIn) {
        liff.login();
      }
      liff
        .getProfile()
        .then((res) => {
          this.LineUserData = res;
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
</script>
<template>
  <div class="main">
    <template v-if="LineUserData">
      <h3>{{ LineUserData.userId }}</h3>
      <h4>{{ LineUserData.displayName }}</h4>
      <h4>{{ LineUserData.pictureUrl }}</h4>
    </template>
      <h1>林俊陞好臭</h1>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
