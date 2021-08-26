#!/bin/bash

# Download the zip file, -L follow redirection, -O output file, -J name the file based on the remote header name or --content-disposition on wget
curl -L -O -J https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2020.3.1.23/android-studio-2020.3.1.23-linux.tar.gz

# Extract the compressed file
tar -xf android-studio*.tar.gz -C /usr/local/

# Install required libraries
sudo dpkg --add-architecture i386
sudo apt update
sudo apt-get install -y libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386

# Create symlink
sudo ln --symbolic /usr/local/android-studio/bin/studio.sh /usr/bin/android-studio

# Cleaning up
rm -rf android-studio*.tar.gz