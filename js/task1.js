var myapp =angular.module('myapp', []);
myapp.controller('productController', function($scope){

	$scope.listProducts=[

	{id:'m1' , name:'john' , email:'hhh@jjj.com' , quantety:'01234514334' },
	{id:'m2' , name:'bola' , email:'hhh@jjj.com' , quantety:'01234514334' },
	{id:'m3' , name:'shery' , email:'hhh@jjj.com' , quantety:'01234514334' },
	{id:'m4' , name:'monica' , email:'hhh@jjj.com' , quantety:'01234514334' }

	];

///////////////////////Add function///////////////////////


	$scope.add=function(){

		$scope.listProducts.push({

			id:$scope.id , name:$scope.name , email:$scope.email , quantety:$scope.quantety

		});

		$scope.id='';
		$scope.name='';
		$scope.email='';
		$scope.quantety='';
	};

/////////////////////// save Edit function///////////////////////


	$scope.edit=function (){
		var index=getSelectedIndex($scope.id);
		$scope.listProducts[index].name = $scope.name;
		$scope.listProducts[index].email = $scope.email;
		$scope.listProducts[index].quantety = $scope.quantety;

	};

///////////////////////Edit function///////////////////////

	$scope.selectEdit=function(id){

		var index=getSelectedIndex(id);
		var product = $scope.listProducts[index];
		$scope.id=product.id;
		$scope.name=product.name;
		$scope.email=product.email;
		$scope.quantety=product.quantety;
	};



///////////////////////Delete function///////////////////////

	$scope.del = function(id){
		var result=confirm('are you sure ?!');
		if(result===true){

			var index=getSelectedIndex(id);
			$scope.listProducts.splice(index , 1);
		}

	};


	function getSelectedIndex(id){

		for(var i=0 ; i<$scope.listProducts.length ; i++)
			if($scope.listProducts[i].id==id)
				return i;
			return -1;

		}

	});
