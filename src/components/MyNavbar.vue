<template>
  <heder class="navbar">
    <img
      class="logo"
      src="../imeges/lazarenko.png"
      width="60"
      alt="Ania Lazarenko"
      @click="$router.push('/')"
    />
    <div class="navbar__btns">
      <my-button class="navbar__btn left" @click="$router.push('/about')"
        >Про мене</my-button
      >
    </div>
  </heder>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap");
.navbar {
  padding: 30px;
  height: 50px;

  box-shadow: 2px 2px 4px rgb(77, 78, 75);
  display: flex;
  align-items: center;
}
.navbar__btns {
  margin-left: auto;
}
.navbar__btn {
  font-family: "Caveat", cursive;
  font-size: 14px;
  padding: 5px 10px;
}
@media screen and (min-width: 768px) {
  .navbar__btn {
    padding: 10px 15px;
    font-size: 18px;
  }
}

.left {
  margin-left: 5px;
}
@media screen and (min-width: 768px) {
  .left {
    margin-left: 20px;
  }
}
.logo {
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1)
}
.logo:hover {
  transform: translate(2px, 5%);
}
</style>

<!-- background: linear-gradient(135deg,rgb(2, 87, 23), orange 60%, cyan); -->
