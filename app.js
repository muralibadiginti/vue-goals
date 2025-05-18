const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = 'Max';
      } else {
        this.fullname = value + 'Max';
      }
    }
  },
  computed: {
    // fullname() {
    //   if (this.name === '') {
    //     this.name = 'max';
    //   } else {
    //     this.name = this.name + ' ' + 'Max'
    //   }
    //   return this.name
    // },
  },
  methods: {
    outputFullName() {
      return this.name + '' + 'Murali'
    },
    setName(event) {
      this.name = event.target.value
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    }
    ,
    signUpForm(event) {
      // event.preventDefault();
      alert('Form submitted!!!')
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
