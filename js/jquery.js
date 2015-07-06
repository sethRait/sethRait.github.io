/**
 * Created by srait on 7/2/2015.
 */
$( document ).ready(function() {
    $("form").submit(function (e) {
        e.preventDefault();
        $(".form_wrapper").append("<p>APPENDED</p>");
    });
});