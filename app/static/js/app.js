require([], function() {
    var editor, desc, mb;
    
    editor = ace.edit('editor');
    editor.setTheme('ace/theme/tomorrow_night');
    editor.getSession().setMode('ace/mode/c_cpp');

    desc = document.getElementById('description');
    mb = document.getElementById('main-board');
    desc.style.height = mb.style.height = window.innerHeight + 10 + 'px';

    console.log('hello world');
});
