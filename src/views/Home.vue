<template>
  <div>
    <section class="landing">
      <h1 class="landing-brand-h1">{{ $t('welcome.title') }}</h1>
      <h2 class="landing-brand-h2">{{ $t('welcome.slogan') }}</h2>
      <div class="landing-action-bar">
        <el-button @click="order">
          <i class="fas el-icon-fa-shipping-fast"></i>
          &nbsp;{{ $t('welcome.action_button') }}
        </el-button>
      </div>
      <div class="landing-video">
        <video autoplay="autoplay" muted="muted" loop="true" preload="auto">
          <source src="../assets/video/v-landing.mp4" type="video/mp4">
        </video>
      </div>
      <span class="landing-bottom-arrow">
        <i class="fas el-icon-fa-angle-double-down"></i>
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    order () {
      this.$confirm('Para realizar tu pedido por favor inicia sesión con tu cuenta de gmail o facebook')
    }
  }
}
</script>
