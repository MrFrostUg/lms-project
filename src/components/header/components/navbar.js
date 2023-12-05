import {navBrandMenu} from "./navbar-brand.js";
import { navlinksmenu } from "./nav-links.js";
import { userIconMenu } from "./user-login-icon.js";

export const navBrandMenu = function(){
    return `
    <nav class="navbar navbar-expand bg-body-tertiary">
      <div class="container-fluid"> 
      ${navBrandMenu()}
      ${navlinksmenu()}
      </div>
      ${userIconMenu()}  
      </nav>`;

};