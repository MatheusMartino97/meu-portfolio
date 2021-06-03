const projectsList = {
  frontend: {
    javascript: {
      shoppingCard: {
        name: 'Shopping Cart',
        translation: 'Carrinho de Compras',
        path: 'shopping-cart',
        miniature: 'https://i.ibb.co/7XZ5QrC/shopping-cart-miniature.jpg',
        url: 'https://matheusmartino97.github.io/12_sd-09-project-shopping-cart/',
        repository:
          'https://github.com/MatheusMartino97/12_sd-09-project-shopping-cart',
        gifs: {
          desktop: 'https://i.ibb.co/Cm0W0Lh/ezgif-com-gif-maker.gif',
          mobile: '',
        },
        descriptions: {
          short:
            'Um carrinho de compras básico utilizando a API do Mercado Livre Brasil.',
          long: {
            paragraphs: {
              1: 'O meu primeiro contato com consumo de apis foi desenvolvendo este projeto. Aprendi como fazer requisições para uma API, como interpretar sua documentação e como tratar sua resposta para que esta esteja no formato desejado.',
              2: 'Além disso, pratiquei a manipular e utilizar o Local Storage para guardar informações necessárias dos usuários da aplicação.',
            },
          },
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        libraries: [],
        apis: ['https://api.mercadolibre.com/sites/MLB/search?q=$QUERY'],
      },
  
      colorGuess: {
        name: 'Color Guess',
        translation: 'Adivinhe a Cor',
        path: 'color-guess',
        miniature: 'https://i.ibb.co/1sZZd3t/color-guess-miniature.jpg',
        url: 'https://matheusmartino97.github.io/06_sd-09-project-color-guess/',
        repository:
          'https://github.com/MatheusMartino97/06_sd-09-project-color-guess',
        gifs: {
          desktop: 'https://i.ibb.co/T8WLDr8/color-guess-desktop.gif',
          mobile: '',
        },
        descriptions: {
          short:
            'Jogo onde se deve acertar qual é a cor correspondente com o valor RGB.',
          long: {
            paragraphs: {
              1: 'Durante o desenvolvimento deste projeto pude treinar e entender melhor como funcionam implementações de regras de negócio básicas.',
              2: 'Este foi o primeiro projeto em que tive contato com números aleatórios no JavaScript. Aprendi a gerá-los e a manipulá-los para que tenham o formato desejado.',
            },
          },
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        libraries: [],
        apis: [],
      },
  
      toDoList: {
        name: 'To Do List',
        translation: 'Lista de Tarefas',
        path: 'to-do-list',
        miniature: 'https://i.ibb.co/cbvzQ6M/to-do-list-miniature.jpg',
        url: 'https://matheusmartino97.github.io/04_sd-09-project-todo-list/',
        repository:
          'https://github.com/MatheusMartino97/04_sd-09-project-todo-list',
        gifs: {
          desktop: 'https://i.ibb.co/28dvCTY/to-do-list-gif-desktop.gif',
          mobile: 'https://i.ibb.co/8PBGwpm/to-do-list-gif-mobile.gif',
        },
        descriptions: {
          short: 'Lista de tarefa simples estilizada com Bulma.',
          long: {
            paragraphs: {
              1: 'Este aqui foi uns dos primeiros projetos que desenvolvi na Trybe. Esta lista de tarefas, que, apesar de ser relativamente simples, me fez perceber que desenvolvimento de softwares seria, definitivamente, a minha profissão',
              2: 'Durante o desenvolvimento deste projeto, percebi também a importância da metodologia Mobile First. Entendi que pode ser extremamente vantajoso produzir primeiro para telas pequenas e, posteriormente, expandir para telas maiores.',
              3: 'Além disso, foi aqui que tive o meu primeiro contato com qualquer tipo de biblioteca externa. Utilizei Bulma para estilizar este aplicativo.',
            },
          },
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        libraries: ['Bulma'],
        apis: [],
      },
  
      pixelsArt: {
        name: 'Pixels Art',
        translation: 'Arte com Pixels',
        path: 'pixels-art',
        miniature: 'https://i.ibb.co/5r6wCCZ/pixel-art-miniature.jpg',
        url: 'https://matheusmartino97.github.io/03_sd-09-project-pixels-art/',
        repository:
          'https://github.com/MatheusMartino97/03_sd-09-project-pixels-art',
        gifs: {
          desktop: 'https://i.ibb.co/jgPXJ6g/pixels-art-desktop.gif',
          mobile: '',
        },
        descriptions: {
          short: 'Um canvas simples feito com JavaScript puro.',
          long: {
            paragraphs: {
              1: 'Um projeto bem divertido feito com HTML, CSS e JavaScript puro.',
              2: 'Pra mim, a parte mais interessante de desenvolvê-lo, como iniciante em programação, foi treinar iterações e me familiarizar como a lógica de programação é aplicada na pratica.',
              3: 'Essa é a primeira página que um aluno desenvolve utilizando JavaScript na formação da Trybe e, acredito que, tenha sido importantíssimo para nos dar motivação e nos apresentar a imensidão de posibilidades que um programador pode desenvolver.',
            },
          },
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        libraries: [],
        apis: [],
      },
  
      memeGenerator: {
        name: 'Meme Generator',
        translation: 'Gerador de Memes',
        path: 'meme-generator',
        miniature: 'https://i.ibb.co/gvMrKKr/meme-generator-miniature.jpg',
        url:
          'https://matheusmartino97.github.io/05_sd-09-project-meme-generator/',
        repository:
          'https://github.com/MatheusMartino97/05_sd-09-project-meme-generator',
        gifs: {
          desktop: 'https://i.ibb.co/M7NXbFC/meme-generator-desktop.gif',
          mobile: '',
        },
        descriptions: {
          short:
            'Essa aplicação possibilita o usuário a colocar legenda em uma foto a sua escolha.',
          long: {
            paragraphs: {
              1: 'O objetivo deste projeto bônus da Trybe é desenvolver uma aplicação que possibilita o usuário a colocar legendas em imagens que foram carregadas de seu computador.',
              2: '',
            },
          },
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        libraries: [],
        apis: [],
      },
  
      misteryLetter: {
        name: 'Mistery Letter',
        translation: 'Carta Misteriosa',
        path: 'mistery-letter',
        miniature: 'https://i.ibb.co/GCQp96M/mistery-letter-miniature.jpg',
        url:
          'https://matheusmartino97.github.io/07_sd-09-project-mistery-letter/',
        repository:
          'https://github.com/MatheusMartino97/07_sd-09-project-mistery-letter',
        gifs: {
          desktop: 'https://i.ibb.co/JnxC7Cb/mistery-letter-desktop.gif',
          mobile: '',
        },
        descriptions: {
          short:
            'O objetivo desta aplicação é estilizar aleatoriamente cada palavra da frase que o usuário escrever.',
          long: {
            paragraphs: {
              1: 'O objetivo deste projeto da Trybe, ao meu ver, foi fazer com que os alunos treinassem e se familiarizassem com a manipulação de classes CSS.',
              2: 'Durante o desenvolvimento deste projeto pude entender melhor como os objetos JavaScript são úteis para encapsular, e facilitar o acesso de elementos de mesmo contexto.',
            },
          },
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        libraries: [],
        apis: [],
      },
    },
  
    react: {
      triviaGame: {
        name: 'Trivia Game',
        translation: 'Jogo de Trivia',
        path: 'trivia-game',
        url: 'https://matheusmartino97.github.io/20_sd-09-project-trivia-react-redux/#/',
        repository: 'https://github.com/MatheusMartino97/20_sd-09-project-trivia-react-redux',
        miniature: 'https://i.ibb.co/x8QTCct/trivia-game-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/XYxjD6S/trivia-game-desktop.gif',
          mobile: 'https://i.ibb.co/Ws5dbnB/trivia-game-mobile.gif',
        },
        descriptions: {
          short: 'Jogo de trivia desenvolvido com React e Redux.',
          long: {
            paragraphs: {
              1: 'O Trivia Game foi desenvolvido em grupo durante a minha formação na Trybe.',
              2: 'Este projeto nos proporcionou bastante desenvoltura quando se trata de desenvolver com React e Redux. Além disso, também praticamos nossas soft-skills com nossos colegas de grupo.',
              3: 'Utilizamos o Kanban para nos organizarmos e para tornar ágil a divisão de tarefas.'
            },
          },
        },
        technologies: ['React', 'Redux'],
        libraries: ['react', 'react-router-dom', 'react-redux', 'redux', 'redux-thunk', 'crypto-js', 'emoji-dictionary'],
        apis: ['https://opentdb.com/api_token.php?command=request', 'https://opentdb.com/api.php?amount=$QUANTITY&token=$TOKEN'],
      },
  
      trybeWallet: {
        name: 'Trybe Wallet',
        translation: 'Carteira da Trybe',
        path: 'trybe-wallet',
        url: 'https://matheusmartino97.github.io/19_sd-09-project-trybewallet/#/',
        repository:
          'https://github.com/MatheusMartino97/19_sd-09-project-trybewallet',
        miniature: 'https://i.ibb.co/ccbL5Ft/trybe-wallet-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/TrxfBGh/trybe-wallet-desktop.gif',
          mobile: '',
        },
        descriptions: {
          short: 'Carteira de controle de gastos e conversão de moedas.',
          long: {
            paragraphs: {
              1: 'Esta carteira de gastos, além de registrar o gasto customizado pelo usuário, converte a moeda escolhida para real utilizando taxas de conversão fornecidas por uma API.',
              2: 'No momento em que o usuário adiciona o gasto uma função thunk é despachada, recebendo, assim, a taxa de câmbio mais atualizada possível e, depois que isso é feito, a soma total dos gastos é mostrada no cabeçalho da aplicação.',
            },
          },
        },
        technologies: ['React', 'Redux'],
        libraries: [
          'react',
          'react-router-dom',
          'redux',
          'react-redux',
          'redux-thunk',
          'validator',
        ],
        apis: ['https://economia.awesomeapi.com.br/json/all'],
      },
  
      jobSearch: {
        name: 'Job Search',
        translation: 'Busca de Empregos',
        path: 'job-search',
        url: 'https://matheusmartino97.github.io/job-search-react-redux/#/',
        repository: 'https://github.com/MatheusMartino97/job-search-react-redux',
        miniature: 'https://i.ibb.co/KxZh9TM/job-search-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/6JDvV45/job-search-desktop.gif',
          mobile: 'https://i.ibb.co/KDc5Nc1/job-search-mobile.gif',
        },
        descriptions: {
          short: 'Buscador de vagas de emprego por localização.',
          long: {
            paragraphs: {
              1: 'Esta é mais um projeto que fiz por conta própria para treinar minhas habilidades com React e Redux.',
              2: 'A aplicação usa a localização que o usuário informa para buscar cargos disponíveis na região. Quando um desses cargos é selecionado, as instituições que fornecem tal cargo são apresentadas e ao serem clicadas, uma busca no Google é feita com o nome da instituição e a cidade que foi informada pelo usuário.',
            },
          },
        },
        technologies: ['React', 'Redux'],
        libraries: ['react', 'react-router-dom', 'redux', 'react-redux'],
        apis: ['https://documenter.getpostman.com/view/7929631/TWDZGFKK'],
      },
  
      catsVsDogs: {
        name: 'Cats vs Dogs',
        translation: 'Gatos vs Gatos',
        path: 'cats-vs-dogs',
        url: 'https://matheusmartino97.github.io/cat-vs-dog-customer-register/#/',
        repository:
          'https://github.com/MatheusMartino97/cat-vs-dog-customer-register',
        miniature: 'https://i.ibb.co/Q9QkcQy/cats-vs-dogs-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/hDMNSC7/cats-vs-dogs-desktop.gif',
          mobile: 'https://i.ibb.co/hcmBv01/cats-vs-dogs-mobile.gif',
        },
        descriptions: {
          short:
            'Uma aplicação que se comporta de acordo com as informações do cliente cadastrado.',
          long: {
            paragraphs: {
              1: 'Este foi um projeto que fiz por conta própria para treinar minhas habilidades com React e Redux. Tentei utilizar tudo o que eu vinha aprendendo na graduação da Trybe até então.',
              2: 'Neste site, o usuário pode se cadastrar e informar se gosta de gatos ou cachorros. Quando fizer login, aparecerão fotos aletórias do animal escolhido.',
            },
          },
        },
        technologies: ['React', 'Redux'],
        libraries: ['react', 'react-router-dom', 'redux', 'react-redux'],
        apis: [
          'https://dog.ceo/api/breeds/image/random',
          'https://aws.random.cat/meow',
        ],
      },

      frontEndOnlineStore: {
        name: 'Front-End Online Store',
        translation: 'Loja Virtual Front-End',
        path: 'front-end-online-store',
        url: 'https://matheusmartino97.github.io/17_sd-09-project-frontend-online-store/#/',
        repository: 'https://github.com/MatheusMartino97/17_sd-09-project-frontend-online-store',
        miniature: 'https://i.ibb.co/bBsRbd8/front-end-online-store-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/ckbj1V0/front-end-online-store-desktop.gif',
          mobile: '',
        },
        descriptions: {
          short: 'Front-end de uma loja virtual feito com React.',
          long: {
            paragraphs: {
              1: 'Projeto em grupo feito no módulo sobre desenvolvimento Front-End durante a graduação da Trybe.',
              2: 'Utilizamos o Kanban para organizarmos as divisões de tarefas e adotamos o SCRUM como metodologia ágil.',
              3: 'Note que neste projeto nenhuma tecnologia foi utilizada para nos auxiliar com o problema do "Prop-drilling". O objetivo do projeto foi nos mostrar a importância que as ferramentas como Redux e ContextAPI têm quando se trata de desenvolvimento com React, e como seria complicado trabalhar sem elas.'
            },
          },
        },
        technologies: ['React'],
        libraries: ['react', 'react-router-dom'],
        apis: ['https://api.mercadolibre.com/sites/MLB/categories', 'https://api.mercadolibre.com/sites/MLB/search?category=$categoryId&q=$query', 'https://api.mercadolibre.com/items?ids=$itemId'],
      },

      movieLibraryCRUD: {
        name: 'Movie Library CRUD',
        translation: 'Catálogo de Filmes CRUD',
        path: 'movie-library-crud',
        url: 'https://matheusmartino97.github.io/16_sd-09-project-movie-card-library-crud/#/',
        repository: 'https://github.com/MatheusMartino97/16_sd-09-project-movie-card-library-crud',
        miniature: 'https://i.ibb.co/0qNCLds/movie-library-CRUD-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/qdMPtFM/movie-library-CRUD-desktop.gif',
          mobile: '',
        },
        descriptions: {
          short: 'Um catálogo de cards com informações de filmes implementado com CRUD (Create, Read, Update, Delete).',
          long: {
            paragraphs: {
              1: 'Este foi um projeto do módulo de Front-End da Trybe onde o desafio era desenvolver uma aplicação implementando CRUD.',
              2: 'Além disso, pude desenvolver minhas habilidades com ciclo de vida dos componentes React, props.children e como utilizá-la, a criação de rotas e links com BrowserRouter, Switch, Route, Link e Redirect.'
            },
          },
        },
        technologies: ['React'],
        libraries: ['react', 'react-router-dom'],
        apis: [],
      },
  
      testedPokedex: {
        name: 'Tested Pokedex',
        translation: 'Pokedex Testado',
        path: 'tested-pokedex',
        url:
          'https://matheusmartino97.github.io/18_sd-09-project-react-testing-library/#/',
        repository:
          'https://github.com/MatheusMartino97/18_sd-09-project-react-testing-library',
        miniature: 'https://i.ibb.co/w7CLyvR/tested-pokedex-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/Fb6vZJH/tested-pokedex-desktop.gif',
          mobile: 'https://i.ibb.co/HCqk37W/tested-pokedex-mobile.gif',
        },
        descriptions: {
          short: 'Testando o pokedex com React Testing Library.',
          long: {
            paragraphs: {
              1: 'Este é um projeto, presente a graduação da Trybe, que os alunos são responsáveis por realizar os testes.',
              2: 'Para realizar os testes unitários e de integração, utilizei React Testing Library em conjunto com os matchers do Jest.'
            },
          },
        },
        technologies: ['React Testing Library', 'Jest'],
        libraries: ['@testing-library/jest-dom', '@testing-library/react', '@testing-library/user-event'],
        apis: [],
      },
  
      pokedex: {
        name: 'Pokedex',
        translation: 'Pokedex',
        path: 'pokedex',
        url: 'https://matheusmartino97.github.io/pokedex-react/',
        repository: 'https://github.com/MatheusMartino97/pokedex-react',
        miniature: 'https://i.ibb.co/FbKndcj/pokedex-miniature.jpg',
        gifs: {
          desktop: 'https://i.ibb.co/GcJQqGk/pokedex-desktop.gif',
          mobile: 'https://i.ibb.co/175hqYn/pokedex-mobile.gif',
        },
        descriptions: {
          short: 'Um pokedex simples feito com react.',
          long: {
            paragraphs: {
              1: 'Este projeto foi um exercício da Trybe para os alunos praticarem a sintaxe do React.',
              2: 'O pokedex percorre um objeto de pokemons e mostra na tela cada pokemon com suas informações.',
              3: 'Uma ideia interessante é a possível implementação de consumo de uma API que nos disponibiliza, não só alguns, mas todos os pokemons, assim como suas informações.',
            },
          },
        },
        technologies: ['React'],
        libraries: ['react'],
        apis: [],
      },
    },
  },

  backend: {
    
  }
}

export default projectsList;

  // projectName: {
  //   name: '',
  //   translation: '',
  //   path: '',
  //   url: '',
  //   repository: '',
  //   miniature: '',
  //   gifs: {
  //     desktop: '',
  //     mobile: '',
  //   },
  //   descriptions: {
  //     short: '',
  //     long: {
  //       paragraphs: {
  //         1: '',
  //       },
  //     },
  //   },
  //   technologies: [],
  //   libraries: [],
  //   apis: [],
  // },