function homePage() {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';

    const welcomeTextContainer = document.createElement('div');
    welcomeTextContainer.id = 'welcome-text-container';
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'THE CRESCENT';
    const subtitle = document.createElement('h2');
    subtitle.id = 'subtitle';
    subtitle.textContent = 'EST. 1896';

    welcomeTextContainer.appendChild(title);
    welcomeTextContainer.appendChild(subtitle);
    mainContent.appendChild(welcomeTextContainer);
    content.appendChild(mainContent);
}

export { homePage };