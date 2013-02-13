snippet-quick-copy
==================

a tool to have a set of text snippets handy and ready to be copied to a clipboard.

basics
--------

There are only a couple steps needed to get this set up.

* make sure that you have a version of jquery loaded on the page.
* also load the handlebars.js and jquery.simplemodal.1.4.4.min.js files that are found in this repository.
* create a div with an id set to 'snippets-wrapper'
* create a javascript array variable on the page called snippets.

var snippets = [

];

* for each snippet that you want to be available create a new object in the snippets array in the format of:
{"tag": "a name for this snippet", "text": "the text for this snippet"}

If there are going to be multiple items be sure to follow all but the last one with a comma in the array.

Please see the example in the index.html file included if you need help.

putting snippets in multiple locations
-------------------------------------------

If you want some snippets to be rendered in a different section you will need to give these snippets a label. Let's say you've decided to label some as 'amazing'; here are the additional steps you need to take.

1. make a new div with the class 'snippets-wrapper-amazing' (notice that the class has the label you've chosen in it)
2. In the 'snippets' json array, to each item you want to show up in the 'amazing' div you will need to add the 'node' attribute with the value of your label; in this case 'amazing'.
{"tag": "this is a tag", "text": "here is some text", "node": "amazing"}