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

    // Triger a keydown event.
    // The pdf viewer of studydrive listens to the keydown event and triggers the download
    var event = new KeyboardEvent('keydown', {
        key: 's',
        keyCode: 83, // numerischer Code für 's'
        ctrlKey: true, // Strg-Taste ist gedrückt
        altKey: false,
        shiftKey: false,
        metaKey: false
    });

    window.dispatchEvent(event);


});

// Only add the button if the pdf viewer is present
if(document.getElementById('document-pdf-container')) {
    document.body.appendChild(button);
}




