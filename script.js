function gerarContagem() {
    // Iniciar varoáveis
    var inicio = document.querySelector('#iInicio').value
    var final = document.querySelector('#iFinal').value
    var incre = document.querySelector('#iIncre').value
    var p = document.querySelector('p')

    // Condição para que o usuário não deixe nenhum dos espaços vazio.
    if (inicio.length > 0 && final.length > 0 && incre.length > 0) {
        
        // Converter os valores dos inputs pra Number
        inicio = Number(inicio)
        final = Number(final)
        incre = Number(incre)

        // Condição IF pra quando o usuário Inserir 0 no Incremento(Que pode travar a página).
        if (incre <= 0) {
            alert('[ERRO]: A página irá travar se você deixa o Incremento como 0 ou abaixo.\nPara sua segurança, o Incremento valerá 1.')

            incre = 1
        }

        p.innerText = ''

        // Condição para quando pra quando o Inicio for menor que o Final
        if (inicio < final) {

            // Estrutra For para escrever os números na tela
            for (inicio; inicio <= final; inicio += incre) {
                p.innerText += inicio >= 0 ? ` ${inicio} \u{1F449}` : ` (${inicio}) \u{1F449}`
            }

        // Condição contraria à anterior
        } else {
            
            // Estrutra For para escrever os números na tela
            for (inicio; inicio >= final; inicio -= incre) {
                p.innerText += inicio >= 0 ? ` ${inicio} \u{1F449} ` : ` (${inicio}) \u{1F449}`
            }
        }

        p.innerText += ' \u{1F3C1}'

    // Exibir mensagem de erro na tela pra quando o usuário não digitar nada no Início
    } else if (inicio.length == 0) {
        
        alert('[ERRO]: Você precisa inserir algum valor de Início.')
    
    // Exibir mensagem na tela quando o usuário não inserir o número Final
    } else if (final.length == 0) {

        alert('[ERRO]: Você precisa inserir algum valor Final.')
    
    // Exibir mensagem na tela quando o usuário não inserir o Incremento
    } else {
        alert('[ERRO]: O Incremento está vazio.')
    }
}