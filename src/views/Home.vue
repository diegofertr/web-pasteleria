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
        <i class="fas el-icon-fa-angle-double-down landing-icon"></i>
      </span>
    </section>
    <section class="features">
      <div class="feature">
        <i class="fas el-icon-fa-utensils feature-icon"></i>
        <h3 class="feature-title">Repostería Casera</h3>
        <p class="feature-description">Elige tu repostería favorita (Por ejemplo, Tortas en su diversidad, Empanadas, Queques, Pan casero, Pan integral,...)</p>
      </div>
      <div class="feature">
        <i class="fas el-icon-fa-map-marker-alt feature-icon"></i>
        <h3 class="feature-title">Localización</h3>
        <p class="feature-description">En Pastelería Justi podrás elegir el lugar preferido para la entrega de las masitas.</p>
      </div>
      <div class="feature">
        <i class="fas el-icon-fa-clock feature-icon"></i>
        <h3 class="feature-title">Ahorra tiempo</h3>
        <p class="feature-description">Pastelería Justi te permite ahorrar tiempo y disfrutar de tus masitas preferidas según tus especificaciones, para una ocasión especial o a diario.</p>
      </div>
      <div class="feature">
        <i class="fas el-icon-fa-comments feature-icon"></i>
        <h3 class="feature-title">Basado en opiniones</h3>
        <p class="feature-description">Nuestra calidad y sabor está avalada por los comentarios de nuestros clientes.</p>
      </div>
    </section>
    <section class="comments">
      <h3 class="comments-title">Lo que dicen de nosotros</h3>
      <el-carousel indicator-position="outside" class="comments-carousel">
        <el-carousel-item v-for="item in comments" :key="item">
          <div class="comment">
            <h3 class="comment-name">{{ item.name }}</h3><small>{{ item.username }}</small>
            <p class="comment-content">{{ item.comment }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      comments: [{
        name: 'Mario',
        username: '@mrbqr',
        comment: 'Recomiendo ampliamente los pasteles, son muy deliciosos, con un sabor único y diferente'
      }, {
        name: 'Maddizon',
        username: '@maddi',
        comment: 'Hacen unos rollos de queso espectaculares, además sus tortas son riquísimas, una vez que los probé no puedo dejarlos jeje'
      }, {
        name: 'Fernando',
        username: '@fertr',
        comment: 'Los pasteles son de lo mejor, muy sabrosos, además de que la torta puede ser adornado a tu gusto'
      }]
    }
  },
  methods: {
    order () {
      this.$confirm('Para realizar tu pedido por favor inicia sesión con tu cuenta de gmail o facebook')
    }
  }
}
</script>

<style lang="scss">
.comments {
  background: #fff;
  padding-top: 50px;
}
</style>