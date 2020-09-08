import { homePage } from './homePage';
import { contactPage } from './contactPage';
import { menuPage } from './menuPage';

function navBar() {
    const content = document.querySelector('#content');

    const navBarContainer = document.createElement('div');
    navBarContainer.id = 'nav-bar-container';
    content.appendChild(navBarContainer);

    const navBar = document.createElement('ul');
    navBar.id = 'nav-bar';
    navBarContainer.appendChild(navBar);

    const home = document.createElement('li');
    home.id = 'home';
    home.className = 'nav-link';
    home.textContent = 'Home';
    navBar.appendChild(home);

    const menu = document.createElement('li');
    menu.id = 'menu';
    menu.className = 'nav-link';
    menu.textContent = 'Menu';
    navBar.appendChild(menu);

    const contact = document.createElement('li');
    contact.id = 'contact';
    contact.className = 'nav-link';
    contact.textContent = 'Contact';
    navBar.appendChild(contact);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const mainContent = document.querySelector('#main-content');
            navLinks.forEach((navLink) => {
                navLink.style.borderBottom = '1px solid transparent';
            })
            if (link.textContent == 'Home') {
                mainContent.remove();
                homePage();
                document.querySelector('#home').style.borderBottom = '1px solid hsl(50,50%,50%)';
            } else if (link.textContent == 'Menu') {
                mainContent.remove();
                menuPage();
                document.querySelector('#menu').style.borderBottom = '1px solid hsl(50,50%,50%)';
            } else if (link.textContent == 'Contact') {
                mainContent.remove();
                contactPage();
                document.querySelector('#contact').style.borderBottom = '1px solid hsl(50,50%,50%)';
            }
        })
    })
}

export { navBar };