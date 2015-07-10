/**
 * Created by srait on 7/2/2015.
 */

var commands=['ls', 'cd', 'cat', 'grep', 'man', 'about', 'contact', 'resume'];

$( document ).ready(function() {
    $(".terminal-window").on("submit", "form", function (e) { //when form is submitted
        submitCommand(e);
    });
});

//triggered when user submits a command to the console
function submitCommand(e){
    e.preventDefault();
    var usrCommand=$('.form_input').val();
    processCommand(usrCommand);
    var location="guest@sethrait:~ $ ";
    $(".form_wrapper").replaceWith("<p class='new-terminal-text' style='margin-left: -12px'>"+location+usrCommand+"</p>"+"<br>");
    $(".terminal-window").append("<div class='form_wrapper'><form class='terminal-text'><p class='terminal-text'>guest@sethrait:~ $</p> <input class='form_input' name='terminal' size='80' placeholder='echo Currently under construction, please come back later'> <input type='hidden' value='Search'></form></div>");
}

//processes the contents of the user submitted command
function processCommand(usrCommand){
    for(var i=0;i<commands.length;i++){
        if(usrCommand===commands[i]){
            execute(commands[i]);
        }else{
            //WRITE THIS
        }
    }
}

//executes the user's command
function execute(command){  //WRITE THIS FUNCTION

}