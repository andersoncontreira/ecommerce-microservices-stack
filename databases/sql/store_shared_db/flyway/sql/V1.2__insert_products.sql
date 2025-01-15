-- V1.3__insert_products.sql
-- Insere alguns produtos na tabela store.products com nomes de sofás
INSERT INTO store.products (name, description, price, status, deleted)
VALUES ('Sofá Conforto Supremo', 'Um sofá luxuoso com conforto supremo para sua sala de estar.', 1200.00, 1, FALSE),
       ('Sofá Retrô Elegante', 'Sofá com design retrô elegante, perfeito para ambientes clássicos.', 950.00, 1, FALSE),
       ('Sofá Modular Versátil', 'Sofá modular que pode ser ajustado de acordo com suas necessidades.', 1500.00, 1,
        FALSE),
       ('Sofá de Canto Espacial', 'Sofá de canto que maximiza o espaço disponível na sala.', 1300.00, 1, FALSE),
       ('Sofá Luxo Reclinável', 'Sofá reclinável com acabamento de luxo e conforto inigualável.', 2000.00, 1, FALSE),
       ('Sofá Minimalista Moderno', 'Sofá com design minimalista e moderno, ideal para ambientes contemporâneos.',
        1100.00, 1, FALSE),
       ('Sofá Clássico Vintage', 'Sofá clássico com toques vintage, trazendo elegância ao seu lar.', 800.00, 1, FALSE),
       ('Sofá com Chaise Relax', 'Sofá com chaise longue para um relaxamento máximo.', 1400.00, 1, FALSE),
       ('Sofá Compacto Funcional', 'Sofá compacto e funcional, perfeito para apartamentos pequenos.', 700.00, 1, FALSE),
       ('Sofá Estilo Industrial', 'Sofá com design industrial, combinando robustez e estilo.', 1200.00, 1, FALSE);
