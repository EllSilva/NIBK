import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home",
      jms: ""
    }
  },

  methods: {
    AA() { 
      let jms = 'A'; 
      window.localStorage.setItem("kim", jms )
			window.location.href = "#/vendas/detalhe"
    },

  BB() { 
      let jms = 'B';
      window.localStorage.setItem("kim", jms )
			window.location.href = "#/vendas/detalhe"
    },


  },

  async mounted() {

 

  },
  template: await get_template('./assets/js/view/home/home')
}