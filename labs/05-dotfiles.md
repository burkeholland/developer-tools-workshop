# 05 - Dotfiles

Dotfiles are configuration files to customize your system, applications and tools you use within it. They're essentially files prefixed with a dot "." and relevant name typically found at the system user folder level. This is a common pattern found in \*nix based operating systems (read: macOS and Linux).

They also come in handy when you have to move from one system to another and want to get back to your current working state from before the move.

In this lab, you will learn...

- Zsh/Cygwin and Oh My Zsh
- Community dotfiles
- Helpful Bash Aliases

## Zsh/Cygwin and Oh My Zsh

### Windows

- Check out and install [Cygwin](https://www.cygwin.com/)

### macOS/Linux

- Check out and install [Zsh](http://www.zsh.org/)

### Oh My Zsh

- Install [oh-my-zsh](https://ohmyz.sh/)
- If you need further help see the [docs](https://github.com/robbyrussell/oh-my-zsh/wiki)

## Community Dotfiles

- [Jessica Dean (Mac)](https://github.com/jldeen/dotfiles/tree/mac)
- [Jessica Dean (WSL)](https://github.com/jldeen/dotfiles/tree/wsl)
- [Ryan Bates](https://github.com/ryanb/dotfiles)
- [Zach Holman](https://github.com/holman/dotfiles)
- [Ryan Tomayko](http://github.com/rtomayko/dotfiles)

## Helpful Bash Aliases

The following is a list of helpful aliases or bash commands that are commonly used/helpful for development

1. `ps aux | grep node`
2. `ps aux | grep node index`
3. aliases
   ls=ls -ltra
   gs=git status
   npmgl=npm ls -g --depth=0
   mkdcd () {
   command mkdir $1; cd$1;
   }
