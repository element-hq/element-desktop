FROM buildpack-deps:bionic-curl

ENV DEBIAN_FRONTEND noninteractive

RUN curl -L https://yarnpkg.com/latest.tar.gz | tar xvz && mv yarn-* /yarn && ln -s /yarn/bin/yarn /usr/bin/yarn
RUN apt-get -qq update && apt-get -qq dist-upgrade && \
  # add repo for git-lfs
  curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash && \
  # git ssh for using as docker image on CircleCI
  # python for node-gyp
  # rpm is required for FPM to build rpm package
  # tclsh is required for building SQLite as part of SQLCipher
  # libsecret-1-dev and libgnome-keyring-dev are required even for prebuild keytar
  apt-get -qq install --no-install-recommends qtbase5-dev bsdtar build-essential autoconf libssl-dev gcc-multilib g++-multilib lzip rpm python libcurl4 git git-lfs ssh unzip tcl \
  libsecret-1-dev libgnome-keyring-dev \
  libopenjp2-tools \
  # Used by seshat (when not SQLCIPHER_STATIC) \
  libsqlcipher-dev && \
  # git-lfs
  git lfs install && \
  apt-get purge -y --auto-remove && rm -rf /var/lib/apt/lists/*

WORKDIR /project

# fix error /usr/local/bundle/gems/fpm-1.5.0/lib/fpm/package/freebsd.rb:72:in `encode': "\xE2" from ASCII-8BIT to UTF-8 (Encoding::UndefinedConversionError)
# http://jaredmarkell.com/docker-and-locales/
# http://askubuntu.com/a/601498
ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

ENV DEBUG_COLORS true
ENV FORCE_COLOR true
ENV NODE_VERSION 14.17.0

# this package is used for snapcraft and we should not clear apt list - to avoid apt-get update during snap build
RUN curl -L https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz | tar xz -C /usr/local --strip-components=1 && \
  unlink /usr/local/CHANGELOG.md && unlink /usr/local/LICENSE && unlink /usr/local/README.md && \
  # https://github.com/npm/npm/issues/4531
  npm config set unsafe-perm true

ENV RUSTUP_HOME=/usr/local/rustup \
    CARGO_HOME=/usr/local/cargo \
    PATH=/usr/local/cargo/bin:$PATH

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --no-modify-path --profile minimal
