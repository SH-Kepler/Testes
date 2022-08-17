import { screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente App.js', () => {
  test('É exibido na tela um h2 com texto About Pokédex', () => {
    renderWithRouter(<About />);

    const aboutText = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(aboutText).toBeInTheDocument();
  });

  test('teste se tem dois parágrafos', () => {
    renderWithRouter(<About />);
    const p1 = screen.getByText(/This application simulates/i);
    const p2 = screen.getByText(/One can filter Pokémons by/i);

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  test('O atributo src da imagem esta correto', () => {
    renderWithRouter(<About />);

    const img = screen.getByAltText('Pokédex');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
