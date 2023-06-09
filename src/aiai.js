for (const element of Array.from(document.querySelectorAll('*[data-aiai]'))) {
    /* not await */ activateElement(element);
}

function activateElement(element) {
    const type = element.getAttribute('data-aiai');
    if (type === 'gallery') {
        return activateGalleryElement(element);
    } else {
        throw new Error(`Unknown aiai type "${type}"`);
    }
}

async function activateGalleryElement(element) {
    const response = await fetch(`mocked-api/wallpapers-ids.json`);
    const wallpapersIds = await response.json();

    const pickedWallpapersIds = [];

    while (pickedWallpapersIds.length < 6 /* <- [🥼]*/) {
        const wallpaperId = wallpapersIds[Math.floor(Math.random() * wallpapersIds.length)];
        if (pickedWallpapersIds.includes(wallpaperId)) {
            continue;
        }
        pickedWallpapersIds.push(wallpaperId);
    }

    // !!!!! Color of iframe
    const pickedWallpapersHtmls = pickedWallpapersIds.map(
        (wallpaperId, i) => `

            <!--<div>${i}</div>-->
            
            <a href="https://ai.hejny.org/showcase/${wallpaperId}">
                <iframe
                    src="https://ai.hejny.org/showcase/${wallpaperId}?mode=presentation"
                    allowtransparency="false"
                    scrolling="no"
                ></iframe>
            </a>
            
        `,
    );

    const html = `
        <div class="aiai aiai-gallery">
            <div class="aiai-gallery-items">
                ${pickedWallpapersHtmls.join('\n\n\n')}
            </div>
            <a href="https://ai.hejny.org" class="button">More</a>
        </div>
    `;

    element.innerHTML = html;
}

/**
 * TODO: Use spaceTrim
 * TODO: Maybe use shadow dom not just CSS / data-aiai prefixing
 * TODO: Recursive activation of elements
 * TODO: !!! This should be really exported / provided from Aiai as a embed integration
 */
