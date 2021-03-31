# Native Node Modules

For some features, the desktop version of Element can make use of native Node
modules. These allow Element to integrate with the desktop in ways that a browser
cannot.

While native modules enable powerful new features, they must be complied for
each operating system. For official Element releases, we will always build these
modules from source to ensure we can trust the compiled output. In the future,
we may offer a pre-compiled path for those who want to use these features in a
custom build of Element without installing the various build tools required.

Do note that compiling a module for a particular operating system
(Linux/macOS/Windows) will need to be done on that operating system.
Cross-compiling from a host OS for a different target OS may be possible, but
we don't support this flow with Element dependencies at this time.

The process is automated by [vector-im/element-builder](https://github.com/vector-im/element-builder)
when releasing. 
The following sections explain the manual steps you can use with a custom build of Element to enable
these features if you'd like to try them out.
It is possible to [build those native modules locally automatically](https://github.com/vector-im/element-desktop#building).

```
yarn run build:native
```
## Adding Seshat for search in E2E encrypted rooms

Seshat is a native Node module that adds support for local event indexing and
full text search in E2E encrypted rooms.

Since Seshat is written in Rust, the Rust compiler and related tools need to be
installed before installing Seshat itself. To install Rust please consult the
official Rust [documentation](https://www.rust-lang.org/tools/install).

Seshat also depends on the SQLCipher library to store its data in encrypted form
on disk. You'll need to install it via your OS package manager.

After installing the Rust compiler and SQLCipher, Seshat support can be added
using yarn at the root of this project:

    yarn add matrix-seshat

You will have to rebuild the native libraries against electron's version of
of node rather than your system node, using the `electron-build-env` tool.
This is also needed to when pulling in changes to Seshat using `yarn link`.

    yarn add electron-build-env

Recompiling Seshat itself can be done like so:

    yarn run electron-build-env -- --electron 6.1.1 -- neon build matrix-seshat --release

Please make sure to include all the `--` as well as the `--release` command line
switch at the end. Modify your electron version accordingly depending on the
version that is installed on your system.

After this is done the Electron version of Element can be run from the main folder
as usual using:

    yarn start
