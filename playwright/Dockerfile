FROM mcr.microsoft.com/playwright:v1.55.1-jammy@sha256:a012a91c32e36b3300514684c5bdb60c07f01464abd03380320179e5273427ab

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
