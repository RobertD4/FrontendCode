/**
 * Created by Robert.Dumitrescu on 7/3/2017.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManager: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        var managers = [];
                        var exist = 0;
                        for (var i in data) {
                            if (data[i].managersId != null) {
                                exist = 0;

                            for (var j in managers)
                                if (data[i].managerId == managers[j].id)
                                    exist = 1;
                            if (exist == 0) {
                                managers.push(data[i].managerId)
                            }
                        }
                    }
                        return managers;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            }
        }
    }]
);