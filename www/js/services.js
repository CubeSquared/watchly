angular.module('watchly.services',[])
.factory('Auth', function ($http, $location) {
  var authenticated = false;
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (res) {
      if (res.data.userid) {
        authenticated = true;
      }
      return res.data.userid;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (res) {
      if (res.data.userid) {
        authenticated = true;
      }
      return res.data.userid;
    });
  };

  var signout = function () {
    return $http({
      method: 'GET',
      url: '/api/users/signout',
    })
    .then(function (res) {
      authenticated = false;
      $location.path('#/signin');
    });
  };

  var isAuthenticated = function() {
    return authenticated ? true : false;
  };

  return {
    signin: signin,
    signup: signup,
    signout: signout,
    isAuthenticated: isAuthenticated
  };
})
.factory('Incidents', function($http){
  var getIncidentById = function (incidentId) {
    return $http({
      method: 'GET',
      url: '/api/incidents/' + incidentId,
    })
    .then(function (res) {
      return res.data;
    });
  };

  var getIncidentsByLocation = function (location) {
    return $http({
      method: 'GET',
      url: '/api/incidents',
      data: location
    })
    .then(function (res) {
      return res.data;
    });
  };

  var getAllIncidents = function () {
    return $http({
      method: 'GET',
      url: '/api/incidents',
    })
    .then(function (res) {
      return res.data;
    });
  };

  var getIncidentTypes  = function (location) {
    return $http({
      method: 'GET',
      url: '/api/incidents/incidentType',
    })
    .then(function (res) {
      return res.data;
    });
  };

  var createNewIncident  = function (incident) {
    return $http({
      method: 'POST',
      url: '/api/incidents',
      data: incident
    })
    .then(function (res) {
      return res.data;
    });
  };

  return {
    getIncidentById: getIncidentById,
    getIncidentsByLocation: getIncidentsByLocation,
    getAllIncidents: getAllIncidents,
    getIncidentTypes: getIncidentTypes,
    createNewIncident: createNewIncident 
  };
})
.factory('Messages', function($http){
  var getMessageByIncident  = function (incident) {
    return $http({
      method: 'GET',
      url: '/api/incidents',
      data: incident
    })
    .then(function (res) {
      return res.data;
    });
  };

  var createNewMessage  = function (message) {
    return $http({
      method: 'POST',
      url: '/api/messages',
      data: message
    })
    .then(function (res) {
      return res.data;
    });
  };

  return {
    getMessageByIncident: getMessageByIncident,
    createNewMessage: createNewMessage
  };
});