
describe("debe renderizar la app",()=>{
    it("Visitar la pagina",()=>{
        cy.visit("http://localhost:3000/")
    })
    it("Debe tener un titulo",()=>{
        cy.get(".title").should("contain", "Listado de pokemon")
    })
    it("Debe tener una barra de busqueda que filtre pokemones",()=>{
        cy.get('input[name="searchInput"]').type("bu")
        cy.get('div#root div.sc-bczRLJ.fiQTzU > div').should("have.length", 2)
        cy.get('input[name="searchInput"]').clear()
    })
    it("Debe mostrar el detalle del pokemon seleccionado al hacer click o mostrar el primer pokemon",()=>{
        cy.get('div#root div.sc-bczRLJ.fiQTzU > div').eq(3).click()
        cy.get('div#root div.pokemonInfo').should("contain", "charmander")
    })
    it("Debe cambiar la pagina al hacer click en siguiente",()=>{
        cy.get('div#root button:nth-child(2)').click()
        cy.get('div#root div.sc-bczRLJ.fiQTzU > div:nth-child(1) > p:nth-child(3)').eq(0).should("contain", "Charmeleon")
    })
    
})