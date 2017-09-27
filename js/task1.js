var myapp =angular.module('myapp', []);
myapp.controller('productController', function($scope){

	$scope.listProducts=[

	{id:'m1' , name:'john' , price:'1000' , quantety:'100' },
	{id:'m2' , name:'john' , price:'1000' , quantety:'100' },
	{id:'m3' , name:'john' , price:'1000' , quantety:'100' },
	{id:'m4' , name:'john' , price:'1000' , quantety:'100' }

	];


	$scope.add=function(){

		$scope.listProducts.push({

			id:$scope.id , name:$scope.name , price:$scope.price , quantety:$scope.quantety

		});

		$scope.id='';
		$scope.name='';
		$scope.price='';
		$scope.quantety='';
	};


	$scope.edit=function (){
		var index=getSelectedIndex($scope.id);
		$scope.listProducts[index].name = $scope.name;
		$scope.listProducts[index].price = $scope.price;
		$scope.listProducts[index].quantety = $scope.quantety;

	};


	$scope.selectEdit=function(id){

		var index=getSelectedIndex(id);
		var product = $scope.listProducts[index];
		$scope.id=product.id;
		$scope.name=product.name;
		$scope.price=product.price;
		$scope.quantety=product.quantety;
	};





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