function contactPage() {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';

    const githubLink = document.createElement('a');
    githubLink.id = 'github-link';
    githubLink.setAttribute('href', 'https://github.com/AlmirBunjaku');
    githubLink.textContent = 'Github';

    const emailLink = document.createElement('a');
    emailLink.id = 'email-link';
    emailLink.setAttribute('href', 'mailto:almirbunjaku@gmail.com');
    emailLink.textContent = 'Email';

    contactContainer.appendChild(githubLink);
    contactContainer.appendChild(emailLink);
    mainContent.appendChild(contactContainer);
    content.appendChild(mainContent);
}

export { contactPage };