(function() {
    'use strict';

    describe('projects testing', function() {

        beforeEach(module('vmsFrontend'));

        var $controller;

        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));

        describe('variable', function() {
            it('declare', function() {
                var $scope = {};
                var controller = $controller('projectController', {
                    $scope: $scope
                });
                expect($scope.projects).toBeDefined();
                expect($scope.volunteers).toBeDefined();
                expect($scope.manager).toBeDefined();
                expect($scope.managerMail).toBeDefined();
                expect($scope.createdDate).toBeDefined();
                expect($scope.description).toBeDefined();
                expect($scope.link).toBeDefined();
                expect($scope.position).toBeDefined();
                expect($scope.students).toBeDefined();
                expect($scope.school).toBeDefined();
                expect($scope.participated).toBeDefined();
            });
        });

    });
})();
