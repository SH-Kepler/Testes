import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
// import { Pokedex } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente FavoritePokemons.js', () => {
  test('A imagem do pokemon esta correta', () => {
    renderWithRouter(<App />);

    const img = screen.getByAltText('Pikachu sprite');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('src da estrela de favorito esta correto', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const checkFavorite = screen.getByRole('checkbox', { id: 'favorite' });
    userEvent.click(checkFavorite);
    const imgFav = screen.getByAltText('Pikachu is marked as favorite');
    expect(imgFav).toBeInTheDocument();
    expect(imgFav).toHaveAttribute('src', '/star-icon.svg');
  });
  test('é exibido um texto com o tipo do pokémon', () => {
    renderWithRouter(<App />);

    const pokemonTypeTestId = screen.getByTestId('pokemon-type');
    expect(pokemonTypeTestId).toBeInTheDocument();
    expect(pokemonTypeTestId.innerHTML).toBe('Electric');
  });
  test('é exibido na tela um link que mostra os detalhes do pokemon', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByText('More details');
    expect(linkMoreDetails).toBeInTheDocument();
  });
});
