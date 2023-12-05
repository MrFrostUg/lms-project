import { navBrandMenu } from "./components/navbar.js";
export function headerMenu(){
    const headerContainer = document.createElement("header")
    headerContainer.innerHTML =navBrandMenu()
    return headerContainer;
}