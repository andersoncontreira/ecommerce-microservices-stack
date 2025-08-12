# Api Gateway - Kong

O API Gateway é um componente essencial em arquiteturas de microsserviços, pois atua como um intermediário entre os clientes e os serviços de backend. Ele é responsável por rotear as requisições dos clientes para os serviços apropriados, bem como fornecer funcionalidades como autenticação, autorização, rate limiting, logging, entre outras.

Kong é uma plataforma de gerenciamento de API open-source construída sobre o Nginx e Lua. Ele fornece um API Gateway altamente configurável e extensível que pode ser facilmente integrado em arquiteturas de microsserviços.

## Principais Recursos do Kong

Alguns dos principais recursos do Kong incluem:
 - **Proxy Reverso**: Roteamento de requisições HTTP para os serviços de backend.
 - **Autenticação e Autorização**: Suporte a diferentes métodos de autenticação, como JWT, Basic Auth, OAuth, entre outros.
 - **Rate Limiting**: Controle de acesso baseado em limites de requisições por segundo.
 - **Logging e Monitoramento**: Capacidade de registrar e monitorar o tráfego de requisições.
 - **Plugins**: Extensões que adicionam funcionalidades extras ao API Gateway, como transformações de requisições, validação de tokens, entre outros.
 - **Escalabilidade**: Capacidade de escalar horizontalmente para lidar com um grande volume de requisições.
 - **Integração com Serviços de Descoberta**: Integração com serviços de descoberta de serviços, como Consul, para facilitar o roteamento dinâmico.
 - **Interface de Administração**: Interface web para gerenciar e configurar o API Gateway.
 - **Suporte a Kubernetes**: Integração com Kubernetes para facilitar o gerenciamento de APIs em ambientes de contêineres.
 - **Comunidade Ativa**: Kong possui uma comunidade ativa de desenvolvedores e uma extensa documentação.
 - **Extensibilidade**: Capacidade de adicionar novas funcionalidades através de plugins customizados.
 - **Suporte a Diversos Protocolos**: Suporte a diferentes protocolos de comunicação, como HTTP, gRPC, WebSockets, entre outros.
 - **Segurança**: Recursos de segurança avançados, como proteção contra ataques DDoS e injeção de SQL.
 - **Monitoramento de Tráfego**: Capacidade de monitorar o tráfego de requisições em tempo real.
 - **Gerenciamento de Ciclo de Vida de APIs**: Suporte ao gerenciamento do ciclo de vida de APIs, incluindo versionamento e desativação.
 - **Documentação Automática**: Geração automática de documentação da API a partir dos serviços registrados.

## Exemplo de Uso Básico do Kong

A seguir, um exemplo básico de como configurar um serviço e uma rota no Kong:

[//]: # (1. **Criar um Serviço**:)

[//]: # (```bash)

[//]: # (curl -i -X POST --url http://localhost:8001/services/ --data 'name=meu-servico' --data 'url=http://meu-servico:8080')

[//]: # (```)