import React, { useState } from 'react';

function FetchDataExample() {
  const [data, setData] = useState();

  const fetchData = async (getdata) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${getdata}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchData('posts')}>Post Dat</button>
      <button onClick={() => fetchData('users')}>User Data</button>

      <div>
        <h2>Fetched Data:</h2>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default FetchDataExample;
