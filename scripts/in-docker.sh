#!/bin/bash

docker inspect riot-desktop-dockerbuild 2> /dev/null > /dev/null
if [ $? != 0 ]; then
    echo "Docker image riot-desktop-builder not found. Have you run yarn run docker:setup?"
    exit 1
fi

# Taken from https://www.electron.build/multi-platform-build#docker
docker run --rm -ti \
 --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS_TAG|TRAVIS|TRAVIS_REPO_|TRAVIS_BUILD_|TRAVIS_BRANCH|TRAVIS_PULL_REQUEST_|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_') \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ${PWD}/docker/node_modules:/project/node_modules \
 -v ${PWD}/docker/.hak:/project/.hak \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 riot-desktop-dockerbuild "$@"
