// Function to create input fields dynamically
function createInputField(labelText, type, id, container) {
    const containerDiv = document.getElementById(container);

    // Create label
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText + ':';

    // Create input field
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);

    // Append label and input to container div
    containerDiv.appendChild(label);
    containerDiv.appendChild(input);
}

// Call function to create input fields
createInputField('Name', 'text', 'name', 'form-container');
createInputField('Media File', 'file', 'media', 'form-container');

// Function to handle form submission
function handleSubmit() {
    const name = document.getElementById('name').value;
    const fileInput = document.getElementById('media');
    const file = fileInput.files[0];
    if (!name || !file) {
        alert('Please fill in all fields.');
        return;
    }

    const imageUrl = URL.createObjectURL(file);
    console.log('Name:', name);
    console.log('Media URL:', imageUrl);

    // You can proceed with further actions like sending data to a server, etc.
}

// Add event listener to submit button
document.getElementById('submit-btn').addEventListener('click', handleSubmit);

// Function to display image preview
function displayImagePreview() {
    const fileInput = document.getElementById('media');
    const file = fileInput.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        const previewContainer = document.getElementById('media-preview');
        previewContainer.innerHTML = ''; // Clear previous preview
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Selected Media';
        img.style.maxWidth = '100%';
        previewContainer.appendChild(img);
    }
}

// Add event listener to file input to display preview when file is selected
document.getElementById('media').addEventListener('change', displayImagePreview);