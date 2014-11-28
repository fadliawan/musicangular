angular.module('home',['ui.router'])
	.config(function config( $stateProvider ) {
		$stateProvider
			.state( 'home', {
				url: '/home',
				views: {
					"main": {
						controller: 'HomeCtrl',
						templateUrl: 'home/home.tpl.html'
					}
				},
				data:{ pageTitle: 'Home' },
				resolve: {
					trackData: function($http) {
						return $http.jsonp("https://itunes.apple.com/search?term=coldplay&callback=JSON_CALLBACK");
					}
				}
			})
			.state( 'home.detail',{
				url: '/:id',
				views: {
					"main": {
						controller: 'TrackDetailCtrl',
						templateUrl: 'home/detail.tpl.html'
					}
				}
			})
	})
	.controller('HomeCtrl',function($scope, $http,$state, trackData ){
		$scope.tracks = trackData.data.results;

		$scope.selectedTrack = null;

		$scope.clickTrack = function(id){
			$state.go('home.detail', {id:id});
		}

	})
	.controller('TrackDetailCtrl', function($scope, $state, $stateParams) {
		$scope.selectedTrackId = $stateParams.id;

		$scope.closePop = function(){
			$state.go('home');
		}
	})