var com = com || {};
com.jdonley83 = com.jdonley83 || {};

com.jdonley83.SnippetQuickCopy = (function(){
    function ClipBoard(input){
        window.prompt("Copy to clipboard: Ctrl+C, Enter", input);
    }

    return {
        copy: ClipBoard
    };
})();

(function(){
    var snips = com.jdonley83.SnippetQuickCopy;

    var source = "{{#each snippets}}<p class='snippet-quick-copy' data-snip-text='{{this.text}}''>{{this.tag}}</p>{{/each}}"
    var template = Handlebars.compile(source);

    var snipsHtml = template({ snippets: snippets });

    $('#snippets-wrapper').html('');
    $('#snippets-wrapper').append(snipsHtml);

    $('.snippet-quick-copy').click(function(){
        snips.copy($(this).data('snip-text'));
    });
})();