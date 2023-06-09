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

    while (pickedWallpapersIds.length < 9) {
        const wallpaperId = wallpapersIds[Math.floor(Math.random() * wallpapersIds.length)];
        if (pickedWallpapersIds.includes(wallpaperId)) {
            continue;
        }
        pickedWallpapersIds.push(wallpaperId);
    }

    let html = pickedWallpapersIds
        .map(
            // TODO: !!! Use spaceTrim
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
        )
        .join('\n');

    //html +='<a href="https://ai.hejny.org" class="button">More</a>'

    element.innerHTML = html;
}

/**
 * TODO: Recursive activation of elements
 * TODO: !!! This should be really exported / provided from Aiai as a embed integration
 */
