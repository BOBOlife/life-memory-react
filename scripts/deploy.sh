#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add .
git commit -m "deploy" &&
git remote add origin git@github.com:BOBOlife/packetlife-react_website.git &&
git branch -M Main
git push -u origin Main -f
cd -