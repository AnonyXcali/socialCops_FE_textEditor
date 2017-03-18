
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

var bt1 = document.getElementById('btnX');
var bt2 = document.getElementById('btnY');
var bt3 = document.getElementById('btnZ');
var btnX = document.getElementById('exit');

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




$(document).ready(function () {
    $("#tooltip").hide();
    $('#storyArea').mouseup(function (e) {
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
