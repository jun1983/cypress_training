import { parseString } from 'xml2js';

describe("", () => {
  it("Obstacle #72946", () => {
    cy.visit('https://obstaclecourse.tricentis.com/Obstacles/72946');
    // Get the body text of the xml file
    cy.request({
      url: '/Obstacles/GetObstacleFile?obstacleId=72946&filename=Catalog.xml',
      method: 'GET',
      encoding: 'binary',
    })
    // Parse to xml and convert to json
    .its('body').then((xml) => {
      parseString(xml, (err, result) => {
        if (err) {
          console.error('Error converting XML to JSON:', err);
        } else {
          const jsonContent = JSON.stringify(result);
          const data = JSON.parse(jsonContent);
    // Iterate through all users and put Sue's number as input
          data.catalog.number.forEach((item) => {
            if (item.$.id === "Sue") {
              const prefix = item.prefix[0];
              const number = item.number[0];
              const fullNumber = prefix.concat(number);
              cy.get('#NumberSue').type(fullNumber);
              cy.contains("Good job!")
            }
          });
        }
      })
    })
  })
})
