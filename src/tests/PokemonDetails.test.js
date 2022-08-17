import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente FavoritePokemons.js', () => {
  test('são exibidos os h2 na tela', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const pokemonDetails = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(pokemonDetails).toBeInTheDocument();
    const summary = screen.getByRole('heading', { name: /Summary/i });
    expect(summary).toBeInTheDocument();
    const locations = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
    expect(locations).toBeInTheDocument();
  });
  test('paragrafo de "Summary" possui o texto correto', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const paragrafo = screen.getByText(/This intelligent Pokémon roasts hard/i);
    expect(paragrafo).toBeInTheDocument();
  });
  test('imagens com src estão corretas', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const images = screen.getAllByAltText(/Pikachu location/i);
    expect(images[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(images[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('É exibido na tela uma label com o texto "Pokémon favoritado?"', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const labelText = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(labelText).toBeInTheDocument();
  });
});
