FROM mcr.microsoft.com/playwright:v1.57.0-jammy@sha256:6aca677c27a967caf7673d108ac67ffaf8fed134f27e17b27a05464ca0ace831

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb dbus-x11 && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

# Create node_modules & dist dirs so that the volumes have the correct permissions
RUN mkdir node_modules dist && chown 1000:1000 node_modules dist

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
