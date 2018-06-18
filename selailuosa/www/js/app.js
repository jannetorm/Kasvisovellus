var kasvisovellus = angular.module("kasvisovellus", ["ionic", "ngRoute"]);





kasvisovellus.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
              .when("/kasvit12", {
                templateUrl : "templates/kasvit12.html"
            })
              .when("/kasvit34", {
                templateUrl : "templates/kasvit34.html"
            })
              .when("/kasvit56", {
                templateUrl : "templates/kasvit56.html"
            }) 
            .when("/haku", {
                templateUrl : "templates/haku.html"
            })
              .when("/puut_luokka1", {
                templateUrl : "templates/luokka1/puut_luokka1.html"
            })
               .when("/kasvit_luokka1", {
                templateUrl : "templates/luokka1/kasvit_luokka1.html"
            })
               .when("/marjat_luokka1", {
                templateUrl : "templates/luokka1/marjat_luokka1.html"
            })
            .when("/puut_luokka2", {
                templateUrl : "templates/luokka2/puut_luokka2.html"
            })
               .when("/kasvit_luokka2", {
                templateUrl : "templates/luokka2/kasvit_luokka2.html"
            })
               .when("/marjat_luokka2", {
                templateUrl : "templates/luokka2/marjat_luokka2.html"
            })
            .when("/puut_luokka3", {
                templateUrl : "templates/luokka3/puut_luokka3.html"
            })
               .when("/kasvit_luokka3", {
                templateUrl : "templates/luokka3/kasvit_luokka3.html"
            })
            .when("/puut_luokka4", {
                templateUrl : "templates/luokka4/puut_luokka4.html"
            })
               .when("/kasvit_luokka4", {
                templateUrl : "templates/luokka4/kasvit_luokka4.html"
            })
             .when("/kasvit_luokka5", {
                templateUrl : "templates/luokka5/kasvit_luokka5.html"
            })
             .when("/marjat_luokka5", {
                templateUrl : "templates/luokka5/marjat_luokka5.html"
      
            })
               .when("/kasvit_luokka6", {
                templateUrl : "templates/luokka6/kasvit_luokka6.html"
            })
               .when("/marjat_luokka6", {
                templateUrl : "templates/luokka6/marjat_luokka6.html"
            })
            .otherwise({
                templateUrl: "templates/kasvit12.html"
            });

});
