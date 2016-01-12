'use strict';

angular.module('sgb-test-parent-menu', ['megazord'])
     .controller('sgb-test-parent-menu-controller', ['$scope', '$rootScope', '$ionicLoading', '$translate', '_router', '_screenParams', '_screen', function ($scope, $rootScope, $ionicLoading, $translate, _router, _screenParams, _screen) {
        _screen.initialize($scope, _screenParams);

        $rootScope.$on('_dataLoadStarted', function () {
            console.log('Should start spinner.');
            $ionicLoading.show({
                template: '<i class="icon ion-loading-b"></i><div>{{ "loading" | translate }}</div>'
            });
        });

        $rootScope.$on('_dataLoadFinished', function () {
            console.log('Should stop spinner.');
            $ionicLoading.hide();
        });

        $scope.menu = _screenParams.menu?_screenParams.menu:{};
        $scope.navBarTitle = _screenParams.title?_screenParams.title:'default_menu_title';
        $scope.navBarColor = _screenParams.barColor?_screenParams.barColor:'defaultBarColor';
        $scope.navBarSide = _screenParams.side?_screenParams.side:'right';
        $scope.navBarHeaderColor = _screenParams.headerColor?_screenParams.headerColor:'defaultHeaderColor';
        $scope.backViews = _screenParams.backview?_screenParams.backview:'true';
        $scope.gotoScreen = function(screen){
            if (screen === 'root.news'){
                $http.post('')
                _router.goToState(screen);
            }else {_router.goToState(screen);}
        };
    }]);