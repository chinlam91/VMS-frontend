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
                expect(controller.projects).toBeDefined();
                expect(controller.volunteers).toBeDefined();
                expect(controller.manager).toBeDefined();
                expect(controller.managerMail).toBeDefined();
                expect(controller.createdDate).toBeDefined();
                expect(controller.description).toBeDefined();
                expect(controller.link).toBeDefined();
                expect(controller.position).toBeDefined();
                expect(controller.students).toBeDefined();
                expect(controller.school).toBeDefined();
                expect(controller.participated).toBeDefined();
            });
        });

    });
})();
