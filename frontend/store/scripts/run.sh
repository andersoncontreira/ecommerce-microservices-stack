#!/bin/bash

docker run -d -p 5000:5000 store

docker run -d -p 3000:3000 api-mock