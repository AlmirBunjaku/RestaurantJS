function contactPage() {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';

    const contactHeading = document.createElement('h1');
    contactHeading.id = 'contact-heading';
    contactHeading.textContent = 'Contact';
    mainContent.appendChild(contactHeading);

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';

    const githubLink = document.createElement('a');
    githubLink.id = 'github-link';
    githubLink.setAttribute('href', 'https://github.com/AlmirBunjaku');
    githubLink.textContent = 'Github';

    const mailLink = document.createElement('a');
    mailLink.id = 'mail-link';
    mailLink.setAttribute('href', 'mailto:almirbunjaku@gmail.com');
    mailLink.textContent = 'Mail';

    contactContainer.appendChild(githubLink);
    contactContainer.appendChild(mailLink);
    mainContent.appendChild(contactContainer);
    content.appendChild(mainContent);
}

export { contactPage };