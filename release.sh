#!/bin/bash
#
# Script to perform a release of element-desktop.
#
# Requires githib-changelog-generator; to install, do
#   pip install git+https://github.com/matrix-org/github-changelog-generator.git

set -e

cd `dirname $0`

./node_modules/matrix-js-sdk/release.sh -n "$@"
