#!/bin/bash
yarn install
yarn build
yarn start
npx pm2 log