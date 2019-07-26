import React, { useState } from 'react';
import ResourceList from "./ResourceList";

const App = () => {
  const [ resourceType, setResourceType ] = useState('posts')

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <div>
        <button onClick={ () => setResourceType('posts') }>
          Posts
        </button>
        <button onClick={ () => setResourceType('todos') }>
          Todos
        </button>
        <button onClick={ () => setResourceType('users') }>
          Users
        </button>
      </div>
      <ResourceList resourceType={ resourceType } />
    </div>
  );
}

export default App;