
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

    acordeonTriggers.forEach(trigger => { //percorre todos os acordeons
    trigger.addEventListener('click', (e) => { //quando o acordeon for clicado
        const acordeon = trigger.parentElement //pega o acordeon pai do acordeon clicado
        const isOpen = acordeon.classList.contains('open') //verifica se o acordeon pai tem a classe open

        if(isOpen){
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})

