#!/bin/bash

# Store SPA React App
docker build -f docker/store/Dockerfile -t store .

# API Mock
docker build -f docker/api-mock/Dockerfile -t api-mock .