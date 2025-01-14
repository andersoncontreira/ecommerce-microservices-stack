#!/bin/bash


# Name of the ConfigMap you want to check
CONFIGMAP_NAME="json-server-json-config"
# Check if the ConfigMap exists
if kubectl get configmap "$CONFIGMAP_NAME" > /dev/null 2>&1; then
  # echo "ConfigMap $CONFIGMAP_NAME exists. Deleting..."
  # kubectl delete configmap "$CONFIGMAP_NAME"
  # kubectl delete configmap json-server-json-config
  echo "ConfigMap $CONFIGMAP_NAME exists. Nothing to do."
else
  echo "ConfigMap $CONFIGMAP_NAME does not exist."

  echo "Creating ConfigMap $CONFIGMAP_NAME..."
  # ConfigMap for JSON Server
  kubectl create configmap json-server-json-config --from-file=./api-mock/db.json -o yaml > ../charts/json-server/templates/configmap.yaml
fi

# Force the update
kubectl get configmap json-server-json-config -o yaml > ../charts/json-server/templates/configmap.yaml

echo "Generating manifests for JSON server..."
# Helm for API Mock
helm template json-server-release ../charts/json-server -f ../charts/json-server/values/dev-values.yaml > ./k8s/json-server-manifests.yaml

# Helm for Store
echo "Generating manifests for Store..."
helm template store-release ../charts/store -f ../charts/store/values/dev-values.yaml > ./k8s/store-manifests.yaml


echo "Generating manifests for API Mock..."
# Helm for API Mock
helm template api-mock-release ../charts/api-mock -f ../charts/api-mock/values/dev-values.yaml > ./k8s/api-mock-manifests.yaml