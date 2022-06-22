import wafflesImg from '../../common/assets/images/waffles.jpg';

import { Container, Header, Content } from './styles';

export const ReceiptPage = () => {
  return (
    <Container>
      <Header>
        <h1>Waffle Clássico</h1>

        <a
          href="https://unsplash.com/photos/dEUyLofZe5o"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wafflesImg} alt="Waffles" />
        </a>

        <figcaption>
          Image taken from
          <a
            href="https://unsplash.com/photos/dEUyLofZe5o"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </figcaption>
      </Header>

      <Content>
        <h2>Ingredientes</h2>
        <ul>
          <li>2 xicaras (chá) de farinha de trigo</li>
          <li>2 colheres (sopa) de açúcar</li>
          <li>2 colheres (chá) de fermento em pó</li>
          <li>1/2 colher (chá) de sal</li>
          <li>2 colheres de amido de milho</li>
          <li>3 ovos batidos</li>
          <li>4 colheres (sopa) manteiga sem sal derretida</li>
          <li>1 e 3/4 xícara (chá) de leite</li>
          <li>1 colher (sopa) de essência de baunilha</li>
        </ul>

        <h2>Modo de Preparo</h2>
        <ol>
          <li>
            Peneire em um recipiente a farinha de trigo, o açúcar, o amido, o
            fermento e o sal. Reserve
          </li>
          <li>
            Em outro recipiente misture os ovos batidos com leite, a manteiga
            derretida e a essência de baunilha.
          </li>
          <li>
            Despeje sobre a mistura de farinha e rapidamente incorpore os
            ingredientes.
          </li>
          <li>
            Aqueça o aparelho para Waffles. Coloque uma concha rasa de massa e
            espalhe até cobrir o molde do aparelho, feche a tampa e deixe assar
            até a massa ficar bem dourada.
          </li>
          <li>
            Retire com espátulas de silicone. Sirva com mel, frutas ou geleia.
          </li>
        </ol>

        <h2>Informações Adicionais</h2>
        <p>Você poderá servir este Waffles no café da manhã com geleia.</p>
        <p>
          Feito com 💜 por Marcos Favarão.
          <span>
            <a
              href="https://github.com/marcosfavarao"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch! ✌
            </a>
          </span>
        </p>
      </Content>
    </Container>
  );
};
