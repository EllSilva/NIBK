import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home",
      jms: "todos",
      todos: true,
      webX: false,
      appX: false,
      psdX: false,
      portifolio: true,
      n_site: null,
      kim: "kim0",
      teste: "teste0",
      joferbino: "joferbino0",
      doar: "doar0",
      kim: "A",
    }

  },

  methods: {
    kim() {
    },

    todas() {
      this.jms = "todos",
        this.todos = true,
        this.webX = false,
        this.appX = false,
        this.psdX = false
    },

    AA() {
      this.jms = "A",
        this.todos = false,
        this.webX = true,
        this.appX = false,
        this.psdX = false
    },

    BB() {
      this.jms = "B",
        this.todos = false,
        this.webX = false,
        this.appX = true,
        this.psdX = false
    },

    CC() {
      this.jms = "C",
        this.todos = false,
        this.webX = false,
        this.appX = false,
        this.psdX = true
    },
  },

  async mounted() {

    this.jms = localStorage.getItem("kim");
    console.log(jms)
    alert(jms)
 
  },
  template: await get_template('./assets/js/view/servicos/detalhe')
}
