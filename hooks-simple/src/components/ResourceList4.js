import React, { useState, useEffect } from 'react';
import axios from "axios";

const ResourceList = ({ resourceType }) => {

  const [resources, setResources] = useState([]);

  // Refactored from ResourceList.copy.2.js
  useEffect(() => {
    (async (resourceType) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${ resourceType }`
      );
  
      setResources(response.data)
    })(resourceType);
  }, [resourceType])

  return (
    <ul>
      { resources.map(item => 
        <li key={ item.id }>
          { item.title }
        </li>
      ) }
    </ul>
  );
}

export default ResourceList;