const content = document.querySelector('#content');

const navBar = document.createElement('ul');
navBar.id = 'nav-bar';
content.appendChild(navBar);

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
        const mainContent = document.querySelector('#mainContent');
        if (link.textContent == 'Home') {
            mainContent.remove();
            homePage();
        } else if (link.textContent == 'Menu') {
            mainContent.remove();
            menuPage();
        } else if (link.textContent == 'Contact') {
            mainContent.remove();
            contactPage();
        }
    })
    link.addEventListener('mouseover', () => {
        link.className = 'hoveredLink';
        const pageLinks = document.querySelectorAll('.nav-link');
        pageLinks.forEach((text) => {
            text.style.color = 'hsl(0,100%,50%)';
        })
    })
    link.addEventListener('mouseout', () => {
        const pageLinks = document.querySelectorAll('.nav-link');
        pageLinks.forEach((text) => {
            text.style.color = 'hsl(0,100%,0%)';
        })
        link.className = 'nav-link';
    })
})

export default navBar;