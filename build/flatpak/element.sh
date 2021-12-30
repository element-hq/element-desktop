#!/bin/bash
env TMPDIR="$XDG_RUNTIME_DIR/app/${FLATPAK_ID}" /app/element/element-desktop --no-sandbox "$@"
