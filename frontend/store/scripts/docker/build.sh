#!/bin/bash
# Notes:
# -f file
# -t tag

# Store SPA React App
docker build -f docker/store/Dockerfile -t store:latest .

# API Mock (Only for docker-compose)
docker build -f docker/api-mock/Dockerfile -t api-mock:latest .

# JSON server (For Kubernetes)
docker pull vimagick/json-server