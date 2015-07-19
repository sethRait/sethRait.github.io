/**
 * Created by srait on 7/2/2015.
 */

var commands=['ls', 'cd', 'cat', 'grep', 'man', 'about', 'contact', 'links', 'resume'];
var loc="guest@sethrait:~ $ ";

$( document ).ready(function() {
    getWidth();
    $(".full-height").height($(window).height());
    $(".form_input").keydown(function(){
       if(event.keyCode==13){
           submitCommand(event);
       }
    });
});

//gets the width of the terminal window to be used for the textarea
function getWidth(){
    var textAreaWidth=$("form").width()-$("#p_term").width();
    $("textarea").css("width", textAreaWidth-5);
}

//triggered when user submits a command to the console
function submitCommand(e){
    e.preventDefault();
    var usrCommand=$('.form_input').val();
    processCommand(usrCommand);
    $(".form_wrapper").replaceWith("<p class='new-terminal-text'>"+loc+usrCommand+"</p>"+"<br>");
    $("#terminal-window").append("<div class='form_wrapper'><form class='terminal-text'><p id='p_term' class='terminal-text'>guest@sethrait:~ $ </p><textarea autofocus class='form_input' name='terminal' placeholder='Currently under construction, please come back later'></textarea></form></div>");
    getWidth();
    $(".form_input").keydown(function(){
        if(event.keyCode==13){
            submitCommand(event);
        }
    });
}

//processes the contents of the user submitted command
function processCommand(usrCommand){
    for(var i=0;i<commands.length;i++){
        if(usrCommand===commands[i]){
            execute(commands[i]);
            return 1;
        }
    }
    $("#terminal-window").append("<p>Command Not Found: "+usrCommand);
}

//executes the user's command
function execute(command){  //WRITE THIS FUNCTION
    switch(command) {
        case commands[5]:
            $('html, body').animate({
                scrollTop: $("#About").offset().top
            }, 1000);
            break;
        case commands[6]:
            $('html, body').animate({
                scrollTop: $("#Contact").offset().top
            }, 1000);
            break;
        case commands[7]:
            $('html, body').animate({
                scrollTop: $("#Links").offset().top
            }, 1000);
            break;
    }
}