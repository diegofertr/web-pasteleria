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
    <section class="features" id="features">
      <div class="feature">
        <i class="fas el-icon-fa-utensils feature-icon"></i>
        <h3 class="feature-title">Comida Casera</h3>
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
      <h3 class="comments-title">Lo que dicen de nosotros</h3> <br>
      <div class="carousel-section">
        <agile class="thumbnails" :options="options">
          <el-card class="box-card" v-for="item in comments" :key="item.name">
            <div class="text item">
              <div>
                <el-avatar :size="80" :src="item.urlImage"></el-avatar><br>
                <small><strong>{{ item.username}}</strong></small>
              </div>
              <p>{{ item.comment }}</p>
            </div>
          </el-card>
          <!-- botones de navegacion carousel -->
          <template slot="prevButton"><i class="fas el-icon-fa-chevron-left"></i></template>
          <template slot="nextButton"><i class="fas el-icon-fa-chevron-right"></i></template>
        </agile>
      </div>
    </section>
    <section class="sponsors">
      <h3 class="sponsors-title">Aliados</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      options: {
        autoplay: true,
        autoplaySpeed: 6000,
        centerMode: true,
        dots: false,
        navButtons: false,
        responsive: [{
          // para celulares de 0 a 600px
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }, {
          // para resoluciones mayores a 900
          breakpoint: 900,
          settings: {
            navButtons: true,
            slidesToShow: 3
          }
        }, {
          // resoluciones mayores a 1200
          breakpoint: 1200,
          settings: {
            slidesToShow: 4
          }
        }]
      },
      comments: [{
        // COMENTARIOS QUE PUEDEN SER OBTENIDOS CON FIREBASE DE LOS USUARIOS REGISTRADOS
        name: 'Mario',
        urlImage: 'https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men.png',
        username: '@mrbqr',
        comment: 'Recomiendo ampliamente los pasteles, son muy deliciosos, con un sabor único y diferente'
      }, {
        name: 'Eulalia',
        urlImage: 'https://img2.freepng.es/20180403/eqe/kisspng-computer-icons-teacher-clip-art-avatar-5ac3db46122e89.4817606315227850940745.jpg',
        username: '@eulis',
        comment: 'Hacen unos rollos de queso espectaculares, además sus tortas son riquísimas, una vez que los probé no puedo dejarlos jeje'
      }, {
        name: 'Fernando',
        urlImage: 'https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men.png',
        username: '@fertr',
        comment: 'Los pasteles son de lo mejor, muy sabrosos, además de que la torta puede ser adornado a tu gusto'
      }, {
        name: 'Joaquin',
        urlImage: 'https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men.png',
        username: '@juaco',
        comment: 'Muy deliciosoooooos'
      }, {
        name: 'Carla',
        urlImage: 'https://img2.freepng.es/20180403/eqe/kisspng-computer-icons-teacher-clip-art-avatar-5ac3db46122e89.4817606315227850940745.jpg',
        username: '@carly',
        comment: 'Son de muy buena calidad, comparable a las grandes marcas del país, buen futuro, sigan adelante :)'
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
  // background: #fff;
  padding-top: 100px;
}

.comment {
  // max-width: 400px;
  color: white;
  background: #333;
  max-width: 1000px !important;
  margin: 0 10px;
  padding: 10px
}

.scrolling-wrapper {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;

  .card {
    display: inline-block;
  }
}

.carousel-section {
  margin: 0 200px;
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 450px;
  justify-content: center;
}

.box-card {
  // background: #fafafa;
  border: 1px solid #cacaca;
  width: 300px !important;
  border-radius: 10px;
  margin: 0 5px;
}
</style>
