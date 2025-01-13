#!/bin/bash

# Helm for Store
helm template store-release ../charts/store -f ../charts/store/values/dev-values.yaml > ./k8s/store-manifests.yaml

# Helm for API Mock
helm template api-mock-release ../charts/api-mock -f ../charts/api-mock/values/dev-values.yaml > ./k8s/api-mock-manifests.yaml