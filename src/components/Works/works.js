import React from 'react'
import '../Works/works.css'
import work from '../../asset/works.png'

const works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>
        A problem solver with multitasking with code and design
        Programming Skills
      </span>
      <div className='worksImgs'>
          <img alt='' src={work} className='worksImg'></img>
          <img alt='' src={work} className='worksImg'></img>
          <img alt='' src={work} className='worksImg'></img>
          <img alt='' src={work} className='worksImg'></img>
          <img alt='' src={work} className='worksImg'></img>
          <img alt='' src={work} className='worksImg'></img>
      </div>
      <button className='worksBtn'>See More</button>
    </section>
  )
}

export default works