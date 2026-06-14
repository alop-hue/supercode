
<p align="center">
  <a href="https://github.com/alop-hue/supercode">
    <img src="https://raw.githubusercontent.com/alop-hue/supercode/main/docs/logo.svg?sanitize=true" alt="SuperCode logo" width="200">
  </a>
</p>
<p align="center">The open source AI coding agent for developers.</p>
<p align="center">
  <a href="https://github.com/alop-hue/supercode/discussions"><img alt="GitHub Discussions" src="https://img.shields.io/github/discussions/alop-hue/supercode?style=flat-square&label=discussions" /></a>
  <a href="https://www.npmjs.com/package/supercode-ai"><img alt="npm" src="https://img.shields.io/npm/v/supercode-ai?style=flat-square" /></a>
  <a href="https://github.com/alop-hue/supercode/actions/workflows/ci.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/alop-hue/supercode/ci.yml?style=flat-square&branch=main" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![SuperCode Terminal UI](docs/screenshot.png)](https://github.com/alop-hue/supercode)

---

### Installation

```bash
# YOLO (if install script is provided)
curl -fsSL https://raw.githubusercontent.com/alop-hue/supercode/main/install.sh | bash

# Package managers (npm / bun / pnpm / yarn)
npm i -g supercode-ai@latest        # or bun/pnpm/yarn
scoop install supercode             # Windows (via extras bucket)
choco install supercode             # Windows
brew install alop-hue/tap/supercode # macOS and Linux (custom tap)
brew install supercode              # macOS and Linux (official formula – may be older)
sudo pacman -S supercode            # Arch Linux (Stable)
paru -S supercode-bin               # Arch Linux (Latest from AUR)
mise use -g supercode               # Any OS
nix run nixpkgs#supercode           # or github:alop-hue/supercode for latest dev branch

# Build from source
git clone https://github.com/alop-hue/supercode.git
cd supercode
npm install
npm run build
npm link
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

SuperCode is also available as a desktop application. Download directly from the [releases page](https://github.com/alop-hue/supercode/releases).

| Platform              | Download                         |
| --------------------- | -------------------------------- |
| macOS (Apple Silicon) | `supercode-desktop-mac-arm64.dmg` |
| macOS (Intel)         | `supercode-desktop-mac-x64.dmg`   |
| Windows               | `supercode-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, or `.AppImage`     |

```bash
# macOS (Homebrew)
brew install --cask supercode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/supercode-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$SUPERCODE_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if it exists or can be created)
4. `$HOME/.supercode/bin` - Default fallback

```bash
# Examples
SUPERCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://raw.githubusercontent.com/alop-hue/supercode/main/install.sh | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://raw.githubusercontent.com/alop-hue/supercode/main/install.sh | bash
```

### Agents

SuperCode includes two built‑in agents you can switch between with the `Tab` key.

- **build** – Default, full‑access agent for development work
- **plan** – Read‑only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://github.com/alop-hue/supercode/docs/agents.md).

### Documentation

For more info on how to configure SuperCode, **[head over to our docs](https://github.com/alop-hue/supercode/docs)**.

### Contributing

If you're interested in contributing to SuperCode, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on SuperCode

If you are working on a project that's related to SuperCode and is using "supercode" as part of its name, for example "supercode-dashboard" or "supercode-mobile", please add a note to your README to clarify that it is **not** built by the SuperCode team and is not affiliated with us in any way.

---

**Join our community** [GitHub Discussions](https://github.com/alop-hue/supercode/discussions) | [X (Twitter)](https://x.com/supercode)
