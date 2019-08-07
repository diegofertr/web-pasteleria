<template>
  <div>
    <p><small>traducciones con i18n</small></p>
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
    <el-divider></el-divider>
    <el-row>
      <el-button :plain="true" @click="open">Show message</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>

      <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      active: 0
    }
  },
  methods: {
    saludar () {
      this.$confirm('Hola mundo desde pastelería')
    },
    format (percentage) {
      return percentage === 100 ? 'Full' : `${percentage}%`
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    open () {
      this.$message('Este es un mensaje de aviso.')
    },
    openVn () {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('span', null, 'El mensaje puede ser  '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      })
    },
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
