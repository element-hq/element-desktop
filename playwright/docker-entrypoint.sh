#!/bin/bash

set -e

echo "Starting Xvfb"
Xvfb :99 -ac &
sleep 2

export DISPLAY=:99

npx playwright test --update-snapshots --reporter line $1
