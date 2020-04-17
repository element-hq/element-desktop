Riot Desktop
============

This is Riot desktop app as of release 1.6.

Fetching Riot
=============
Since this package is just the Electron wrapper for Riot, it doesn't contain any of the Riot code,
so the first step is to get a working copy of Riot. There are a few ways of doing this:

```
# Fetch the prebuilt release Riot package from the riot.im GitHub releases page. The version
# fetched will be the same as the local riot-desktop package.
# We're explicitly asking for no config, so the package Riot will have no config.json.
yarn run fetch --noverify --cfgdir ''
```

...or if you'd like to use GPG to verify the downloaded package:
```
# Fetch the Riot public key from the riot.im web server over a secure connection and import
# it into your local GPG keychain (you'll need GPG installed). You only need to to do this
# once.
yarn run fetch --importkey
# Fetch the package and verify the signature
yarn run fetch --cfgdir ''
```

...or either of the above, but fetching a specific version of Riot:
```
# Fetch the prebuilt release Riot package from the riot.im GitHub releases page. The version
# fetched will be the same as the local riot-desktop package.
yarn run fetch --noverify --cfgdir '' v1.5.6
```

If you only want to run the app locally and don't need to build packages, you can
provide the `webapp` directory directly:
```
# Assuming you've checked out and built a copy of riot-web in ../riot-web
ln -s ../riot-web/webapp ./
```

[TODO: add support for fetching develop builds, arbitrary URLs and arbitrary paths]


Building
========
Now you have a copy of Riot, you're ready to build packages. If you'd just like to
run Riot locally, skip to the next section.

```
yarn run build
```
This will do a couple of things:
 * Run the `setversion` script to set the local package version to match whatever
   version of Riot you installed above.
 * Run electron-builder to build a package. The package built will match the operating system
   you're running the build process on.

If you're on Windows, you can choose to build specifically for 32 or 64 bit:
```
yarn run build32
```
or
```
yarn run build64
```

This build step will not build any native modules.

If you'd like to build the native modules (for searching in encrypted rooms):
This will take 10 minutes or so, and will require a number of native tools
to be installed, depending on your OS (eg. rust, tcl, make/nmake).
```
yarn run build:native
```

On Windows, this will automatically determine the architecture to build for based
on the environment (ie. set up by vcvarsall.bat).

You can also build using docker, which will always produce the linux package:
```
# Run this once to make the docker image
yarn run docker:setup

yarn run docker:install
# if you want to build the native modules (this will take a while)
yarn run docker:buildnative
yarn run docker:build
```

After running, the packages should be in `dist/`.

Starting
========
If you'd just like to run the electron app locally for development:
```
# Install electron - we don't normally need electron itself as it's provided
# by electron-builder when building packages
yarn add electron
yarn start
```

Config
======
If you'd like the packaged Riot to have a configuration file, you can create a
config directory and place `config.json` in there, then specify this directory
with the `--cfgdir` option to `yarn run fetch`, eg:
```
mkdir myconfig
cp /path/to/my/config.json myconfig/
yarn run fetch --cfgdir myconfig
```
The config dir for the official Riot.im app is in `riot.im`. If you use this,
your app will auto-update itself using builds from Riot.im.
