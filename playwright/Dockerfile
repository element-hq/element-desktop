FROM mcr.microsoft.com/playwright:v1.53.1-jammy@sha256:a51c6393b5a6d85897f347c7e5cf03086f50739dde02077e2bb5dc73044c732a

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
