import NavBar from "../components/nav_bar";

class BasePage {
    navBar() {
        return new NavBar(cy.get(`nav.primary-navigation`).eq(0));
    }
}

export default BasePage