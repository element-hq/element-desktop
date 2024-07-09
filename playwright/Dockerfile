FROM mcr.microsoft.com/playwright:v1.45.1-jammy

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
