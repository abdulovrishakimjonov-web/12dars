import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AboutSeedra = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/avatar')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='max-w-[1250px] m-auto grid grid-cols-3'>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.img} alt="" />
        </div>
      ))}
    </div>
  )
}

export default AboutSeedra;
