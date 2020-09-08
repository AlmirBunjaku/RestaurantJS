function homePage() {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';

    const welcomeTextContainer = document.createElement('div');
    welcomeTextContainer.id = 'welcome-text-container';
    const welcomeText = document.createElement('h1');
    welcomeText.id = 'welcome-text';
    welcomeText.textContent = 'Welcome to Folsom & Rutland!';

    welcomeTextContainer.appendChild(welcomeText);
    mainContent.appendChild(welcomeTextContainer);
    content.appendChild(mainContent);
}

export { homePage };