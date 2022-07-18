function taAberto(dataCliente) {
    const horarioCliente = +dataCliente
    const horarioAbertura = dataCliente.setHours(8)
    const horarioFechamento = dataCliente.setHours(18)

    if (horarioCliente >= horarioAbertura && horarioCliente <= horarioFechamento) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

taAberto(new Date(2015, 1, 1, 12)) // deve retornar true
taAberto(new Date(2015, 1, 1, 2)) // deve retornar false