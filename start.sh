#!/bin/bash

source env.sh

if [ "$1" == "dev" ]; then
  npm run dev
else
  npm start
fi
