import footerTemplate from '../../templates/footer.hbs';

var footerElement = document.getElementById('footer-template');

if(footerElement) {
    footerElement.innerHTML = footerTemplate({});
}