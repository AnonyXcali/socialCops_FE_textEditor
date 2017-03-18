
var bt1 = document.getElementById('btnX');
var bt2 = document.getElementById('btnY');
var bt3 = document.getElementById('btnZ');
var btnX = document.getElementById('exit');
var linkX = document.getElementById('link');
var submit = document.getElementById('submit');
var textArea = document.getElementById('storyArea');
var linkCounter = 0;




function designModeOn(){

  console.log("Thanks for viewing the console! #LetsDesign")
//  storyArea.document.designMode = 'On';

}


console.log(storyArea);
console.log(document.getElementById('storyArea'));
function execCmd(command){
 console.log('bold');
 console.log(command);
  document.execCommand(command,false,null);
}

function execCmd2(command){

document.execCommand(command,false,'#FF0000');
}


bt1.addEventListener('click', function (event) {
    execCmd('bold');
    $("#tooltip").hide('1000');
});
bt2.addEventListener('click', function (event) {
    execCmd('underline');
    $("#tooltip").hide('1000');
});
bt3.addEventListener('click', function (event) {
    execCmd2('forecolor');
    $("#tooltip").hide('1000');
});
btnX.addEventListener('click',function(event){
   $("#tooltip").hide('1000');

});
linkX.addEventListener('click',function(event){
  urlLinkCreator();
   $("#tooltip").hide('1000');

});

submit.addEventListener('click',function(event){
console.log(textArea.innerHTML.trim());

});
// $('body').click(function(){
//   $("#tooltip").hide('1000');
// });





$(document).ready(function () {
    $("#tooltip").hide();
    $('#storyArea').mouseup().mousedown().mouseup().mousedown(function (e) {
        var x = e.clientX;
        var y = e.clientY;
        placeTooltip(x, y);
        $("#tooltip").show('1000');

    })

});






function placeTooltip(x_pos, y_pos) {
    var d = document.getElementById('tooltip');
    d.style.position = "absolute";
    d.style.left = x_pos + 'px';
    d.style.top = y_pos + 'px';
}

$(function () {

    $(document).tooltip();
});

$( ".container" ).mouseleave(function() {
      $("#tooltip").hide('20');

});


storyArea.addEventListener('keypress', function(e) {
    if (e.keyCode == '13') {
        e.preventDefault();
        document.execCommand('insertParagraph', false);
        document.execCommand('formatBlock', false, 'p');
    }
}, false);



function urlLinkCreator() {
    var linkURL = prompt("URL:", "http://");
    if (linkURL !== null) {
    	document.execCommand("CreateLink", false, linkURL);
	    if (linkCounter % 2 == 0)
	        $('<li> <a href="' + linkURL + '">' + linkURL + '</a></li>').appendTo('#links');
	    else
	        $('<li> <a style="color:red;" href="' + linkURL + '">' + linkURL + '</a></li>').appendTo('#links');
	    linkCounter += 1;
	}
}
