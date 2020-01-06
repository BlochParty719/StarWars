const app = angular.module('MyApp', [])

app.controller('starwarsController', ['$http', function($http){
  const controller = this
  this.indexOfEditFormToShow = null
  this.loggedInUser = false

  this.appName = "StarWars"
  this.movies = []
  this.baseURL = 'http://omdbapi.com/?'
  this.apikey = 'apikey=' + 'd43fb363'
  this.query = 't='
  this.Title = ''
  this.Poster = ''
  this.Actors = ''
  this.Runtime = ''
  this.Plot = ''
  this.searchURL = this.baseURL + this.apikey + '&' + this.query

this.getStarWars = function(){
  $http({
    method:'GET',
    url:'/StarWars'
  }).then(function(response){
    controller.StarWars = response.data;
  })
}

$http({
  method:'GET',
  url:'/session'
}).then(function(response){
  if(response.data.username){
    controller.loggedInUser = response.data;
  }
})

this.signup = function(){
  $http({
    url:'/users',
    method:'POST',
    data: {
      username: this.signupUsername,
      password: this.signupPassword
    }
  }).then(function(response){
    controller.loggedInUser = response.data
  })
}

this.login = function(){
  $http({
    url:'/session',
    method:'POST',
    data: {
      username: this.loginUsername,
      password: this.loginPassword
    }
  }).then(function(response){
    if(response.data.username){
      controller.loggedInUser = response.data
    } else {
      controller.loginUsername = null
      controller.loginPassword = null
    }
  })
}

this.logout = function(){
  $http({
    url:'/session',
    method:'DELETE'
  }).then(function(){
    controller.loggedInUser = false
  })
}

this.deleteStarWars = function(StarWars){
  $http({
    method:'DELETE',
    url:'/StarWars'
  }).then(function(response){
    controller.getStarWars();
  })
}

this.editStarWars = function(StarWars){
  $http({
    method:'PUT',
    url:'/StarWars',
    data: {
      this.Title = ''
      this.Poster = ''
      this.Actors = ''
      this.Runtime = ''
      this.Plot = ''
    }
  }).then(function(response){
    controller.getStarWars();
    controller.indexOfEditFormToShow = null;
  })
}

this.createStarWars = function(){
  $http({
    method:'POST',
    url:'/StarWars',
    data: {
      this.Title = ''
      this.Poster = ''
      this.Actors = ''
      this.Runtime = ''
      this.Plot = ''
    }
  }).then(function(response){
    controller.getStarWars();
  }, function(error){
    console.log(error);
    })
  }
this.getStarWars()
}])
