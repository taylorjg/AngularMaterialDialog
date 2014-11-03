/**
 * Created by taylojo on 03/11/14.
 */
(function() {

    "use strict";

    angular.module("NameListApp")
        .service(
            "NotificationService",
            ["$interpolate", "$mdToast", function($interpolate, $mdToast) {

                this.showDeletedItemNotification = function(item) {

                    var message = $interpolate("Deleted item {{id}}")({
                        id: item.id
                    });

                    return $mdToast.show({
                        template: $interpolate("<md-toast>{{message}}</md-toast>")({
                            message: message
                        })
                    });
                };
            }]
        );
}());
