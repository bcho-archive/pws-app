require([], function() {
    var editor = ace.edit('editor');
    editor.setTheme('ace/theme/twilight');
    editor.getSession().setMode('ace/mode/javascript');

    console.log('hello world');
});
