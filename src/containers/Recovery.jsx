import React from 'react';
import '../styles/style.scss';

const Recovery = () => {

      return(
        <div className="login">
        <div className="form-container">
            <img src="logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="" className="from">
                <label for="password" className="label">password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password" />

                <label for="new-password" className="label">Re-enter password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                <input type="submit" value="Confirm" className = "primary-button login-button" />
            </form>
        </div>
    </div>
      );
}

export default Recovery;