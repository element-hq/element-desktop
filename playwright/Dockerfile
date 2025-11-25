FROM mcr.microsoft.com/playwright:v1.57.0-jammy@sha256:6aca677c27a967caf7673d108ac67ffaf8fed134f27e17b27a05464ca0ace831

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
