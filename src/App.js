import React from 'react';
import './App.css';
import folders from './folders.json';

function App() {
  return (
    <div className="container">
      {folders.map((folder, index) => (
        <a target='_blank' href={folder.files.main} className="block" key={index}>
          {folder.image ? (
            <img
              src={folder.image} 
              alt={folder.name}
              className="block__img"
            />
          ) : (
            <span>No Image Available</span>
          )}
          <span className="name">{folder.name}</span>
        </a>
      ))}
    </div>
  );
}

export default App;
