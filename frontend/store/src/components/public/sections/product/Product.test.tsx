import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from './Product';
import { Product as ProductType } from '../../../../types/Product';

describe('Product Component', () => {
    const products: ProductType[] = [
        { id: 1, title: 'Nordic Chair', price: 50.00, active: true, image: 'images/product-1.png' },
        { id: 2, title: 'Kruzo Aero Chair', price: 78.00, active: true, image: 'images/product-2.png' },
        { id: 3, title: 'Ergonomic Chair', price: 43.00, active: true, image: 'images/product-3.png' },
        { id: 4, title: 'Classic Chair', price: 60.00, active: false, image: 'images/product-4.png' }
    ];

    test('renders product section with header and description', () => {
        render(<Product products={products} />);
        
        // Verifica se o título e a descrição estão presentes
        expect(screen.getByText('Crafted with excellent material.')).toBeInTheDocument();
        expect(screen.getByText('Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.')).toBeInTheDocument();
        
        // Verifica se o botão Explore está presente
        expect(screen.getByText('Explore')).toBeInTheDocument();
    });

    test('renders only active products', () => {
        render(<Product products={products} />);

        // Verifica se os produtos ativos estão presentes
        expect(screen.getByText('Nordic Chair')).toBeInTheDocument();
        expect(screen.getByText('$50')).toBeInTheDocument();
        expect(screen.getByText('Kruzo Aero Chair')).toBeInTheDocument();
        expect(screen.getByText('$78')).toBeInTheDocument();
        expect(screen.getByText('Ergonomic Chair')).toBeInTheDocument();
        expect(screen.getByText('$43')).toBeInTheDocument();

        // Verifica se o produto inativo não está presente
        expect(screen.queryByText('Classic Chair')).not.toBeInTheDocument();
        expect(screen.queryByText('$60.00')).not.toBeInTheDocument();
    });

    test('renders product images and cross icon', () => {
        render(<Product products={products} />);

        // Verifica se as imagens dos produtos ativos estão presentes
        expect(screen.getByAltText('product-1.png')).toBeInTheDocument();
        expect(screen.getByAltText('product-2.png')).toBeInTheDocument();
        expect(screen.getByAltText('product-3.png')).toBeInTheDocument();

        // Verifica se o ícone de cross está presente nas imagens
        const crossIcons = screen.getAllByAltText('cross.svg');
        expect(crossIcons.length).toBe(3); // Deve haver três ícones de cross (um para cada produto ativo)
    });
});