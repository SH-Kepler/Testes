import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente App.js', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
  });
  test('O primeiro link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
  });
  test('O primeiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const favLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favLink).toBeInTheDocument();
  });
  test(`Teste se a aplicação é redirecionada para a página inicial,
    na URL / ao clicar no link Home da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });

    expect(homeLink).toBeInTheDocument();

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');

    userEvent.click(homeLink);
    expect(pathname).toBe('/');
  });
  test(`Teste se a aplicação é redirecionada para a página de About,
    na URL /about ao clicar no link About da barra de navegação`, () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });

    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);
    const aboutText = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    const aboutImg = screen.getByRole('img', { alt: 'Pokédex' });
    expect(aboutText).toBeInTheDocument();
    expect(aboutImg).toBeInTheDocument();
  });
  test(`Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,
  na URL /favorites ao clicar no link Favorite Pokémons da barra de navegação`, () => {
    renderWithRouter(<App />);
    const favLink = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(favLink).toBeInTheDocument();

    userEvent.click(favLink);
    const favText = screen.getByRole('heading', { name: /Favorite Pokémons/i, level: 2 });
    expect(favText).toBeInTheDocument();
  });
  test(`Teste se a aplicação é redirecionada para a página
  Not Found ao entrar em uma URL desconhecida`, () => {
    const { history, container } = renderWithRouter(<App />);
    const constentNotFound = '/NotFound';
    history.push(constentNotFound);

    expect(container.innerHTML).toMatch(/Not Found/i);
  });
});
