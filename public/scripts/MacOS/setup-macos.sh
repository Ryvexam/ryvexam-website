#!/bin/bash

# Stop on error
set -e

echo "🧹 Removing old configurations..."
rm -rf ~/.vimrc ~/.zshrc ~/.vim ~/.vim_runtime ~/.oh-my-zsh || true

# --- Install Homebrew if needed ---
if ! command -v brew &>/dev/null; then
    echo "🍺 Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

echo "🔄 Updating Homebrew..."
brew update && brew upgrade

# --- Install Oh My Zsh ---
echo "⚙️ Installing Oh My Zsh..."
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# --- Fonts installation ---
echo "🔤 Installing MesloLGS NF fonts for Powerlevel10k..."
FONTS_DIR="$HOME/Library/Fonts"
mkdir -p "$FONTS_DIR"

curl -fsSL -o "$FONTS_DIR/MesloLGS NF Regular.ttf" https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf
curl -fsSL -o "$FONTS_DIR/MesloLGS NF Bold.ttf" https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf
curl -fsSL -o "$FONTS_DIR/MesloLGS NF Italic.ttf" https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf
curl -fsSL -o "$FONTS_DIR/MesloLGS NF Bold Italic.ttf" https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf

# --- Powerlevel10k theme ---
echo "🎨 Installing Powerlevel10k..."
POWERLEVEL10K_DIR="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "$POWERLEVEL10K_DIR"

# --- Configure ZSH_THEME in .zshrc ---
ZSHRC="$HOME/.zshrc"
sed -i '' '/^ZSH_THEME=/d' "$ZSHRC"
echo 'ZSH_THEME="powerlevel10k/powerlevel10k"' >> "$ZSHRC"

# --- Zsh plugins ---
echo "🔌 Installing Zsh plugins..."
git clone https://github.com/zsh-users/zsh-autosuggestions "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting"

# --- Plugins + options ---
{
  echo ""
  echo "# User configuration"
  echo "ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=208'"
  echo ""
  echo "# Plugins configuration"
  echo "plugins=(git docker kubectl kubectx zsh-autosuggestions zsh-syntax-highlighting autojump)"
} >> "$ZSHRC"

# --- Final message ---
echo ""
echo "✅ Setup complete!"
echo ""
echo "👉 IMPORTANT: To see the Powerlevel10k theme correctly, set your terminal font to:"
echo "   🎯 MesloLGS NF (Regular, Bold, Italic, Bold Italic)"
echo ""
echo "🧠 In Terminal.app:"
echo "   Terminal > Preferences > Profiles > Text > Change Font → Select 'MesloLGS NF'"
echo ""
echo "🧠 In iTerm2:"
echo "   Preferences > Profiles > Text > Font → Select 'MesloLGS NF'"
echo ""
echo "📦 Now restart your terminal and run: p10k configure"
echo ""
