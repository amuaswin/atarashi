import React, { useState, useEffect } from 'react';

function FetchDataExample() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  
  useEffect(() => 
  {
    fetchData1();
    fetchData2();
  }, []);

  const fetchData1 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData1(data);
      })
      .catch(error => {
        console.error('Error fetching data1:', error);
      });
  };

  const fetchData2 = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData2(data);
      })
      .catch(error => {
        console.error('Error fetching data2:', error);
      });
  };

  return (
    <div>
      
      <button onClick={fetchData1()}>Fetch Data 1</button>
      <button onClick={fetchData2()}>Fetch Data 2</button>

      {/* <div>
        <h2>Data 1:</h2>
        {data1 ? (
          <pre>{JSON.stringify(data1, null, 2)}</pre>
        ) : (
          <p>No data available</p>
        )}
      </div>

      <div>
        <h2>Data 2:</h2>
        {data2 ? (
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        ) : (
          <p>No data available</p>
        )}
      </div> */}
    </div>
  );
}

export default FetchDataExample;
