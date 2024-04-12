// App.js

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMediaUrl(imageUrl);
      setMediaPreview(file);
    }
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Media URL:', mediaUrl);
  };

  return (
    <div>
      <h1>Basic Form</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="media">Media File:</label>
        <input
          type="file"
          id="media"
          accept="image/*"
          onChange={handleMediaChange}
        />
      </div>
      {mediaPreview && (
        <div>
          <h2>Image Preview</h2>
          <img src={mediaUrl} alt="Selected Media" style={{ maxWidth: '100%' }} />
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
