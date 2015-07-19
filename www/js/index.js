var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        navigator.splashscreen.hide();
        document.getElementById("console").innerHTML = "<p>User Agent: " + navigator.userAgent + "</p>";
    }
};
