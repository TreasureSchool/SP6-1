(function(){
    var app = angular.module("routingPersons", ["ngRoute"]);
        app.config(function($routeProvider) {
            $routeProvider
            .when("/all", {
                templateUrl: "allPersons.html",
                controller: "personController as personCtrl"
            })
            .when("/new", {
                templateUrl: "newPerson.html",
                controller: "personController as personCtrl"
            })
            .when("/detail", {
                templateUrl: "personDetails.html",
                controller: "personController as personCtrl"
            })
            .otherwise({
                template : "<p>Nothing has been selected,</p>"
            });
    });
    var detailId = 0;
    var persons = [
        {id: 1,name: "Jens",age : 18}
        , {id: 2,name: "Peter",age : 23}
        , {id: 3,name: "Hanne",age : 23}
    ];
    app.controller("personCtrl", function() {
        this.person = persons;
        addedPerson = {};
        this.personDetail = function(personId){
            detailId = personId;
        };
        this.getDetails = function(){
            return detailId;
        };
        this.addPerson = function(person){
            addedPerson = person;
            addedPerson.id = persons.length() + 1;
            persons.push(addedPerson);
            addedPerson = {};
        };
    });
    
    
})();