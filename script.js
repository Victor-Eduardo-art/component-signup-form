function iniciar () {
   const inputNome = document.getElementById('nome')
   const inputSobNome = document.getElementById('sobNome')
   const inputEmail = document.getElementById('email')
   const inputSenha = document.getElementById('senha')
   const btnEnviarDados = document.getElementById('enviarDados')

   btnEnviarDados.addEventListener('click', () => {
      verificar(inputNome)
      verificar(inputSobNome)
      verificar(inputEmail)
      verificar(inputSenha)
   })
}

function verificar (elemento) {
   let erro = false

   const containerInput = elemento.parentNode
   const form = document.getElementsByClassName('form')[0]
   const imgErro = document.createElement('img')
   const msgErro = document.createElement('span')

   msgErro.classList.add('msgErro')
   imgErro.src = './images/icon-error.svg'
   imgErro.classList.add('imgErro')

   if (elemento.value === null || elemento.value == '' || elemento.value == ' ') {
      // campo vazio

      erro = true
      msgErro.innerHTML = 'empty field'
   }

   if (elemento.id === 'email') {
      if (elemento.value.lastIndexOf('@') === -1 || elemento.value.lastIndexOf('.') === -1) {
         // email invalido

         erro = true
         msgErro.innerHTML = 'invalid email'
      }
   }

   if (elemento.id === 'senha') {
      if (elemento.value.length < 6) {
         // senha deve ter pelo menos 6 caracteres

         erro = true
         msgErro.innerHTML = 'password must be at least 6 characters long'
      }
   }

   
   if (erro === false) {
      if (elemento.nextElementSibling != null) {
         
         document.getElementsByClassName('imgErro')[0].parentNode.removeChild(document.getElementsByClassName('imgErro')[0])

         document.getElementsByClassName('msgErro')[0].parentNode.removeChild(document.getElementsByClassName('msgErro')[0])

         elemento.classList.remove('inputErro')
      }
      
      enviarDados()
   } else {
      if (elemento.nextElementSibling === null) {

         form.insertBefore(msgErro, containerInput.nextElementSibling)
         containerInput.insertBefore(imgErro, elemento.nextElementSibling)
         elemento.classList.add('inputErro')
      }
   }
}

function enviarDados () {
   // essa função vai ficar vazia por que eu ainda não sei conectar o front-end com o back-end
}

window.addEventListener('load', () => {
   iniciar()
})