
var nav = new Vue({
  el: '#fake-nav',
  methods: {
    open: function(which, e) {
      e.preventDefault();
      modal.active = which;
      console.log(modal.active);
    },
  }
});

var modal_submit_login = 'Login';
var user = 'Anonymous';

var modal = new Vue({
  el: '#login-modal',
  data: {
    active: null,
    submitted: null,

    loginSubmit: modal_submit_login,
    loginUser: '',
  },
  methods: {
    close: function(e) {
      e.preventDefault();
      if (e.target === this.$el) {
        this.active = null;
      }
    },
    submit: function(which, e) {

      user = document.getElementById('username').value;
      document.getElementById('hello').innerText = `Hi, ${user}!`;
      document.getElementById('hello').style.display = "block";
      modal.active = null;


    }
  }
});


var someVue = new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { user: '', name: '', description: '', date: '' },
    events: []
  },

  // Anything within the ready function will run when the application loads
  mounted: function() {
    // When the application loads, we want to call the method that initializes
    // some data
    this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {
    // We dedicate a method to retrieving and setting some data
    fetchEvents: function() {

      var events = [];

      $.ajax({
        type:"GET",
        url: "https://hidden-retreat-66994.herokuapp.com/AllEvents",
        datatype: 'jsonp',
        sucess: function(response){
          console.log(response);
          events.push(response);
        }
      });

      // Set the collection of events
      this.events = events;

    },

    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.name) {
        this.event.user = user;
        this.events.push(this.event);

        $.post("https://hidden-retreat-66994.herokuapp.com/PutEvent", {
            name: this.event.name,
            user: this.event.user,
            description: this.event.description,
            date: this.event.date,
        });

        this.event = { name: '', user: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        // $remove is a Vue convenience method similar to splice
        this.events.splice(index, 1);
      }
    }
  }
});