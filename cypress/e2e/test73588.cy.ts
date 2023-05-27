

describe('DropDown Select Test', ()=>{
   it('select combobox', ()=> {
       cy.visit('https://obstaclecourse.tricentis.com/Obstacles/73588/');
       cy.get('#clickme').should('exist');
       cy.get('#clickme').click();
       cy.wait(1000);

       cy.get('#randomtext').invoke('text').then((generatedString) => {
           console.log(generatedString);
           cy.get('#selectlink').children().each(($el) => {
                   if ($el.text() === generatedString) {
                       cy.get('#selectlink').select($el.text());
                   }
               }
           );
           cy.get('#submitanswer').click();
       });
   });
});


