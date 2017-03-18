function designModeOn(){
  console.log("Thanks for viewing the console! #LetsDesign")
  storyArea.document.designMode = 'On';

}


function execCmd(command){

  storyArea.document.execCommand(command,false,null);
}

function execCmd2(command){

  storyArea.document.execCommand(command,false,'#FF0000');
}
