FROM mcr.microsoft.com/playwright:v1.52.0-jammy@sha256:ff2946177f0756c87482c0ef958b7cfbf389b92525ace78a1c9890281d0d60f4

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
