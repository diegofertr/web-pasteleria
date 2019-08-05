<template>
  <div class="hello">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    </el-menu>
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary" @click="saludar">Primary (saludar)</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-divider>
    </el-divider>
    <el-row>
      <p>Custom icons</p>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-data-analysis"></i>
      <el-button type="primary" icon="el-icon-search">Search</el-button>
    </el-row>
    <el-divider>
    </el-divider>
    <el-row>
      <p>Font Awesome icons</p>
      <p>
        Ó síguenos en <i class="fab el-icon-fa-facebook"></i>
        <i class="fas el-icon-fa-thumbs-down"></i>
        <i class="fas el-icon-fa-thumbs-up"></i>
        <i class="fas el-icon-fa-users"></i>
        <i class="fas el-icon-fa-icons"></i>
      </p>
      <p>
        <i class="fas el-icon-fa-check"></i>
        ¿Dudas o presupuestos? <i class="fab el-icon-fa-whatsapp"></i> +59176268647
      </p>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </el-row>
    <el-divider></el-divider>
    <el-row>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    saludar() {
      this.$confirm("Hola mundo desde pastelería");
    },
    format(percentage) {
      return percentage === 100 ? 'Full' : `${percentage}%`;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
