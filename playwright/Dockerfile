FROM mcr.microsoft.com/playwright:v1.53.2-jammy@sha256:61a3b6663a09ae17c841af8242475e87a9f547ee452a773d6ac88b56e9dddc12

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
