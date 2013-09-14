/*global $, document */

(function () {
    
    "use strict";
    
    var state = 0;
    
    $(function () {
        $("#twotrees .row1").hover(function (e) {
            console.log("H1");
            $(".row1").addClass("selected");
        }, function (e) {
            console.log("H2");
            $(".row1").removeClass("selected");
        });
        
        $("#twotrees .row2").hover(function (e) {
            console.log("H3");
            $(".row2").addClass("selected");
        }, function (e) {
            console.log("H4");
            $(".row2").removeClass("selected");
        });
    });
}());