import React, { useState, useEffect } from 'react';
import axios from "axios";

const useResources = (resourceType) => {
  const [resources, setResources] = useState([]);

  // Refactored from ResourceList3.js
  useEffect(
    () => {
      (async (resourceType) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${ resourceType }`
        );
        setResources(response.data)
      })(resourceType);
    }, 
    [resourceType])
  return resources;
}

const ResourceList = ({ resourceType }) => {
  const resources = useResources(resourceType)
  return (
    <ul>
      { resources.map(resourceItem => 
        <li key={ resourceItem.id }>
          { resourceItem.title }
        </li>
      ) }
    </ul>
  );
}

export default ResourceList;