import React from 'react'
import axios from 'axios'

const CONTACTS = () => {
  const [data, setData] = useState([])

  axios
  .get('https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/produkt')
  .then((response) => {setData(response.data)} )
  .catch((error) => {console.error('Error fetching data:', error)})
  return (
    <div>
      {
        data.map((itrm) => (
          <div key={itrm.id}>
            <h1>{itrm.name}</h1>
            <img src={itrm.image} alt="" />
    </div>
        ))
      }
    </div>
  )
}

export default CONTACTS