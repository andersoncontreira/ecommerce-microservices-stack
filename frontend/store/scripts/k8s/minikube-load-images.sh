#!/bin/bash

minikube version > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Minikube is not installed"
    exit;
else
    echo "Minikube is installed"
fi

# Loading images
echo 'Loading images to Minikube...'
echo 'api-mock:latest'
minikube image load api-mock:latest
echo 'store:latest'
minikube image load store:latest