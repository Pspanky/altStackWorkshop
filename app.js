// SCROLL DOWN FOR DIRECTIONS

var user;
document.addEventListener('DOMContentLoaded', function() {
 var loggedInUser = localStorage.getItem('username');
 if (loggedInUser != null ){
   document.getElementById('hello').innerText = `Hi, ${loggedInUser}!`;
   document.getElementById('hello').style.display = 'block';
   user = loggedInUser;
 }
 else{
   user = 'Anonymous';
 }
}, false);

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
// var user = 'Anonymous';

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
      localStorage.setItem('username', user);
      document.getElementById('hello').innerText = `Hi, ${user}!`;
      document.getElementById('hello').style.display = "block";
      modal.active = null;


    }
  }
});

var eventsPage = new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { user: '', name: '', description: '', date: '' },
    events: []
  },

  // Anything within the mounted function will run when the application loads
  mounted: function() {
    this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {
    fetchEvents: function() {
  var events = [];
  this.events = events;
},addEvent: function() {
  if(this.event.name) {
    this.event.user = user;
    // ADD CODE BELOW
    // push the event to this.events below!

    this.event = { name: '', user: '', description: '', date: '' };
  }
},
  }
});
