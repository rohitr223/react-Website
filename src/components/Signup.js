import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div>
      <div className="signup-form">
      <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>

          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
        </form>
        <p className="text">Back to <a href="/">Home Page.</a></p>
      </main>
      </div>
    </div>
  )
}

export default Signup