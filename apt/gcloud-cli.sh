#!/bin/bash

# read the docs
# https://cloud.google.com/sdk/docs/install
# install required packages
sudo apt update
sudo apt-get install apt-transport-https ca-certificates gnupg

# add gcloud repo
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list || \
echo "deb https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# gcloud public key
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add - || \
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

# install gcloud sdk
sudo apt-get update && sudo apt-get install -y google-cloud-sdk