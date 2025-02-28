#!/usr/bin/env bash

set -x
declare -A archMap=(["amd64"]="x64" ["arm64"]="arm64")
ARCH="${archMap["$TARGETARCH"]}"
NODE_VERSION=$(cat /.node-version)
curl --proto "=https" -L "https://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-$TARGETOS-$ARCH.tar.gz" | tar xz -C /usr/local --strip-components=1 && \
  unlink /usr/local/CHANGELOG.md && unlink /usr/local/LICENSE && unlink /usr/local/README.md
