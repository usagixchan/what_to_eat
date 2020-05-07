let app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.myHide = true;
    
    //定义主食、蔬菜、蛋白质三个数组
    let stapleFood = $scope.stapleFood = ["白米饭", "煮玉米", "红薯饭", "杂粮馒头", "孜然小土豆"];
    let vegetable = $scope.vegetable = ["红烧冬瓜", "炒花菜", "手撕包菜", "炒小白菜", "番茄烧金针菇"];
    let protein = $scope.protein = ["煎豆腐", "番茄炖牛肉", "黄焖鸡", "辣椒炒肉", "香菜牛肉", "酸豆角肉沫"];

    //随机获取数字里的元素
    $scope.randomArr = function (arr) {
        return arr[Math.round(Math.random() * (arr.length - 1))];
    };

    //将三个数组中的元素放入新的数组中
    $scope.arrange = function () {
        let lists = $scope.lists = [];
        for (let i = 0; i < 5; i++) {
            $scope.dict = {
                "sta": $scope.randomArr(stapleFood),
                "veg": $scope.randomArr(vegetable),
                "pro": $scope.randomArr(protein)
            };
            $scope.lists.push($scope.dict);
        }
        $scope.myHide = false;
    };

    //添加元素
    $scope.add = function(ele, arr){
        if(ele == ""){
            alert("请输入菜名");
        }else if(arr.indexOf(ele) !== -1){
            alert("已经存在这个菜了");
        }else{
            arr.push(ele);
        }
    };

    //删除元素
    $scope.delete = function(ele, arr){
        let ind = arr.indexOf(ele);
        arr.splice(ind, 1);
    };

    $scope.reset = function(){
        window.location.reload();
    };
});