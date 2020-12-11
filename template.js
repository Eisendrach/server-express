

function TemplateString(a,b) {
    let nome = a
    let cognome = b

    return(`
                <h1>Benvenuto visitatore, tu dovresti essere ${nome}  ${cognome} se non erro"</h1> `
    )
}
module.exports={TemplateString}