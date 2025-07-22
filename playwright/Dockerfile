FROM mcr.microsoft.com/playwright:v1.54.1-jammy@sha256:f72b8d294edee6beadacfc1868abf746dbc31316b1927f39f393107053c58bd1

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
