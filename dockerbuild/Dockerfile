# Docker image to facilitate building Element Desktop's native bits
FROM rust:bookworm

ENV DEBIAN_FRONTEND noninteractive

RUN curl --proto "=https" -L https://yarnpkg.com/latest.tar.gz | tar xvz && mv yarn-* /yarn && ln -s /yarn/bin/yarn /usr/bin/yarn
RUN apt-get -qq update && apt-get -qq dist-upgrade && \
  apt-get -qq install --no-install-recommends nodejs npm \
  # tclsh is required for building SQLite as part of SQLCipher
  tcl \
  # libsecret-1-dev is required even for prebuild keytar
  libsecret-1-dev \
  # Used by seshat (when not SQLCIPHER_STATIC) \
  libsqlcipher-dev && \
  apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*
RUN ln -s /usr/bin/python3 /usr/bin/python & ln -s /usr/bin/pip3 /usr/bin/pip

# fix error /usr/local/bundle/gems/fpm-1.5.0/lib/fpm/package/freebsd.rb:72:in `encode': "\xE2" from ASCII-8BIT to UTF-8 (Encoding::UndefinedConversionError)
# http://jaredmarkell.com/docker-and-locales/
# http://askubuntu.com/a/601498
ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

ENV DEBUG_COLORS true
ENV FORCE_COLOR true
