FROM mcr.microsoft.com/playwright:v1.54.2-jammy@sha256:948dc1e8601eeb152b31ef57959a74c2170be6fe875c33518bf33aea424d8940

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
