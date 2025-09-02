FROM mcr.microsoft.com/playwright:v1.55.0-jammy@sha256:55db7b712a981e9cc1ec757a4511cd01c5ed4e20bd7c84b2dee4e1d320102b9d

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
