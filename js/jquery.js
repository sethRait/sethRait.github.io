/**
 * Created by srait on 7/2/2015.
 */
$( document ).ready(function() {
    $("form").submit(function(){
        appendText();
        $.ajax({
            type: "POST",
            url: "bin/process.php",
            data: dataString,
            success: function() {
                $('#contact_form').html("<div id='message'></div>");
                $('#message').html("<h2>Contact Form Submitted!</h2>")
                    .append("<p>We will be in touch soon.</p>")
            }
        });
        return false;
    });
    function appendText() {
        $("p").append("Some appended text.");
    }
});