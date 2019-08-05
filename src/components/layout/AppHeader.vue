<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="$router.push('/')">
      <i class="fas el-icon-fa-home"></i> Inicio
    </el-menu-item>
    <el-menu-item index="2" @click="$router.push('about')">
      <i class="fas el-icon-fa-users"></i>
      Nosotros
    </el-menu-item>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">
      <a
        class="link"
        href="https://wa.me/59176268647?text=Me%20gustaría%20saber%20el%20precio%20de%20las%20tortas"
        target="_blank"
      >
        ¿Dudas o presupuestos?
        <i class="fab el-icon-fa-whatsapp"></i>
        +59176268647
      </a>
    </el-menu-item>
    <el-menu-item index="5">
      <el-button type="primary" @click="dev">
        <i class="fas el-icon-fa-terminal" style="color:white"></i>
        Conviértete en Desarrollador
      </el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    dev() {
      this.$confirm("Para convertirte en desarrollador debes estudiar mucho");
    }
  }
};
</script>

<style lang="scss">
.link {
  text-decoration: none;
}
</style>
