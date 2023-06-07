const xml2js = require('xml2js')

describe("", () => {
    it("Obstacle #72946", () => {
        cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72946');
        // download the xml file
        cy.request({
            url: '/Obstacles/GetObstacleFile?obstacleId=72946&filename=Catalog.xml',
            method: 'GET',
            encoding: 'binary',
          }).then((response) => {
            const fileName = 'Catalog.xml';
            cy.writeFile(fileName, response.body, 'binary');
          });
        // convert xml to json
        cy.readFile('Catalog.xml').then((xmlContent) => {
            const parser = new xml2js.Parser();
            parser.parseString(xmlContent, (err, result) => {
              if (err) {
                throw new Error('Failed to parse XML');
              }
        // read json file and extract the numbers
              const jsonContent = JSON.stringify(result);
              const data = JSON.parse(jsonContent)
              const catalog = data.catalog;
                catalog.number.forEach((item) => {
                  if (item.$.id === "Sue") {
                    const prefix = item.prefix[0];
                    const number = item.number[0];
                    const fullNumber = prefix.concat(number);
                    cy.get('#NumberSue').type(fullNumber);
                    cy.contains("Good job!")
                  }
                });
            });
          });

})
})
