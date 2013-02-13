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
        itemSets = [],
        length = snippets.length;

    for (var i = 0; i < length; i++) {
        var snippet = snippets[i];
        if (snippet.node) {
            itemSets[snippet.node] = itemSets[snippet.node] || [];
            itemSets[snippet.node].push(snippet);
        } else {
            itemSets["default"] = itemSets["default"] || [];
            itemSets["default"].push(snippet);
        }
    }

    for (var key in itemSets) {
        if (key === 'length' || !itemSets.hasOwnProperty(key)) continue;

        var items = itemSets[key],
            snipsHtml = template({snippets: items});

        if (key == 'default') {
            $('#snippets-wrapper').html('');
            $('#snippets-wrapper').append(snipsHtml);
        } else {
            $('#snippets-wrapper-' + key).html('');
            $('#snippets-wrapper-' + key).append(snipsHtml);
        }
    }

    $('.snippet-quick-copy').click(function(){
        snips.copy($(this).data('snip-text'));
    });
})();