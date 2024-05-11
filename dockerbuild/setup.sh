#!/usr/bin/env bash

if [ "$TARGETPLATFORM" = "linux/amd64" ]; then
  apt-get -y install gcc-multilib g++-multilib
  # this package is used for snapcraft and we should not clear apt list - to avoid apt-get update during snap build
  curl --proto "=https" -L https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz | tar xz -C /usr/local --strip-components=1 && \
  unlink /usr/local/CHANGELOG.md && unlink /usr/local/LICENSE && unlink /usr/local/README.md
elif [ "$TARGETPLATFORM" = "linux/arm64" ]; then
  echo "Building for aarch64"
  apt-get -qq update
  apt-get -y install crossbuild-essential-arm64 libsqlcipher-dev:arm64 libssl-dev:arm64 libsecret-1-dev:arm64
  rustup target add aarch64-unknown-linux-gnu
  mv /dockerbuild/aarch64/.cargo .
  curl --proto "=https" -L https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-arm64.tar.gz | tar xz -C /usr/local --strip-components=1 && \
fi
