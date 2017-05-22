window.onload = function(){
	
	var edit = new editor('#richTextArea'); // PASS THE NAME OF THE IFRAME BASICALLY THE ID
	execCmd = edit.execCmd;
};

/*
The command list for all the various functionalities
ATTACH THESE FUNCTIONS BASED ON YOU BUTTONS
execCmd('fontName' , this.value)
execCmd('undo')
execCmd('redo')
execCmd('bold')
execCmd('italic')
execCmd('strikethrough')
execCmd('subscript')
execCmd('superscript')
execCmd('indent')
execCmd('outdent')
execCmd('insertOrderedList')
execCmd('insertUnorderedList')
execCmd('createLink' , prompt('Enter the Link', ''))
execCmd('justifyLeft')
execCmd('justifyRight')
execCmd('justifyFull')
execCmd('justifyCenter')
"execCmd('underline')
execCmd('insertImage' ,prompt('Give the image link', '') )
execCmd('increaseFontSize')
execCmd('decreaseFontSize')
execCmd('cut')
"execCmd('paste')
execCmd('insertParagraph')
execCmd('foreColor' , this.value
execCmd('toggleCode')
*/

var editor = function(richTextArea){

var getCode = false;
var fontSize = 3;	
var editbox = document.querySelector(richTextArea).contentWindow.document;
editbox.designMode='On';
this.execCmd = function(type ){
	if(type=='toggleCode')
		{	getCode = !getCode;
			if(getCode)
				{
					editbox.getElementsByTagName('body')[0].innerText = editbox.getElementsByTagName('body')[0].innerHTML ;	
				}
		 	else{
				editbox.getElementsByTagName('body')[0].innerHTML = editbox.getElementsByTagName('body')[0].innerText; 	
			}
			return ;
		}
	var val =null;
	if(type == 'increaseFontSize'){ 
		type='fontSize';
		if(fontSize < 7)
			val= (++fontSize);	
	}
	else if(type == 'decreaseFontSize'){
		type='fontSize';
		if(fontSize>1)
			val = (--fontSize);
	}
	if(arguments.length > 1)
		val = arguments[1];
	editbox.execCommand(type , false , val);	
 }
}