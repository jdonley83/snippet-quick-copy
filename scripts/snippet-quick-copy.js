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
        template_str = "{{#if is_list}}<ul>{{/if}}{{#each snippets}}<{{../custom_tag}} class='snippet-quick-copy' data-snip-text='{{this.text}}''>{{this.tag}}</{{../custom_tag}}>{{/each}}{{#if is_list}}</ul>{{/if}}",
        template = Handlebars.compile(template_str),
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
            custom_tag_type_entered = (snippets_options && snippets_options.tag && snippets_options.tag.length > 0),
            tag = custom_tag_type_entered ? snippets_options.tag : 'p',
            custom_tag_is_list_type = (custom_tag_type_entered && tag == 'li'),
            snipsHtml = template({snippets: items, custom_tag: tag, is_list: custom_tag_is_list_type});

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