FROM mcr.microsoft.com/playwright:v1.56.0-jammy@sha256:0ff863c1700afc42fb0964275e64e4980d539d999303e37cdacb52e9b73af9e3

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
