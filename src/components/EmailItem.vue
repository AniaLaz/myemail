<template>
  <div class="email">
    <div class="emailContent">
      <div>
        <div><strong>Назва:</strong>{{ text }}</div>
        <div><strong>Телефон:</strong>{{ phone }}</div>
        <div><strong>e-mail:</strong>{{ email.email }}</div>
        <my-button class="btnDalite" @click="$emit('remove', email)"
          >Стерти
        </my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      tipe: Object,
      required: true,
    },
    text: {
      tipe: String,
      default: "",
    },
    phone: {
      tipe: String,
      default: "",
    },
  },
  methods: {},
};
</script>

<style scoped>
.email {
  display: block;
  padding: 15px;
  border: 2px solid teal;
  text-align: left;
  max-width: 100%;
  margin-bottom: 10px;
}
@media screen and (min-width: 768px) {
  .email {
    display: flex;
    width: 40%;
  }
}
.email__btns {
  display: flex;
}
.btnDalite {
  margin-top: 120px;
  margin-left: 15px;
}
.emailContent {
  display: flex;
}
</style>
