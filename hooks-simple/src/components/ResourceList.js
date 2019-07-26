import React from 'react';
import useResources from "./useResources";

const ResourceList = ({ resourceType }) => {

  const resources = useResources(resourceType)

  return (
    <ul>
      { resources.map(resourceItem => 
        <li key={ resourceItem.id }>
          { resourceItem.title }
          { resourceItem.name }
        </li>
      ) }
    </ul>
  );
}

export default ResourceList;