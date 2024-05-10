#!/usr/bin/env bash

if [ "$TARGETPLATFORM" = "linux/arm64" ]; then
  echo "Building for aarch64"
  apt-get -qq update
  apt-get -y install crossbuild-essential-arm64 libsqlcipher-dev:arm64 libssl-dev:arm64 libsecret-1-dev:arm64
  rustup target add aarch64-unknown-linux-gnu
  mv /dockerbuild/aarch64/.cargo .
fi
