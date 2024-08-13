import React from 'react'

function head() {
  return (
    <div className='header'>
      <section className='search'>
        <form action=''>
          <label htmlFor=''>search</label>
          <input type='text' />
          <button type='button'>click</button>
        </form>
      </section>
      <section className='header-ul'>
        <ul>
          <li>
            <a href='#' target='_blank'>
              home
            </a>
          </li>
          <li>
            <a href='#' target='_blank'>
              contact us
            </a>
          </li>
          <li>
            <a href='#' target='_blank'>
              about us
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default head
