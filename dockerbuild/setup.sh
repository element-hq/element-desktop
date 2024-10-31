#!/usr/bin/env bash

set -x
declare -A archMap=(["amd64"]="x64" ["arm64"]="arm64")
ARCH="${archMap["$TARGETARCH"]}"
curl --proto "=https" -L "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-$TARGETOS-$ARCH.tar.gz" | tar xz -C /usr/local --strip-components=1 && \
  unlink /usr/local/CHANGELOG.md && unlink /usr/local/LICENSE && unlink /usr/local/README.md
