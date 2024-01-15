


function downloadPdf() {

    // Triger a keydown event.
    // The pdf viewer of studydrive listens to the keydown event and triggers the download
    var event = new KeyboardEvent('keydown', {
        key: 's',
        keyCode: 83, // numerical keyCode for 's' key
        ctrlKey: true, // ctrl key is pressed
        altKey: false,
        shiftKey: false,
        metaKey: false
    });

    window.dispatchEvent(event);
}

function createExtraDownloadButton() {
    var button = document.createElement('button');
    button.innerHTML = 'Dokument herunterladen';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.style.padding = '1rem 2rem';
    button.style.borderRadius = '4px';
    button.style.zIndex = '9999999';
    button.style.position = 'fixed';
    button.style.bottom = '5px';
    button.style.right = '5px';

    button.addEventListener('click', function (e) {
        e.preventDefault();

        downloadPdf();
    });

    document.body.appendChild(button);
}


function changeDefaultDownloadButtonBehaviour() {
    var originalDownloadButton = document.querySelector('button[data-specific-auth-trigger="download"]');

    if (originalDownloadButton) {
        originalDownloadButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();


            downloadPdf();
        }, true);
    }
}




addEventListener("load", (event) => {

    changeDefaultDownloadButtonBehaviour();

    // Only add an extra download button if the pdf viewer is present in case the default download button is not working
    if (document.getElementById('document-pdf-container')) {
        createExtraDownloadButton();
    } else {
        console.warn('No pdf viewer found. Please write an issue on github: (https://github.com/johanneslo1/studydrive-chrome-extension/issues)');
    }

});





