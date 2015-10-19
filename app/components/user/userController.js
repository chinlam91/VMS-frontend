app.controller('MainController', ['$scope','$http', function ($scope, $http) {
    $scope.vms = 'VMS';
    $scope.login = 'Login';
    $scope.register = 'Register';
    $scope.privacy = 'Privacy (/prɪvəsi/ or /praɪvəsi/; from Latin: privatus) is the ability of an individual or group to seclude themselves, or information about themselves, and thereby express themselves selectively. The boundaries and content of what is considered private differ among cultures and individuals, but share common themes. When something is private to a person, it usually means that something is inherently special or sensitive to them. The domain of privacy partially overlaps security (confidentiality), which can include the concepts of appropriate use, as well as protection of information. Privacy may also take the form of bodily integrity.';
    $scope.user = 'jimlin@citi.sinica.edu.tw';
    $scope.reContent = 'To complete the register process, an email confirmation was sent to your email address, ' + $scope.user + '. You can confirm your email address by clicking on the URL that was provided in the confirmation email sent you.';
    $scope.reContent1 = 'If you have not received an email confirmation message be sent to your email address, please click the resent button to request a new one.';


    $scope.response = null;

    $scope.loginButton=function(){


        $http({
            method: 'POST',
            url: 'https://vms-dev.herokuapp.com/api/auth',
            headers: {
                'Host': 'vms.app',
                'Content-Type': 'application/json',
                'X-VMS-API-Key': 'd6527aa8bcf55187490154283e4d2a1a268a94ead2322f883276a7c3cb52cd09',
            },
            data: {
                "username":'jimlin',
                "password":'MYPASSWORD'
            }
        }).then(function successCallback(response) {
            //   return response.data;
            alert(response.status);
            // alert(response.data.toJSON);


        }, function errorCallback(response) {

            alert('Error'+ response.status);

            alert(response.data.toJSON);
        });
    };


    $scope.SignUp = function () {
        $http({
            method: 'POST',
            url: 'https://vms-dev.herokuapp.com/api/register',
            headers: {
                'Host': 'vms.app',
                'Content-Type': 'application/json',
                'X-VMS-API-Key': '581dba93a4dbafa42a682d36b015d8484622f8e3543623bec5a291f67f5ddff1',
            },
            data: {
                "username": "test3",
                "password": "MYPASSW0RD",
                "first_name": "Lin",
                "last_name": "Jim",
                "birth_year": 2015,
                "gender": "male",
                "city": {
                    "id": 2,
                    "name_zh_tw": "臺北市",
                    "name_en": "Taipei City"
                },
                "address": "128 Academia Road, Section 2, Nankang Dist.",
                "phone_number": "0912345678",
                "email": "test3@citi.sinica.edu.tw",
                "emergency_contact": "Jeremy Lin",
                "emergency_phone": "0919119119"
            }
        }).then(function successCallback(response) {
         //   return response.data;
            alert(response.status);
           // alert(response.data.toJSON);


        }, function errorCallback(response) {

            alert('Error'+ response.status);

            alert(response.data.toJSON);
        });
    };
}]);
