# Kubernetes - Passo a passo

## Preparação do ambiente
Para preparar o ambiente, você precisará executar alguns passos:
- Gerar as imagens Docker do projeto.
- Carregar as imagens geradas no Minikube.
- Gerar os arquivos de manifestos do Kubernetes.
- Aplicar os minifestos no Kubernetes. 

### Gerar as imagens Docker
Na raiz da pasta `frontend/store`, execute o comando abaixo:

```bash
./scripts/docker/build.sh
``` 

### Carregar as imagens geradas no Minikube.
Para carregar as imagens geradas no Minikube, execute o comando abaixo:

```bash
./scripts/k8s/minikube-load-images.sh
```

### Gerar os arquivos de manifestos do Kubernetes
Este diretório contém os arquivos de manifestos de serviços do Kubernetes.

Eles são gerados automaticamente a partir dos arquivos de configuração do Helm.

Para gerar os manifestos, execute o comando abaixo:

```bash
./scripts/k8s/generate-k8s-manifests.sh
```

### Aplicar os minifestos no Kubernetes
Para aplicar os manifestos, execute o comando abaixo:

```bash
./scripts/k8s/apply-k8s-manifests.sh
```
