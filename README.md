# Sample Ecommerce Stack

Este é um projeto que contém uma unidade implantável de amostra para uma aplicação de comércio eletrônico. É uma aplicação simples que permite aos usuários visualizar produtos, adicioná-los a um carrinho e finalizar a compra.

> Nota: Eu preciso renomear o repositório do projeto para `furni-ecommerce-microservices-stack`
## Recursos do Projeto

# Organização e Recursos do Projeto

## Backend

- **API Gateway**
  - **kong-api-gateway**
    - Plataforma de gerenciamento de API que roteia requisições.
    - Tecnologias:
      - **Kong**: Plataforma open-source de gerenciamento de APIs construída sobre Nginx e Lua, para roteamento, autenticação, monitoramento e mais.

- **BFFs**
  - **SPA BFF**
    - Interface API específica para o frontend SPA.
    - Tecnologias:
      - **GraphQL**: Linguagem de consulta para APIs que permite aos clientes requisitar apenas os dados necessários.

- **Serviços**

  - **Admin**
    - **Painel Administrativo**
      - Serviço para gestão interna do sistema.
      - Tecnologias:
        - **Python** ([standard-manager-api-django](https://github.com/andersoncontreira/standard-manager-api-django))
        - **Django**: Framework web Python completo, com ORM, autenticação, painel administrativo e segurança integrados.
      - Nota: Criar template novo
        - `service-python-django-template`

  - **Autenticação**
    - **auth-service**
      - Serviço de autenticação centralizado.
      - Tecnologias:
        - **KeyCloak**: Plataforma open-source para identidade e acesso, com suporte a OAuth2, OpenID Connect e SAML.

  - **Carrinho**
    - **cart-service**
      - Gerencia criação e atualização do carrinho de compras.
      - Tecnologias:
        - **Node.js** ([serverless-node-template](https://github.com/andersoncontreira/serverless-node-template))
        - **Express**: Framework web minimalista para Node.js.
      - Nota: Criar template novo
        - `service-node-express-template`

  - **Catálogo**
    - **catalog-product-service**
      - Gerencia produtos e catálogo.
      - Tecnologias:
        - **Python**
        - **FastAPI**: Framework Python moderno e rápido para criação de APIs com suporte nativo a async e documentação automática.
      - Nota: Criar template novo
        - `service-python-fast-api-template`

    - **catalog-product-review-service**
      - Gerencia avaliações de produtos.
      - Tecnologias:
        - **Python** ([serverless-python-template](https://github.com/andersoncontreira/serverless-python-template))
        - **Flask**: Microframework web Python simples e flexível.
      - Nota: Criar template novo
        - `service-python-flask-template`

  - **Customer**
    - **customer-service**
      - Gerencia cadastro, endereços, documentos, preferências e histórico de clientes.
      - Tecnologias:
        - **PHP**
        - **Laravel**: Framework PHP moderno e robusto para desenvolvimento web e APIs.
      - Nota: Criar template novo
        - `service-php-laravel-template`

    - **notification-service**
      - Gerencia envio de notificações e alertas.
      - Tecnologias:
        - **PHP**
        - **Laravel**
      - Nota: Criar template novo
        - `service-php-laravel-template`

  - **Freight**
    - **shipping-pricing-service**
      - Cálculo de frete e importação de tarifas.
      - Tecnologias:
        - **Go** ([serverless-go-template](https://github.com/andersoncontreira/serverless-go-template))
        - **Gin**: Framework web para Go, rápido e minimalista.
      - Nota: Criar template novo
        - `service-go-gin-template`
      - Observação: Provável necessidade de nova implementação ([aws-ecs-gin-skeleton-go](https://github.com/andersoncontreira/aws-ecs-gin-skeleton-go))

  - **Shipping**
    - **shipping-service**
      - Tracking, geração de etiquetas, acompanhamento e gestão de opções de envio.
      - Tecnologias:
        - **Node.js** (novo serviço)
        - **NestJS**: Framework backend para Node.js, baseado em TypeScript, estruturado e modular.
        - **TypeORM**: ORM para TypeScript/Node.js com suporte a múltiplos bancos relacionais.
      - Nota: Criar template novo
        - `service-node-nest-template`

  - **Order**
    - **order-service**
      - Gerencia pedidos.
      - Tecnologias:
        - **Go**
        - **Gin**
      - Nota: Criar template novo
        - `service-go-gin-template`

  - **Payment**
    - **payment-service**
      - Serviço de pagamento.
      - Tecnologias:
        - **Java / Spring Boot**: Framework para aplicações Java robustas, com amplo ecossistema para backend.
      - Nota: Criar template novo
        - `service-java-spring-boot-template`

## Frontend

- **SPA**
  - **store**
    - Aplicação React para e-commerce.

- **Mobile**
  - **store_mobile**
    - Aplicação React Native para dispositivos móveis.

## Databases

- **NoSQL**
  - **Redis**
    - Utilizado para caching geral e armazenamento rápido temporário.
  - **MongoDB**
    - Armazena dados do carrinho e notificações.

- **SQL**
  - **Shared DB MySQL (Kubernetes)**
    - Bases: payments, freight.
  - **Shared DB PostgreSQL/MySQL (Kubernetes)**
    - Bases: catalog, customers, shipping, orders.

## Mensageria

- **RabbitMQ**
  - Broker de mensagens open-source para comunicação assíncrona entre serviços.

## Observabilidade

- **Fluentd**
  - Agente para coleta e unificação de logs.
- **Grafana**
  - Plataforma para visualização e análise de métricas.
- **Jaeger**
  - Sistema de tracing distribuído para monitoramento de performance.
- **Loki**
  - Sistema de logs escalável e eficiente, integrado ao Grafana.
- **Prometheus**
  - Sistema de monitoramento e alerta focado em métricas.


  
## Detalhes da Arquitetura

A arquitetura do projeto é baseada em microsserviços, com cada serviço sendo responsável por uma parte específica da aplicação. Os serviços são implantados em contêineres Docker e orquestrados por Kubernetes.

Para mais detalhes sobre a arquitetura do projeto, consulte a [documentação de arquitetura](architecture).
