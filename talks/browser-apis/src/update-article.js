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
            eval(`
            
            ((async ()=>{
                
                console.log = mockConsoleLog();
                ${codeBlock.innerText}
                
            })())`);
        });
    }

    hljs.highlightAll();
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const originalConsoleLog = console.log;

function mockConsoleLog() {
    return function (message) {
        // Call the original console.log function
        originalConsoleLog.apply(console, arguments);

        // Create a pop-up element
        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50vh';
        popup.style.left = '50vw';
        popup.style.transform = 'translate(-50%,-50%)';
        popup.style.padding = '10px';
        popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        popup.style.color = '#fff';
        popup.style.zIndex = '999999999';
        popup.innerText = message;

        // Append the pop-up element to the document body
        document.body.appendChild(popup);

        // Remove the pop-up after a delay
        setTimeout(function () {
            popup.remove();
        }, 2000); // Adjust the delay (in milliseconds) as needed
    };
}
