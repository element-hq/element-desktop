FROM mcr.microsoft.com/playwright:v1.56.1-jammy@sha256:d518367161e599b64e4e8b83ff180be45bfe22efb78dde77fc4c2942340fe8ca

WORKDIR /work/element-desktop

RUN apt-get update && apt-get -y install xvfb && apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
ENTRYPOINT ["bash", "/opt/docker-entrypoint.sh"]
