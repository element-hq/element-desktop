FROM mcr.microsoft.com/playwright:v1.58.1-jammy@sha256:1b52a0833ae13c3bb16f728eec5f9216db29f3cd5eec21a9cbd33e7623723c0e

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb dbus-x11 && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

# Create node_modules & dist dirs so that the volumes have the correct permissions
RUN mkdir node_modules dist && chown 1000:1000 node_modules dist

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
