#!/bin/bash

set -eu

: "${FLATPAK_ID:=io.element.Element}"
: "${FLATPAK_APPNAME:='Element Nightly'}"
: "${FLATPAK_VERSION:="0.0.0-nightly"}"
: "${FLATPAK_DATE:="$(date +%Y%m%d%H%M%S)"}"
: "${FLATPAK_BRANCH:=nightly}"

install -d dist/flatpak/
install -d dist/flatpak/build/files

cd dist/flatpak

cat <<EOF > build/metadata
[Application]
name=${FLATPAK_ID}
runtime=org.freedesktop.Platform/x86_64/21.08
sdk=org.freedesktop.Sdk/x86_64/21.08
EOF

cp -r ../linux-unpacked build/files/element
install -Dm644 ../../build/icons/512x512.png build/files/share/icons/hicolor/512x512/${FLATPAK_ID}.png

install -d build/files/share/applications
envsubst < ../../build/flatpak/element.desktop.in > build/files/share/applications/${FLATPAK_ID}.desktop

install -d build/files/share/metainfo
envsubst < ../../build/flatpak/metainfo.xml.in > build/files/share/metainfo/${FLATPAK_ID}.metainfo.xml

# TODO: baseapp with deps
# TODO: appstream-compose
# TODO: mirror screenshots
# TODO: zypak-wrapper

flatpak build-finish build \
    --command=bash

flatpak build-export --disable-sandbox repo build "$FLATPAK_BRANCH"
flatpak build-update-repo --generate-static-deltas repo
flatpak build-bundle repo ../element.flatpak $FLATPAK_ID
