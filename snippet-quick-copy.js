var com = com || {};
com.jdonley83 = com.jdonley83 || {};

com.jdonley83.SnippetQuickCopy = (function(){
    function ClipBoard(input) {
        $.modal("<div id='snippet-modal'><textarea style='width:100%;'>" + input + "</textarea></div>", {minWidth:600});
        var textarea = $('#snippet-modal textarea');
        $(textarea).select();
        $(textarea).keypress(function(e) {
            if (e.which == 13) {
                $.modal.close();
            }
        });
    }

    return {
        copy: ClipBoard
    };
})();

(function(){
    var snips = com.jdonley83.SnippetQuickCopy,
        template = Handlebars.compile("{{#each snippets}}<p class='snippet-quick-copy' data-snip-text='{{this.text}}''>{{this.tag}}</p>{{/each}}"),
        snipsHtml = template({ snippets: snippets });

    $('#snippets-wrapper').html('');
    $('#snippets-wrapper').append(snipsHtml);

    $('.snippet-quick-copy').click(function(){
        snips.copy($(this).data('snip-text'));
    });
})();