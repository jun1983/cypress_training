

describe('DropDown Select Test', ()=>{
   it('select combobox', ()=> {
       cy.visit('https://obstaclecourse.tricentis.com/Obstacles/73588/');
       cy.get('#clickme').should('exist');
       cy.get('#clickme').click();
       cy.wait(1000);

       cy.get('#randomtext').should('exist');
       // cy.get('#randomtext').should('not.be.empty');

       cy.get('#randomtext').invoke('val').then((val) => {
           console.log(val);
           cy.get('#selectlink').children().each(($el) => {
                   if ($el.text() === val) {
                       cy.get('#selectlink').select($el.text());
                   }
               }
           );
           cy.get('#submitanswer').click();
       });
   });
});


