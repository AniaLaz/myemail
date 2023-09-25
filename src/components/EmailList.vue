<template>
  <div class="conteaner" v-if="emails.length > 0 && !isLoading">
    <transition-group name="email-list">
      <email-item
        class="list"
        v-for="email in emails"
        :email="email"
        :text="email.text"
        :phone="email.phone"
        :key="email._id"
        @remove="$emit('remove', email)"
      />
    </transition-group>
  </div>
  <h3 v-else style="color: red">В тебе немає листів!</h3>
</template>

<script>
import EmailItem from "./EmailItem.vue";
export default {
  components: { EmailItem },
  props: {
    emails: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.list {
  display: inline-flex;
}
.email-list-item {
  display: inline-block;
  margin-right: 10px;
}
.email-list-enter-active,
.email-list-leave-active {
  transition: all 0.5s ease;
}
.email-list-enter-from,
.email-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.email-list-move {
  transition: transform 0.4s ease;
}
</style>
