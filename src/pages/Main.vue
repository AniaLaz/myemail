<template>
  <div class="main">
    <my-hero @click="update" />
    <BoxContainer>
      <div class="mail">
        <h1>Мої листи</h1>
        <EmailList :emails="emails" @remove="removeEmail" :isLoading="isLoading"/>
      </div>
    </BoxContainer>
  </div>
</template>

<script>
import EmailList from "@/components/EmailList.vue";
import MyHero from "@/components/MyHero";
import axios from "axios";
import BoxContainer from "@/components/shared/BoxContainer";
export default {
  name: "my-main",
  data() {
    return {
      emails: [],
      isLoading: false,
    };
  },
  components: {
    BoxContainer,
    MyHero,
    EmailList,
  },
  methods: {
    async fetchEmails() {
      console.log("fetch");
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://backend-photoal-98ep.onrender.com/api/emails"
        );
        this.emails = response.data;
        console.log("fetchEmails", response.data);
      } catch (error) {
        alert(error.message);
      } finally {
        this.isLoading = false;
      }
    },

    update() {
      this.fetchEmails();
    },

    removeEmail(email) {
      this.emails = this.emails.filter((p) => p._id !== email._id);
      this.removeEmails(email);
      console.log("email1", email._id);
    },

    async removeEmails(email) {
      console.log("remove");
      console.log(console.log("email2", email._id));
      try {
        await axios.delete(
          `https://backend-photoal-98ep.onrender.com/api/emails/${email._id}`
        );
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.fetchEmails();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
h2 {
  color: teal;
  margin-top: 0;
}
.main {
  text-align: center;
}
.text {
  font-family: "Caveat", cursive;
  text-align: justify;
  margin: 0 10px 0 0;
  padding-left: 5px;
  font-size: 17px;
  line-height: 0.9;
}
@media screen and (min-width: 768px) {
  .text {
    margin-bottom: 20px;
    font-size: 30px;
    margin: 0 20px 0 0;
    padding-left: 30px;
  }
}
</style>
