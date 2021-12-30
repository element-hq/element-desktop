#!/bin/bash
env TMPDIR="$XDG_RUNTIME_DIR/app/${FLATPAK_ID}" /app/Element/element-desktop --no-sandbox "$@"
