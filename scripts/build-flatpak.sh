#!/bin/bash

set -eu

: "${FLATPAK_ID:=io.element.ElementNightly}"
: "${FLATPAK_APPNAME:=Element Nightly}"
: "${FLATPAK_VERSION:="0.0.0-nightly$(date +%Y%m%d)"}"
: "${FLATPAK_DATE:="$(date +%Y-%m-%d)"}"
: "${FLATPAK_BRANCH:=nightly}"

export FLATPAK_ID FLATPAK_APPNAME FLATPAK_VERSION FLATPAK_DATE FLATPAK_BRANCH

[[ -d dist/flatpak ]] && rm -rf dist/flatpak
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
install -d build/files/share/applications build/files/share/metainfo
install -Dm755 ../../build/flatpak/element.sh build/files/bin/element
install -Dm644 ../../build/icons/512x512.png build/files/share/icons/hicolor/512x512/apps/${FLATPAK_ID}.png
envsubst < ../../build/flatpak/element.desktop.in > build/files/share/applications/${FLATPAK_ID}.desktop
envsubst < ../../build/flatpak/metainfo.xml.in > build/files/share/metainfo/${FLATPAK_ID}.metainfo.xml

appstream-compose --prefix=build/files --origin=flatpak --basename=${FLATPAK_ID} ${FLATPAK_ID}
appstream-util mirror-screenshots build/files/share/app-info/xmls/${FLATPAK_ID}.xml.gz \
  "https://dl.flathub.org/repo/screenshots/${FLATPAK_ID}-${FLATPAK_BRANCH}" \
  build/screenshots "build/screeshots/${FLATPAK_ID}-${FLATPAK_BRANCH}"

# TODO: baseapp with deps
# TODO: zypak-wrapper

flatpak build-finish build \
  --socket=x11 \
  --share=ipc \
  --socket=pulseaudio \
  --device=all \
  --share=network \
  --filesystem=xdg-download \
  --talk-name=org.freedesktop.Notifications \
  --talk-name=org.kde.StatusNotifierWatcher \
  --talk-name=org.freedesktop.ScreenSaver \
  --own-name='org.kde.*' \
  --talk-name=org.freedesktop.portal.Fcitx \
  --filesystem=xdg-run/keyring \
  --command=element

flatpak build-export repo build $FLATPAK_BRANCH
flatpak build-update-repo --generate-static-deltas repo
flatpak build-bundle --runtime-repo=https://dl.flathub.org/repo/flathub.flatpakrepo \
  repo ../element.flatpak $FLATPAK_ID $FLATPAK_BRANCH
