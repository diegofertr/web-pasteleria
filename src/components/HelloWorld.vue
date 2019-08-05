<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary" @click="saludar">Primary (saludar)</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <p>Custom icons</p>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-data-analysis"></i>
      <el-button type="primary" icon="el-icon-search">Search</el-button>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <p>Font Awesome icons</p>
      <p>
        Ó síguenos en <i class="fab el-icon-fa-facebook"></i>
        <i class="fas el-icon-fa-thumbs-down"></i>
        <i class="fas el-icon-fa-thumbs-up"></i>
        <i class="fas el-icon-fa-users"></i>
        <i class="fas el-icon-fa-icons"></i>
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
      activeIndex: "1"
    };
  },
  methods: {
    saludar() {
      this.$confirm("Hola mundo desde pastelería");
    },
    format(percentage) {
      return percentage === 100 ? "Full" : `${percentage}%`;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
