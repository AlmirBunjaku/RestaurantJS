function menuPage() {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';

    const menuHeading = document.createElement('h1');
    menuHeading.id = 'menu-heading';
    menuHeading.textContent = 'Menu';
    mainContent.appendChild(menuHeading);

    const topSection = document.createElement('div');
    topSection.id = 'top-section';
    const topSectionItems = document.createElement('pre');
    topSectionItems.id = 'top-section-items';
    topSectionItems.textContent = 'pressed gravlax puree, distressed lamb tartare & acorn 10\r\nnatural corn with turned ham reduction 8\r\npan-seared booze with locally-sourced pork belly 13';
    topSection.appendChild(topSectionItems);
    mainContent.appendChild(topSection);

    const middleSection = document.createElement('div');
    middleSection.id = 'middle-section';
    const middleSectionItems = document.createElement('pre');
    middleSectionItems.id = 'middle-section-items';
    middleSectionItems.textContent = 'salt 12\r\ncountry oyster with crafted monkfish 16\r\nfingerling marrow bowl with pepper sliders & fennel 10\r\nfree-range rice 9';
    middleSection.appendChild(middleSectionItems);
    mainContent.appendChild(middleSection);

    const bottomSection = document.createElement('div');
    bottomSection.id = 'bottom-section';
    const bottomSectionItems = document.createElement('pre');
    bottomSectionItems.id = 'bottom-section-items';
    bottomSectionItems.textContent = 'rubbed shell bean, frightened fig & sea-salt sungold crumble 16\r\nartisanal butter 15\r\nkale 15';
    bottomSection.appendChild(bottomSectionItems);
    mainContent.appendChild(bottomSection);

    content.appendChild(mainContent);
}

export { menuPage };