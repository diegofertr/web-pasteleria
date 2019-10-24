<template>
  <nav class="navbar">
    <div class="nav-brand">
      <a @click="$router.push('/')">
        <i class="fas el-icon-fa-birthday-cake"></i> {{ $t('navigation.title') }}
      </a>
    </div>
    <ul class="nav-items">
      <li>
        <a @click="$router.push('about')">
          <i class="fas el-icon-fa-users"></i> {{ $t('navigation.about') }}
        </a>
      </li>
      <li>
        <a class="link"
          href="https://wa.me/59167321079?text=Me%20gustaría%20saber%20el%20precio%20de%20las%20tortas"
          target="_blank">
          {{ $t('navigation.message') }} <i class="fab el-icon-fa-whatsapp"></i> {{ $t('navigation.contact') }}
        </a>
      </li>
      <li>
        <a @click="login">
          <i class="fas el-icon-fa-sign-in-alt"></i> {{ $t('navigation.login') }}
        </a>
      </li>
      <li>
        <a class="nav-button" @click="dev">
          <i class="fas el-icon-fa-cart-plus"></i>&nbsp;{{ $t('navigation.action_button') }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    dev () {
      this.$confirm('Para realizar tu pedido debes iniciar sesión con tu cuenta de gmail o facebook')
    },
    login () {
      this.$message('Iniciando sesión, espere un momento...')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/_font.scss";

.navbar {
  background-color: white;
  display: flex;
  grid-template-columns: 200px auto;
  align-items: center;
  justify-content: space-between;
  color: #777;
  // font-size: 14px;
  height: 50px;

  .nav-brand {
    font-size: 1.4em;
    color: #fff;
    display: flex;
    font-family: $fontFamilyPacifico;
    background-color: #f74815;
    height: inherit;
    align-items: center;
    padding: 0 10px;

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
  }

  .nav-items {
    list-style-type: none;
    padding: 5px;

    li {
      float: left;
      margin: 0 .8em;
      font-size: .9em;
      font-weight: 600;

      a {
        color: #777;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          color: #303133;
        }
      }

      a.nav-button {
        background: #f74815;
        color: white;
        border: 1px solid #d92a00;
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
