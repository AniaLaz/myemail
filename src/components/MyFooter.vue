<template>
  <footer class="footer">
    <img
      class="logo"
      src="../imeges/Logo_min.png"
      width="100"
      alt="Ania Lazarenko"
      @click="$router.push('/')"
    />
    <div class="footer-info">
      <ul class="list">
        <li class="footer-address-city">м. Львів</li>
        <li class="footer-item">
          <a
            href="mailto:lazarenko.ania.sg@gmail.com"
            class="link footer-address-contact"
            >lazarenko.ania.sg@gmail.com</a
          >
        </li>
        <li class="footer-item">
          <a href="tel:+380967419449" class="link footer-address-contact"
            >+38 096 741 94 49</a
          >
        </li>
      </ul>
      <div class="add">
        <p>Приєднуйтесь</p>
        <a
          target="_blank"
          href="https://www.facebook.com/ania.kryghevych"
          class="join-link f"
        >
          <svg class="join-icon" width="20" height="20">
            <use href="../imeges/icons.svg#icon-facebook"></use>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ania_kr5/"
          class="join-link i"
        >
          <svg class="join-icon" width="20" height="20">
            <use href="../imeges/icons.svg#icon-instagram"></use>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  padding: 15px;
  min-height: 100px;
  background: linear-gradient(135deg, rgb(2, 87, 23), orange 60%, rgb(3, 59, 28));
  box-shadow: 2px 2px 4px rgb(77, 78, 75);
  display: flex;
  align-items: center;

  max-width: 1200px;
  margin-top: 80px;
}
.footer-info {
  display: block;
padding-left: 30px;
}

@media screen and (min-width: 768px) {
.footer-info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  }
}
@media screen and (min-width: 1200px) {
.footer-info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  }
}
.list {
  color: white;
  list-style-type: none;
  padding-left: 0;
}
.join-link {
  display: inline-flex;

  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  align-items: center;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 7px;
  &:hover {
    fill: white;
    background-color: teal;
  }
}
.f {
  margin-right: 10px;
}
.add {
  margin-left: auto;
  color: white;
}

.join-icon {
  fill: white;
}
.footer-address-city {
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-address-contact {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-item {
  margin-top: 9px;
}

.footer-address-city:hover,
.footer-address-city:focus,
.footer-address-contact:hover,
.footer-address-contact:focus {
  color: white;
}
</style>
