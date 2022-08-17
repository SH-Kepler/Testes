import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente FavoritePokemons.js', () => {
  test('contém heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const heading = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });
  test('teste se tem os botôes de filtragem por tipo', () => {
    renderWithRouter(<App />);

    const fiterButtons = screen.getAllByTestId('pokemon-type-button');
    expect(fiterButtons[0].innerHTML).toBe('Electric');
    expect(fiterButtons[1].innerHTML).toBe('Fire');
    expect(fiterButtons[2].innerHTML).toBe('Bug');
    expect(fiterButtons[3].innerHTML).toBe('Poison');
    expect(fiterButtons[4].innerHTML).toBe('Psychic');
    expect(fiterButtons[5].innerHTML).toBe('Normal');
    expect(fiterButtons[6].innerHTML).toBe('Dragon');
  });
  test('testa se tem um botão para resetar o filtro e se ele é clicável', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /All/i });
    userEvent.click(buttonAll);
  });
});
