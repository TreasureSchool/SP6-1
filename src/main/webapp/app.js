(function () {
    var app = angular.module("routingPersons", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
                .when("/all", {
                    templateUrl: "allPersons.html",
                    controller: function () {
                        this.persons = persons;
                        this.setPerson = function (person) {
                            currentPerson = person;
                        };
                    },
                    controllerAs: "personCtrl"
                })
                .when("/new", {
                    templateUrl: "newPerson.html",
                    controller: function () {
                        this.persons = persons;
                        addedPerson = {};
                        this.addPerson = function (person) {
                            addedPerson = person;
                            addedPerson.id = persons.length + 1;
                            persons.push(addedPerson);
                            addedPerson = {};
                        };
                    },
                    controllerAs: "newCtrl"
                })
                .when("/detail", {
                    templateUrl: "personDetails.html",
                    controller: function () {
                        this.person = currentPerson;
                    },
                    controllerAs: "detailCtrl"
                })
                .otherwise({
                    template: "<h1>Nothing has been selected</h1>"
                });
    });
    var persons = [
        {id: 1, name: "Jens", age: 18}
        , {id: 2, name: "Peter", age: 23}
        , {id: 3, name: "Hanne", age: 23}
    ];
    var currentPerson;
})();