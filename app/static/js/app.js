require.config({
    paths: {
        'hjs': 'lib/highlight'
    }
});

require(['hjs'], function(hjs) {
    var editor, desc, mb;
 
    if (document.getElementById('editor')) {   
        editor = ace.edit('editor');
        editor.setTheme('ace/theme/tomorrow_night');
        editor.getSession().setMode('ace/mode/c_cpp');

        desc = document.getElementById('description');
        mb = document.getElementById('main-board');
        desc.style.height = mb.style.height = window.innerHeight + 10 + 'px';
    } else {
        var codes = document.getElementsByTagName('code'),
            i;
        for (i = 0;i < codes.length;i++) {
            codes[i].innerHTML = hjs.highlight(
                'cpp', codes[i].textContent).value;
        }
    }

    console.log('hello world');
});
