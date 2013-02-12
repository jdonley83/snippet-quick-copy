snippet-quick-copy
==================

a tool to have a set of text snippets handy and ready to be copied to a clipboard.


There are only a couple steps needed to get this set up.
-make sure that you have a version of jquery loaded on the page.
-also load the handlebars.js file that is found with these files.
-create a div with an id set to 'snippets-wrapper'
-create a javascript array variable on the page called snippets.

var snippets = [

];

-for each snippet that you want to be available create a new object in the snippets array in the format of:
{"tag": "a name for this snippet", "text": "the text for this snippet"}

If there are going to be multiple items be sure to follow all but the last one with a comma in the array.

Please see the example in the index.html file included if you need help.
