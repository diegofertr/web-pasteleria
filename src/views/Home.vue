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
      <h3 class="comments-title">Lo que dicen de nosotros</h3>
      <div class="carousel-section">
        <el-carousel height="400px" direction="horizontal" :interval="5000" arrow="always">
          <el-carousel-item v-for="item in comments" :key="item.name">
            <div class="carousel-comment-item">
              <div class="item-client">
                <div class="avatar-client">
                  <el-avatar :size="60" :src="item.urlImage"></el-avatar><br>
                </div>
                <span>{{ item.name }} - <strong>{{ item.username }}</strong></span>
              </div>
              <p class="item-comment">
                {{ item.comment }}
              </p>
              <i class="fas el-icon-fa-quote-left comment-icon"></i>
            </div>
          </el-carousel-item>
        </el-carousel>
        <!-- <agile class="thumbnails" :options="options">
          <div class="comment-card" v-for="item in comments" :key="item.name">
            <p class="comment-card-description">"{{ item.comment }}"</p>
            <div class="comment-card-user">
              <el-avatar :size="30" :src="item.urlImage"></el-avatar>
              <span>{{ item.name }} - <strong>{{ item.username }}</strong></span>
            </div>
          </div>
          <template slot="prevButton"><i class="fas el-icon-fa-chevron-left"></i></template>
          <template slot="nextButton"><i class="fas el-icon-fa-chevron-right"></i></template>
        </agile> -->
      </div>
    </section>
    <section class="sponsors">
      <h3 class="sponsors-title">Aliados</h3>
    </section>
    <section class="footer">
      <el-footer>
        <h3>Footer</h3>
        <p>{{ new Date().getFullYear() }} &copy; Diego F. Ticona Ramos</p>
      </el-footer>
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
            // navButtons: true,
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
        urlImage: 'https://www.invitartes.com/wp-content/uploads/2016/05/invitartes-perfil-linkedin.jpg',
        username: '@mrbqr',
        comment: 'Recomiendo ampliamente los pasteles, son muy deliciosos, con un sabor único y diferente'
      }, {
        name: 'Eulalia',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwR4SRAqKXfOMsz3ofIUhxtEQDiFtdnBR4CXv89VhorsC9nm8&s',
        username: '@eulis',
        comment: 'Hacen unos rollos de queso espectaculares, además sus tortas son riquísimas, una vez que los probé no puedo dejarlos jeje'
      }, {
        name: 'Fernando',
        urlImage: 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg',
        username: '@fertr',
        comment: 'Los pasteles son de lo mejor, muy sabrosos, además de que la torta puede ser adornado a tu gusto'
      }, {
        name: 'Joaquin',
        urlImage: 'https://files.paredro.com/uploads/2016/12/RETRATOS-01.jpg',
        username: '@juaco',
        comment: 'Muy deliciosoooooos'
      }, {
        name: 'Carla',
        urlImage: 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/07/25/Recortada/img_msanoja_20160801-194152_imagenes_lv_getty_istock_77607221_small-k0hH--656x437@LaVanguardia-Web.jpg',
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
  margin: 0 120px;
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

.agile__list {
  padding: 3rem 0;
}

.comment-card {
  background: rgba($color: white, $alpha: 0.6);
  padding: .8rem;
  margin: 0 .5rem;
  // width: 300px !important;
  border-radius: 5px;
  box-shadow: 0 1px 3px #cacaca;

  .comment-card-description {
    font-style: italic;
    padding: 2px 10px;
  }

  .comment-card-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;

    span {
      font-size: .7rem;
    }
  }
}

.el-carousel__item {
  // background: rgba($color: red, $alpha: 0.3);
  display: grid;
  justify-items: center;
  align-content: center;
}

.carousel-comment-item {
  display: grid;
  justify-items: center;
  padding: 10px;
  width: 800px;
  height: 170px;

  background: #fafafa;
  // background-image: url('../assets/img/backg.jpg');
  border: 1px solid #ff7300;
  border-radius: 15px;
  box-shadow: 0 1px 8px #ff7300;
  position: relative;

  .item-client {
    display: grid;
    justify-items: center;
    align-content: center;
    position: absolute;
    top: -40px;
    z-index: 10;
    
    .avatar-client {
      display: grid;
      justify-items: center;
      align-content: center;
      background: white;
      // position: relative;
      // z-index: 10;
      border: 2px solid #ff7300;
      height: 70px;
      width: 70px;
      line-height: 60px;
      border-radius: 50%;
    }
  }

  .item-comment {
    margin-top: 100px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    font-size: 1.1rem;
  }

  .comment-icon {
    position: absolute;
    color: #ff7300;
    top: -30px;
    left: 40px;
    font-size: 2.8rem;
  }
}
</style>
