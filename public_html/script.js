/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var uploadButton = document.getElementById('uploadButton');
//
//uploadButton.addEvesublimtnListener('click', function() {
//    alert('Hello world this button is working');
//}, false);

/* document needs to load before javascript is run, it is placed in header file
 * it is loadedd first */
 
$(document).ready(function(){
//    $('#uploadButton').on('click',function(){
//        alert("the uploadButton was clicked!");
//    });
    
    /* creates a new blue post everytime uploadButton is clicked */
    $('#uploadButton').on('click', function() {
        $('#div-wrapper').before(
                '<div class="single-div"> <p> new item</p> </div>');
    });

    /* function for setting up the button with the dialog window */
    $( function() { 

    	/* animation for open and closing, sets default closed */
    	$( '#basicDialog').dialog({
    		autoOpen: false, /* this means that it won't open until you tell it to */
    		show: {
    			effect: "blind",
    			duration: 1000
    		},
    		hide: {
    			effect: "explode",
    			duration: 1000
    		}
    	});
		
    	/* creates connection to popUp button to open dialog*/
		$( '#popUpForm' ).on('click', function() {
			$( "#basicDialog").dialog('open');  /* this opens the dialog*/
			
		}); 

		/* test push */
	});    	
});