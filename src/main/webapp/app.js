(function(){
    var app = angular.module("routingPersons", ["ngRoute"]);
        app.config(function($routeProvider) {
            $routeProvider
            .when("/all", {
                templateUrl: "allPersons.html"
            })
            .when("/new", {
                templateUrl: "newPerson.html"
            })
            .otherwise({
                template : "<h1>None</h1><p>Nothing has been selected,</p>"
            });
    });
    var persons = [
        {id: 1,name: "Jens",age : 18}
        , {id: 2,name: "Peter",age : 23}
        , {id: 3,name: "Hanne",age : 23}
    ];
    app.controller("personCtrl", function() {
        this.person = persons;
        currentPerson = 0;
        this.personDetail = function(personId){
            this.currentPerson = personId;
        };
    });
    
    
})();