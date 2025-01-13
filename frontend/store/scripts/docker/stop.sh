#!/bin/bash

docker ps -q --filter ancestor=store:latest | xargs docker stop
docker ps -q --filter ancestor=api-mock:latest | xargs docker stop