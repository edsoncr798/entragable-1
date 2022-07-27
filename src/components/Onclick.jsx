import React from 'react'

const Onclick = ({coloBgBtn,dataRandomStatus}) => {

  

  return (
    <div className='carcd__btn'>
        <button onClick={dataRandomStatus} className='btn'  style={coloBgBtn}> &#62; </button>
    </div>
  )
}

export default Onclick