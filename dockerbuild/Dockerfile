# Docker image to facilitate building Element Desktop's native bits using a glibc version with broader compatibility
FROM rust:buster

ENV DEBIAN_FRONTEND noninteractive

RUN curl --proto "=https" -L https://yarnpkg.com/latest.tar.gz | tar xvz && mv yarn-* /yarn && ln -s /yarn/bin/yarn /usr/bin/yarn
RUN apt-get -qq update && apt-get -qq dist-upgrade && \
  apt-get -qq install --no-install-recommends \
  # tclsh is required for building SQLite as part of SQLCipher
  tcl \
  # libsecret-1-dev is required even for prebuild keytar
  libsecret-1-dev \
  # Used by seshat (when not SQLCIPHER_STATIC) \
  libsqlcipher-dev && \
  apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*
RUN ln -s /usr/bin/python3 /usr/bin/python & ln -s /usr/bin/pip3 /usr/bin/pip

ENV DEBUG_COLORS true
ENV FORCE_COLOR true

ENV NODE_VERSION 18.19.0
ARG TARGETOS
ARG TARGETARCH
COPY setup.sh /setup.sh
RUN /setup.sh
