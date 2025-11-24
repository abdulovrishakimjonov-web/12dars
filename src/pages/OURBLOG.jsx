import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OURBLOG = () => {
  const [data, setData] = useState([])

 useEffect(() => {
   axios
      .get('https://api.example.com/blogposts')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
 }, [])
  return (
    <div>
      {
        data.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
          </div>
        ))
      }

    </div>
  )
}

export default OURBLOG