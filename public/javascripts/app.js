var app = angular.module('sportzorg', []);

app.directive('webshopItem', function(){
	return {
		restrict : 'E',
		scope : {
			name: '@',
			price: '@'
		},
		template : "<div class=\"card\">"
			+"<img class=\"card-img-top\" data-src=\"#\" alt=\"card image top\"/>"
			+"<div class=\"card-block\">"
				+"<h4 class=\"card-title\">{{name}}</h4>"
				+"<p class=\"card-text\">{{price}}</p>"
				+"<a href=\"#\" class=\"btn btn-primary\">In winkelmand</a>"
			+"</div>"
		+"</div>"
	};
	/*var directive = {};
	directive.restrict = 'E';
	directive.template = 
		"<div class=\"card\">"
			+"<img class=\"card-img-top\" data-src=\"#\" alt=\"card image top\"/>"
			+"<div class=\"card-block\">"
				+"<h4 class=\"card-title\">{{name}}</h4>"
				+"<p class=\"card-text\">{{price}}</p>"
				+"<a href=\"#\" class=\"btn btn-primary\">In winkelmand</a>"
			+"</div>"
		+"</div>";

	directive.scope = {
		name: "@",
		price: "@"
	}

	/*directive.compile = function(element, attributes){
		var linkFunction = function($scope, element, attributes){
			element.html("<div class=\"card\">"
					+"<img class=\"card-img-top\" data-src=\"#\" alt=\"card image top\"/>"
					+"<div class=\"card-block\">"
						+"<h4 class=\"card-title\">"+itemname+"</h4>"
						+"<p class=\"card-text\">"+itemprice+"</p>"
						+"<a href=\"#\" class=\"btn btn-primary\">In winkelmand</a>"
					+"</div>"
				+"</div>");
		}
		return linkFunction;
	}*/

	return directive;
});

app.controller('Webshop', function($scope, $http, $sce){
	$scope.results = [];
	$http.get('http://localhost:3000/webshop/api/items')
	.then(function(response){
		var items = response.data;
		$scope.items = items.data;
	});
});