Vue.createApp({
    data() {
      return {
        body: null,
        btn: null,
      };
    },
  
    mounted() {
      this.body = document.body;
      this.btn = document.querySelector('button');
    },
  
    methods: {
      toggleLight() {
        this.body.classList.toggle("dark");
        this.body.classList.toggle("light");
        this.btn.classList.toggle("good-night");
      },
  
      toggleTitle() {
        if (document.title === "Good Morning") {
          document.title = "Good Night";
        } else {
          document.title = "Good Morning";
        }
      },
    },
  }).mount("#app");
  
