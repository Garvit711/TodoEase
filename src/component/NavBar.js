import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
       <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style = {{width : "100vw"}}>
        <div class="container-fluid">
    <Link class="navbar-brand" to="/">TodoEase</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/about">About</Link>
      </div>
    </div>
  </div>
     </nav>
    </div>
  )
}

export default NavBar
