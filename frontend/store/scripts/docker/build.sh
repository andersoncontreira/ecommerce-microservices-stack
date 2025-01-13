#!/bin/bash
# Notes:
# -f file
# -t tag

# Store SPA React App
docker build -f docker/store/Dockerfile -t store:latest .

# API Mock
docker build -f docker/api-mock/Dockerfile -t api-mock:latest .