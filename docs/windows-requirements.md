# Windows

## Requirements to build native modules

If you want to build native modules, make sure that the following tools are installed on your system.

- [Node 14](https://nodejs.org)
- [Python 3](https://www.python.org/downloads/)
- [Strawberry Perl](https://strawberryperl.com/)
- [Rust](https://rustup.rs/)
- [Visual Studio](https://visualstudio.microsoft.com/downloads/) with the following packages
  - MSVC VS 2019 C++
  - Windows 10 SDK
  - C++ Clang tools

Once installed make sure all those utilities are accessible in your `PATH`.
In order to load all the C++ utilities installed by Visual Studio you can run the following in a terminal window.

```
call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Auxiliary\Build\vcvarsall.bat" amd64
```

You can replace `amd64` with `x86` depending on your CPU architecture.
