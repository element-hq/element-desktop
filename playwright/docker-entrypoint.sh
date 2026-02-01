#!/bin/bash

set -e

echo "Starting Xvfb"
Xvfb :99 -ac &
sleep 2

export DISPLAY=:99

yarn install --frozen-lockfile
yarn build -l --dir

PLAYWRIGHT_HTML_OPEN=never ELEMENT_DESKTOP_EXECUTABLE="./dist/linux-unpacked/element-desktop" \
  npx playwright test --update-snapshots --reporter line,html "$1"

# Clean up
rm -R core qemu_* || exit 0
