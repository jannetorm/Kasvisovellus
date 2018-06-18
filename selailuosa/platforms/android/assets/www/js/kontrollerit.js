kasvisovellus.controller("kasvisovCtrl", function ($scope, $http, $ionicPopup, $ionicSideMenuDelegate, $state, $window, $route) {
    
    
     $http.get("data/luokka1/kasvit.json").then(function (response) {
        
       var kasvit = response.data;

        $scope.kasvit = kasvit;
        
    });
    
    
        
    $http.get("data/luokka1/marjat.json").then(function (response) {
        
       var marjat = response.data;

        $scope.marjat = marjat;
        
    });
    
    
      $http.get("data/luokka1/puut.json").then(function (response) {
        
       var puut = response.data;

        $scope.puut = puut;
        
    });
    
         $http.get("data/luokka2/kasvit2.json").then(function (response) {
        
       var kasvit2 = response.data;

        $scope.kasvit2 = kasvit2;
        
    });
    
    
        
    $http.get("data/luokka2/marjat2.json").then(function (response) {
        
       var marjat2 = response.data;

        $scope.marjat2 = marjat2;
        
    });
    
    
      $http.get("data/luokka2/puut2.json").then(function (response) {
        
       var puut2 = response.data;

        $scope.puut2 = puut2;
        
    });
    
     $http.get("data/luokka3/kasvit3.json").then(function (response) {
        
       var kasvit3 = response.data;

        $scope.kasvit3 = kasvit3;
        
    });

      $http.get("data/luokka3/puut3.json").then(function (response) {
        
       var puut3 = response.data;

        $scope.puut3 = puut3;
        
    });
    
      $http.get("data/luokka4/kasvit4.json").then(function (response) {
        
       var kasvit4 = response.data;

        $scope.kasvit4 = kasvit4;
        
    });

      $http.get("data/luokka4/puut4.json").then(function (response) {
        
       var puut4 = response.data;

        $scope.puut4 = puut4;
        
    });
    
    $http.get("data/luokka5/kasvit5.json").then(function (response) {
        
       var kasvit5 = response.data;

        $scope.kasvit5 = kasvit5;
        
    });
    
       $http.get("data/luokka5/marjat5.json").then(function (response) {
        
       var marjat5 = response.data;

        $scope.marjat5 = marjat5;
        
    });
    
      $http.get("data/luokka6/kasvit6.json").then(function (response) {
        
       var kasvit6 = response.data;

        $scope.kasvit6 = kasvit6;
        
    });

      $http.get("data/luokka6/marjat6.json").then(function (response) {
        
       var marjat6 = response.data;

        $scope.marjat6 = marjat6;
        
    });
    
    
      $http.get("data/kaikki/kaikki_kasvit.json").then(function (response) {
        
       var kaikki_kasvit = response.data;

        $scope.kaikki_kasvit = kaikki_kasvit;
        
    });

    
      $scope.naytaMenu = function () {
        
      $ionicSideMenuDelegate.toggleLeft();
        
    };
    
    

    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

   $scope.toggle2 = function() {
        $scope.myVar2 = !$scope.myVar2;
    };
        $scope.toggle3 = function() {
        $scope.myVar3 = !$scope.myVar3;
    };

   $scope.toggle4 = function() {
        $scope.myVar4 = !$scope.myVar4;
    };
    $scope.toggle5 = function() {
        $scope.myVar5 = !$scope.myVar5;
    };

   $scope.toggle6 = function() {
        $scope.myVar6 = !$scope.myVar6;
    };
    
    $scope.takaisin = function(){

$window.history.back();

};


    
  /*    
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){

        this.classList.toggle("active");

   
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}  
    
    
    
 
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
    

  $scope.groups = [];
  for (var i=0; i<1; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  

   * if given group is the selected group, deselect it
   * else, select the given group
 
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
  */

    
    });