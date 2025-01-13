#!/bin/bash

minikube version > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Minikube is not installed"
    exit;
else
    echo "Minikube is installed"
fi

# minikube start
# Check the status of Minikube
STATUS=$(minikube status --format='{{.Host}}')

if [ "$STATUS" == "Running" ]; then
    echo "Minikube is already running."
else
    echo "Minikube is not running. Starting Minikube..."
    minikube start
    if [ $? -eq 0 ]; then
        echo "Minikube has been started successfully."
    else
        echo "Failed to start Minikube."
        exit 1
    fi
fi

# kubectl create configmap json-config --from-file=db.json

# Store
# kubectl apply -f ../charts/store/templates/deployment.yaml
# kubectl apply -f ../charts/store/templates/service.yaml
# kubectl apply -f ../charts/store/templates/ingress.yaml

# API Mock
# kubectl apply -f ../charts/api-mock/templates/deployment.yaml
# kubectl apply -f ../charts/api-mock/templates/service.yaml

# Helm for Store
kubectl apply -f ./k8s/store-manifests.yaml
kubectl apply -f ./k8s/api-mock-manifests.yaml