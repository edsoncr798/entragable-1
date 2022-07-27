import React from 'react'
import Onclick from './Onclick'


const QuoteBox = ({dataRandomQuotes,dataRandomColors,onclick}) => {

  const colorText={
    color:dataRandomColors
  }

  const colorBgBtn={
    backgroundColor:dataRandomColors
  }

  return (
    <article className='card__container' style={colorText}>

      <main className='card__content'>
        <i className="fa-solid fa-quote-left"></i>
        <p className='card__quotes'>{dataRandomQuotes.quote}</p>
      </main>

      <div className='card__btn__author'>
        <span className='card__author'>{dataRandomQuotes.author}</span>
        <Onclick coloBgBtn={colorBgBtn} dataRandomStatus={onclick} />
      </div>
    </article>
  )
}

export default QuoteBox