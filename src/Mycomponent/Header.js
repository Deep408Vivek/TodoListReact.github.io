import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <nav className='navBar'>
      <div className='navBar-item'>
        <img src="https://cdn.vectorstock.com/i/1000x1000/57/95/to-do-list-or-planning-icon-concept-vector-45065795.webp" alt="" />
        <h3>TodoList</h3>
        <p><a href="">Home</a></p>
        <p><a href="">About</a></p>
      </div>
    </nav>
  )
}

Header.defaultProps = {
    title : "Your Title Here",
    searchBar : true
}

Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
}
