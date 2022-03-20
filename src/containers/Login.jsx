import React from 'react';
import '../styles/login.css';


const Login = () => {
    return(
<section>
        <div class="imgBx">
            <img src="img/puerto.jpg" alt="logo" />
        </div>
        <div class="contentBx">
         <div class="formBx">
             <h2>Login</h2>
             <form>
                 <div class="inputBx">
                     <span>Username</span>
                     <input type="text" name="" />
                 </div>
                 <div class="inputBx">
                     <span>Password</span>
                     <input type= "password" name = "" />
                 </div>
                 <div class="remember">
                     <label><input type="checkbox" name = "" /> Remember Me</label>
                 </div>
                 <div class="inputBx">
                    <input type= "submit" value="Sing In" name = "" />
                 </div>
                 <div class="inputBx">
                     <p>No tienes Cuenta?<a href="#">Sing up</a></p>
                 </div>
             </form>
             <h3>Redes Sociales</h3>
             <ul class="sci">
                 <li><img src="img/247.png" alt="facboo"/></li>
                 <li><img src="img/246.png" alt="twte" /></li>
                 <li><img src="img/001-logotipo-de-instagram.png" alt="insta" /></li>
             </ul>
         </div>   
        </div>
    </section>
    );
}

export default Login;