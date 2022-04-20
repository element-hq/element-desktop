# Linux

The native modules include support for features like searching in encrypted rooms and secure storage.
Thus, skipping this step is fine, you just won't have those features in your build.

**NOTE:** Instructions are for Debian-derived distros other distros should adapt them as appropriate.
## Requirements to build native modules

If you want to build native modules, make sure that the following tools are installed on your system.
If they're not already installed on your system, you can run the following commands to install them:
```
sudo apt install pkg-config 
sudo apt install pkgconf 
sudo apt install libsecret-1-dev 
```

- [Node 14](https://nodejs.org)

You can run the following commands to install Node 14:
```
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt -y install nodejs
```

Verify the version of Node.js installed. (Latest version is preferred)
```
node -v
```

Install the Node dev tools and the yarn package manager using the following commands:
```
sudo apt -y install gcc g++ make
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

Verify the version of Yarn installed. (Must be v1)
```
yarn -v
```

- [Python 3](https://www.python.org/downloads/)

You can run the following commands to install Python 3:
```
sudo apt-get install python3.6
python3 --version
```

- [Strawberry Perl](https://strawberryperl.com/)

- [Rust](https://rustup.rs/)

Run the following in your terminal, then follow the on-screen instructions.
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

- [SQLCipher](https://www.zetetic.net/sqlcipher/)
```
sudo apt install sqlcipher
sudo apt install libsqlcipher-dev
```


