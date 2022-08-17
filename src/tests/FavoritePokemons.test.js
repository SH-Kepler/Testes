import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente App.js', () => {
  test('teste se é exibida a mensagem "No favorite pokemon"', () => {
    renderWithRouter(<FavoritePokemons />);

    const empty = screen.getByText(/No favorite pokemon found/i);
    expect(empty).toBeInTheDocument();
  });
  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const checkFavorite = screen.getByRole('checkbox', { id: 'favorite' });
    userEvent.click(checkFavorite);
    const favLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favLink);
    const pokemon = screen.getByTestId('pokemon-name');
    expect(pokemon).toBeInTheDocument();
  });
});
