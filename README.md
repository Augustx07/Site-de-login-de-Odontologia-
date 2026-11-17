# Site de Login para Clínica de Odontologia

Páginas de **login** e **cadastro** para uma clínica odontológica, criadas com foco em **acessibilidade** e com **assistente de voz**, para que mais pessoas consigam usar o sistema com facilidade.

> Projeto de front-end (interface). Ainda não há servidor nem banco de dados, então o login e o cadastro não autenticam de verdade.

## Funcionalidades

- **Tela de login** (`index.html`) com campos de e-mail e senha e link para cadastro
- **Tela de cadastro** (`cadastro.html`) com nome completo, e-mail e senha
- **Assistente de voz** em português (pt-BR), com os comandos:
  - "email": foca o campo de e-mail
  - "senha": foca o campo de senha
  - "entrar": aciona o botão de entrar
  - "cadastro": abre a tela de cadastro
- **Modo escuro e modo claro**, com botão para alternar
- **Acessibilidade:**
  - campos com `label` associado e atributos ARIA (`aria-required`, `aria-live`)
  - destaque visível de foco (contorno de 4px) para navegação pelo teclado
  - página em `lang="pt-BR"` e layout responsivo

## Tecnologias

- HTML5
- CSS3
- JavaScript (Web Speech API para o reconhecimento de voz)

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Augustx07/Site-de-login-de-Odontologia-.git
   ```
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

O assistente de voz funciona melhor no **Google Chrome** ou **Microsoft Edge**, que têm suporte ao reconhecimento de voz. É preciso permitir o uso do microfone.

## Estrutura

```
├── index.html      # tela de login
├── cadastro.html   # tela de cadastro
├── estilo.css      # estilos (inclui modo escuro)
└── js/
    └── voice.js    # assistente de voz e alternância de tema
```

## Demonstração

<img width="1913" height="958" alt="Captura de tela 2026-11-17 172812" src="https://github.com/user-attachments/assets/d25b5090-e18b-433b-b022-50cf939cd641" />


## Próximos passos

- Conectar login e cadastro a um servidor e banco de dados
- Validar os campos do formulário
- Ampliar os comandos do assistente de voz
- Testar a acessibilidade com leitores de tela

## Autor

**Pedro Augusto dos Santos Vieira**
Estudante de Engenharia de Software · [GitHub](https://github.com/Augustx07) · [LinkedIn](https://www.linkedin.com/in/pedro-augusto-306770342)
