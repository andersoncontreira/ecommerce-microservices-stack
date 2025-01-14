# Sample Ecommerce Deployable Unit

Este é um projeto que contém uma unidade implantável de amostra para uma aplicação de comércio eletrônico. É uma aplicação simples que permite aos usuários visualizar produtos, adicioná-los a um carrinho e finalizar a compra.

## Recursos do Projeto

O projeto é dividido em diversas partes, o backend é composto por diversos serviços que fornecem a lógica de negócio e a persistência de dados para a aplicação.
O Frontend é composto por uma aplicação web que consome os serviços fornecidos pelo backend e também um aplicação mobile.

Abaixo estão os recursos do projeto:

 - **API Gateway**: [api_gateway](backend%2Fapi_gateway)
   - Responsável por rotear as requisições dos clientes para os serviços apropriados.
   - Tecnologias:
     - **Kong**: Uma plataforma de gerenciamento de API open-source construída sobre o Nginx e Lua.
 - **BFFs**:
   - **SPA BFF (Backend For Frontend)**: [spa_bff](backend%2Fbffs%2Fspa_bff)
     - Fornece uma interface de programação de aplicativos (API) específica para o frontend.
     - Tecnologias:
       - **GraphQL**: Uma linguagem de consulta para APIs que permite aos clientes solicitar apenas os dados de que precisam.
 - **APIs**:
   - **Serviço de Catálogo**: [products_api](backend%2Fapis%2Fproducts_api)
     - Fornece informações sobre os produtos disponíveis na loja.
     - Tecnologias:
       - **NestJS**: Um framework Node.js para construir aplicações server-side robustas e escaláveis.
       - **TypeORM**: Uma biblioteca ORM para Node.js que suporta diversos bancos de dados relacionais.
   
   - **Serviço de Carrinho**: 
     - Gerencia o carrinho de compras dos usuários.
   - **Serviço de Pedidos**: 
     - Lida com a criação e processamento de pedidos de compra.
   - **Serviço de Autenticação**: 
     - Responsável por autenticar usuários e gerenciar sessões.
   - **Serviço de Pagamentos**: 
     - Integra-se com provedores de pagamento
   - **Serviço de Entrega**: 
     - Gerencia a entrega dos produtos aos clientes.
   - **Serviço de Notificações**: 
     - Envia notificações aos usuários sobre o status de seus pedidos.
 - **Infraestrutura**:
   - **Docker Compose**: [docker-compose](infra%2Fdocker-compose)
     - Orquestra os serviços do projeto em contêineres Docker.
   - **Kubernetes**: [kubernetes](infra%2Fkubernetes)
     - Orquestra os serviços do projeto em um cluster Kubernetes. 
 


