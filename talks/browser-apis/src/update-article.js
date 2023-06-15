const converter = new showdown.Converter({
    /*
    Note: !!!!
    extensions: [
        showdownHighlight({
            // Whether to add the classes to the <pre> tag, default is false
            pre: true,
            // Whether to use hljs' auto language detection, default is true
            auto_detection: true,
        }),
    ],
    */
});
converter.setFlavor('github');

/* not await */ updateArticle();

async function updateArticle() {
    const contentElement = document.getElementById('content');
    const src = contentElement.dataset.markdownSource;
    const response = await fetch(src);
    const markdown = await response.text();

    const html = converter.makeHtml(markdown);

    contentElement.innerHTML = html;

    // Note: Go through all the code blocks and add run button to them
    for (const codeBlock of Array.from(document.querySelectorAll('pre code'))) {
        const runButton = document.createElement('button');
        runButton.innerText = 'Run';
        runButton.classList.add('button');
        runButton.classList.add('run-button');
        insertAfter(runButton, codeBlock.parentElement);

        runButton.addEventListener('click', () => {
            eval(codeBlock.innerText);
        });
    }

    hljs.highlightAll();
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
