const projectsList = {
  javascript: {
    shoppingCard: {
      name: 'Shopping Cart',
      translation: 'Carrinho de Compras',
      path: 'shopping-cart',
      miniature: 'https://i.ibb.co/n35vBC6/shopping-cart-miniature.jpg',
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
      url: 'https://matheusmartino97.github.io/04_sd-09-project-todo-list/',
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
      technologies: [],
      libraries: [],
      apis: [],
    },

    misteryLetter: {
      name: 'Mistery Letter',
      translation: 'Carta Misteriosa',
      path: 'mistery-letter',
      miniature: 'https://i.ibb.co/GCQp96M/mistery-letter-miniature.jpg',
      url: 'https://matheusmartino97.github.io/07_sd-09-project-mistery-letter/',
      repository: 'https://github.com/MatheusMartino97/07_sd-09-project-mistery-letter',
      gifs: {
        desktop: 'https://i.ibb.co/JnxC7Cb/mistery-letter-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short: 'O objetivo desta aplicação é estilizar aleatoriamente cada palavra da frase que o usuário escrever.',
        long: {
          paragraphs: {
            1: 'O objetivo deste projeto da Trybe, ao meu ver, foi fazer com que os alunos treinassem e se familiarizassem com a manipulação de classes CSS.',
            2: 'Durante o desenvolvimento deste projeto pude entender melhor como os objetos JavaScript são úteis para encapsular, e facilitar o acesso de elementos de mesmo contexto.'
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      libraries: [],
      apis: [],
    },
  },

  react: {
    trybeWallet: {
      name: 'Trybe Wallet',
      translation: 'Carteira da Trybe',
      path: 'trybe-wallet',
      miniature: 'https://i.ibb.co/ccbL5Ft/trybe-wallet-miniature.jpg',
      url: 'https://matheusmartino97.github.io/19_sd-09-project-trybewallet/#/',
      repository:
        'https://github.com/MatheusMartino97/19_sd-09-project-trybewallet',
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
      apis: [],
    },

    catsVsDogs: {
      name: 'Cats vs Dogs',
      translation: 'Gatos vs Gatos',
      path: 'cats-vs-dogs',
      miniature: 'https://i.ibb.co/Q9QkcQy/cats-vs-dogs-miniature.jpg',
      url: 'https://matheusmartino97.github.io/cat-vs-dog-customer-register/#/',
      repository:
        'https://github.com/MatheusMartino97/cat-vs-dog-customer-register',
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
            2: 'Neste site, o usuário pode se cadastrar e informar se gosta de gatos ou cachorros. Quando fizer login, iram aparecer fotos aletórias do animal escolhido.',
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      libraries: ['react', 'react-router-dom', 'redux', 'react-redux'],
      apis: [
        'https://aws.random.cat/meow',
        'https://dog.ceo/api/breeds/image/random',
      ],
    },


  pokedex: {
    name: 'Pokedex',
    translation: 'Pokedex',
    path: 'pokedex',
    miniature: 'https://i.ibb.co/FbKndcj/pokedex-miniature.jpg',
    url: 'https://matheusmartino97.github.io/pokedex-react/',
    repository: 'https://github.com/MatheusMartino97/pokedex-react',
    gifs: {
      desktop: 'https://i.ibb.co/GcJQqGk/pokedex-desktop.gif',
      mobile: 'https://i.ibb.co/175hqYn/pokedex-mobile.gif',
    },
    descriptions: {
      short: 'Um pokedex simples feito com react',
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

  // projectName: {
  //   name: '',
  //   translation: '',
  //   path: '',
  //   miniature: '',
  //   url: '',
  //   repository: '',
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
};

export default projectsList;