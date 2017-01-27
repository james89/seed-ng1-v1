(function() {

angular
    .module('audio-player-app')
    .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            template: '<h1>home!</h1>',
            controller: function() {
                console.log('Home Controller Online');
            }
        });
    };

})();