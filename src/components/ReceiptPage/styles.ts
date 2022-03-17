import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1440px;

  background: var(--foreground);

  margin: 0 auto;
  margin-top: 7rem;

  border: 0;
  border-radius: 25px;

  overflow: hidden;
`;

export const Header = styled.header`
  width: 95%;
  margin: 0 auto;

  h1 {
    padding: 2rem;
    text-align: center;
  }

  img {
    width: 100%;
    height: 600px;

    border: 0;
    border-radius: 20px;
    object-fit: cover;

    transition: filter 0.75s;
    &:hover {
      filter: grayscale(50%);
      cursor: pointer;
    }
  }

  figcaption {
    margin: -0.25rem 0 1rem 0;
    text-align: right;

    a {
      color: var(--content);
      border: 0;
      text-decoration: none;
      margin: 0.25rem;

      transition: all 0.5s;
      &:hover {
        color: #8257e6;
        filter: brightness(0.9);
      }
    }
  }
`;

export const Content = styled.section`
  width: 95%;
  margin: 0 auto;

  letter-spacing: 0.75px;

  h2 {
    padding: 1rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  li {
    text-align: left;
    margin-left: 2rem;
    padding: 0.25rem 1rem;
  }

  p {
    text-align: left;
    margin-left: 1rem;

    &:last-child {
      margin: 2rem 0;
      text-align: center;
    }

    a {
      color: var(--content);
      border: 0;
      text-decoration: none;
      margin: 0.5rem;

      transition: all 0.5s;
      &:hover {
        color: #8257e6;
        filter: brightness(0.9);
      }
    }
  }
`;
