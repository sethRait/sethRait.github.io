/**
 * Created by srait on 7/2/2015.
 */
$( document ).ready(function() {
    $("form").submit(function (e) {
        e.preventDefault();
        $("form").replaceWith("<p>TEXT</p>");
        $(".form_wrapper").append("<form class='terminal-text'><p class='terminal-text'>guest@sethrait:~ $</p> <input name='terminal' size='80' placeholder='echo Currently under construction, please come back later'> <input type='hidden' value='Search'> </form>");
    });
});