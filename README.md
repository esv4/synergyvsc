# Synergy DBL for VS Code

## Overview

This repo contains the source and tests for integrating the Synergy DBL language into VS Code.

## How to Use

### Product Releases
Releases of this extension can be found on the releases tab on GitHub.
To install an extension from the command line:
```
code --install-extension synergex-vscode-synergydbl-M.m.r.vsix
```

You can also find the extension from the Extensions tab inside of VS Code. 

### Local Build

Clone this repository to your machine
```
git clone https://github.com/Synergex/vscode-synergydbl.git
```

In your command shell of choice, change directory into the checkout

Install the NPM packages:
```
npm install
npm install -g vsce
```
Build the extension VSIX:
```
vsce package
```
Deploy the extension VSIX:
```
code --install-extension synergex-vscode-synergydbl-M.m.r.vsix
```