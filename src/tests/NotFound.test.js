import { screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente NotFound.js', () => {
  test('teste se contém um h2', () => {
    renderWithRouter(<NotFound />);

    const heading = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(heading).toBeInTheDocument();
  });
  test('teste se mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const img = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
