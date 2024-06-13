import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://fisat.ac.in/wp-content/themes/fisat2022/assets/logo.png" alt="Logo" width="100" height="100" class="d-inline-block align-text-top" />

                    
                        <img src="https://fisat.ac.in/wp-content/themes/fisat2022/assets/testcopy.png" alt="Logo" width="700" height="100" class="d-inline-block align-text-top" />

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Add">Add</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Search">Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/View">View</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Back to Login</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>

   
  )
}

export default Nav