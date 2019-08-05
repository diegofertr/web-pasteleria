<template>
  <nav class="navbar">
    <div class="nav-brand">
      <!-- Home -->
      <a href="#" @click="$router.push('/')">
        <i class="fas el-icon-fa-home"></i> Home
      </a>
    </div>
    <ul class="nav-items">
      <li>
        <a href="#" @click="$router.push('about')">
          <i class="fas el-icon-fa-users"></i> Nosotros
        </a>
      </li>
      <li>
        <a
          class="link"
          href="https://wa.me/59176268647?text=Me%20gustaría%20saber%20el%20precio%20de%20las%20tortas"
          target="_blank"
        >
          ¿Dudas o presupuestos?
          <i class="fab el-icon-fa-whatsapp"></i>
          +59176268647
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fas el-icon-fa-sign-in-alt"></i> Inicia sesión
        </a>
      </li>
      <li>
        <!-- <a class="nav-button" @click="dev">
          <i class="fas el-icon-fa-code"></i>
          Se desarrollador
        </a> -->
        <a class="nav-button" @click="dev">
          <i class="fas el-icon-fa-utensils"></i>
          &nbsp;Se cocinero Chefly
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    dev () {
      this.$confirm('Para convertirte en chef debes practicar mucho')
    }
  }
}
</script>

<style lang="scss">
.navbar {
  background-color: white;
  display: grid;
  grid-template-columns: 200px auto;
  justify-content: space-between;
  align-items: center;
  color: #777;
  font-size: 14px;
  font-weight: 500;

  .nav-brand {
    margin-left: 30px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .nav-items {
    list-style-type: none;
    padding: 5px;

    li {
      float: left;
      margin: 0 10.5px;

      a {
        color: #777;
        text-decoration: none;

        &:hover {
          color: #303133;
        }
      }

      a.nav-button {
        background: #f74815;
        color: white;
        border-color: #d92a00;
        padding: 0.5em;
        font-size: 1em;
        border-radius: 2px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        cursor: pointer;

        i {
          color: #fff;
        }

        &:hover {
          background: #d92a00;
          color: white;
        }
      }
    }
  }
}
</style>
