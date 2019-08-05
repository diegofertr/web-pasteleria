import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import messages from '@/common/translations'

Vue.use(Vuei18n)

export default new Vuei18n({
  locale: 'es',
  messages
})
