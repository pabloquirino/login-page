# Login-page
Este projeto é uma tela de login e registro, visando a prática de manipulação do DOM e estilização pelo javascript.

### Descrição do projeto:
Este projeto consiste em uma tela de login e registro, visando a prática de manipulação do DOM e estilização pelo javascript com funcionalidades como: uma 'maquina de escrever' na tela home, ocultar e mostrar senha, gerador de senhas, verificador de força de senha e validador de formulário com regex.

*Créditos da criação do layout e estilização para [codehal](https://www.youtube.com/@codehal)*

*Este website não é responsivo* ⚠️

### Tecnologias utilizadas:
- Html
- Css
- Javascript

### Métodos Implementados:
- **typeWriter()**: Dentro de uma estrutura de repetição com setInterval, utiliza o método charAt() em uma string, com o parâmetro (index) = 0, para retornar o primeiro caractere dentro da string, acrescentando index++ para concatenar os próximas caracteres do texto.
 
- **generatePassword()**: Utiliza o método String.fromCharCode(), para retornar uma string criada a partir da tabela de códigos Unicode (que inclui ASCII) para gerar senhas aleatórias com Math.floor(Math.random() * (126 - 32 + 1)) + 32, que retornar caracteres especiais, letras e números aleatórios.
 
- **strengthChecker()**: Inicia com uma variável 'score' com o valor = 0, e um objeto (strengths) com 5 opções de força de senha: 0: muito fraca... 5: perfeito. E acrescenta +1 ao score caso a senha satisfaça requisitos de força, como por exemplo, senha com mais de 8 caractreres, pelo menos um caractere especial e etc. Por fim acessa a string do objeto (strengths) para manipular o texto no DOM, e um switch - case para acessar qual score da senha, alterando a cor de verificação de força no DOM.

- **isNameValid()**: Retorna true se um nome for válido pelo regex, começando com uma string e no mínimo 3 caracteres.
- **isEmailValid()**: Retorna true se o email tiver um formato padrão.
- **isPasswordValid()**: Retorna true se o score da função de checa a forca de senha é === 5.

### Veja o site aqui:
[Login Page](https://pabloquirino.github.io/login-page/src/)

### Captura de tela:
![PrintScreen do projeto](/images/login.png) 

 ![PrintScreen do projeto](/images/register.png) 
