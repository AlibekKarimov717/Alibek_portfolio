import React from 'react'
import websites from '../../helpers/websites'

function Websites() {
  return (
    <div id='Websites' className='websites container'>
      { websites.map((item) => (
        <a key={item.id}  href={item.click}>
        <div className="cards-website" key={item.id} >
          <h1 className="cards-title"  >{item.title}</h1>
          <img src={item.img} alt="img"   className="cards-img" />

        </div>
          </a>
      ))}
      
    </div>
  )
}

export default Websites
