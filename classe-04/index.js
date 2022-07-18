const { addBusinessDays } = require("date-fns")

function taAberto(dataCliente) {

    if (dataCliente.getHours() >= 8 && dataCliente.getHours() <= 18
        && dataCliente.getDay() >= 1 && dataCliente.getDay() <= 5
    ) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

const teste = new Date(2021, 0, 12)

console.log(addBusinessDays(teste, 10))

taAberto(new Date(2021, 3, 25, 12)); // deve retornar false, pois é um domingo
taAberto(new Date(2021, 3, 26, 12)); // deve retornar true, pois é uma segunda
taAberto(new Date(2021, 3, 26, 7, 59)); // deve retornar false, pois é muito cedo (7h59)