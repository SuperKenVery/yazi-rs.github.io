"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[217],{6867:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(1527),s=i(6225);const a={sidebar_position:1,description:"How to install Yazi on various operating systems."},r="Installation",l={id:"installation",title:"Installation",description:"How to install Yazi on various operating systems.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to install Yazi on various operating systems."},sidebar:"docsSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},o={},c=[{value:"Packaging status",id:"packaging-status",level:2},{value:"Arch Linux",id:"arch-linux",level:2},{value:"Nix",id:"nix",level:2},{value:"Nix flakes",id:"nix-flakes",level:2},{value:"Cache",id:"cache",level:3},{value:"Homebrew",id:"homebrew",level:2},{value:"MacPorts",id:"macports",level:2},{value:"NetBSD",id:"netbsd",level:2},{value:"Windows",id:"windows",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation-1",level:3},{value:"AOSC OS",id:"aosc-os",level:2},{value:"Official binaries",id:"official-binaries",level:2},{value:"Cargo",id:"cargo",level:2},{value:"Build from source",id:"build-from-source",level:2},{value:"x-cmd",id:"x-cmd",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To use Yazi, you must have the following prerequisites installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/file/file",children:(0,t.jsx)(n.code,{children:"file"})})," (for file type detection)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Yazi can be ",(0,t.jsx)(n.strong,{children:"optionally"})," extended with other command line tools to enable additional features."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.nerdfonts.com/",children:"nerd-fonts"})," (",(0,t.jsx)(n.a,{href:"/docs/faq#dont-like-nerd-fonts",children:(0,t.jsx)(n.em,{children:"recommended"})}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/dirkvdb/ffmpegthumbnailer",children:(0,t.jsx)(n.code,{children:"ffmpegthumbnailer"})})," (for video thumbnails)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.7-zip.org/",children:"7-Zip"})," (for archive extraction and preview)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://jqlang.github.io/jq/",children:(0,t.jsx)(n.code,{children:"jq"})})," (for JSON preview)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://poppler.freedesktop.org/",children:(0,t.jsx)(n.code,{children:"poppler"})})," (for PDF preview)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/sharkdp/fd",children:(0,t.jsx)(n.code,{children:"fd"})})," (for file searching)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:(0,t.jsx)(n.code,{children:"rg"})})," (for file content searching)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/junegunn/fzf",children:(0,t.jsx)(n.code,{children:"fzf"})})," (for quick file subtree navigation)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ajeetdsouza/zoxide",children:(0,t.jsx)(n.code,{children:"zoxide"})})," (for historical directories navigation)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://imagemagick.org/",children:"ImageMagick"})," (for SVG, Font, HEIC, and JPEG XL preview)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/astrand/xclip",children:(0,t.jsx)(n.code,{children:"xclip"})})," / ",(0,t.jsx)(n.a,{href:"https://github.com/bugaevc/wl-clipboard",children:(0,t.jsx)(n.code,{children:"wl-clipboard"})})," / ",(0,t.jsx)(n.a,{href:"https://github.com/kfish/xsel",children:(0,t.jsx)(n.code,{children:"xsel"})})," (for system clipboard support)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the functions are not working properly, please try upgrading them to the latest version."}),"\n",(0,t.jsx)(n.h2,{id:"packaging-status",children:"Packaging status"}),"\n",(0,t.jsxs)(n.p,{children:["Most packages on this page are maintained by the community, and they ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"may not always be the latest"})}),". Please check their versions before installation:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://repology.org/project/yazi/versions",children:(0,t.jsx)(n.img,{src:"https://repology.org/badge/vertical-allrepos/yazi.svg",alt:"Packaging status"})})}),"\n",(0,t.jsx)(n.h2,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo pacman -S yazi ffmpegthumbnailer p7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use the latest Git version, you can install it from ",(0,t.jsx)(n.a,{href:"https://aur.archlinux.org/packages/yazi-git/",children:"AUR"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/archlinuxcn/repo/",children:"Arch Linux CN"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"paru -S yazi-git ffmpegthumbnailer p7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also install the ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases/tag/nightly",children:"official nightly release binary"})," from ",(0,t.jsx)(n.a,{href:"https://aur.archlinux.org/packages/yazi-nightly-bin",children:"AUR"}),",\nwhich is built from the latest code within the past 6 hours:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"paru -S yazi-nightly-bin ffmpegthumbnailer p7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nix",children:"Nix"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://search.nixos.org/packages?channel=unstable&show=yazi",children:"Nix package"})," for Yazi is available."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# NixOS:\nnix-env -iA nixos.yazi\n\n# Not NixOS:\nnix-env -iA nixpkgs.yazi\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or add the following to your configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nix",children:"# configuration.nix\nenvironment.systemPackages = with pkgs; [\n\tyazi\n];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also manage Yazi's configuration using ",(0,t.jsx)(n.a,{href:"https://nix-community.github.io/home-manager/options.xhtml#opt-programs.yazi.enable",children:"home-manager"}),", here is a configuration template example:"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Demonstrate configuring Yazi with home-manager"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nix",children:'{pkgs, ...}: let\n\tplugins-repo = pkgs.fetchFromGitHub {\n\t\towner = "yazi-rs";\n\t\trepo = "plugins";\n\t\trev = "...";\n\t\thash = "sha256-...";\n\t};\nin {\n\tprograms.yazi = {\n\t\tenable = true;\n\t\tenableZshIntegration = true;\n\t\tshellWrapperName = "y";\n\n\t\tsettings = {\n\t\t\tmanager = {\n\t\t\t\tshow_hidden = true;\n\t\t\t};\n\t\t\tpreview = {\n\t\t\t\tmax_width = 1000;\n\t\t\t\tmax_height = 1000;\n\t\t\t};\n\t\t};\n\n\t\tplugins = {\n\t\t\tchmod = "${plugins-repo}/chmod.yazi";\n\t\t\tfull-border = "${plugins-repo}/full-border.yazi";\n\t\t\tmax-preview = "${plugins-repo}/max-preview.yazi";\n\t\t\tstarship = pkgs.fetchFromGitHub {\n\t\t\t\towner = "Rolv-Apneseth";\n\t\t\t\trepo = "starship.yazi";\n\t\t\t\trev = "...";\n\t\t\t\tsha256 = "sha256-...";\n\t\t\t};\n\t\t};\n\n\t\tinitLua = \'\'\n\t\t\trequire("full-border"):setup()\n\t\t\trequire("starship"):setup()\n\t\t\'\';\n\n\t\tkeymap = {\n\t\t\tmanager.prepend_keymap = [\n\t\t\t\t{\n\t\t\t\t\ton = "T";\n\t\t\t\t\trun = "plugin --sync max-preview";\n\t\t\t\t\tdesc = "Maximize or restore the preview pane";\n\t\t\t\t}\n\t\t\t\t{\n\t\t\t\t\ton = ["c" "m"];\n\t\t\t\t\trun = "plugin chmod";\n\t\t\t\t\tdesc = "Chmod on selected files";\n\t\t\t\t}\n\t\t\t];\n\t\t};\n\t};\n}\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"nix-flakes",children:"Nix flakes"}),"\n",(0,t.jsxs)(n.p,{children:["The upstream repository provides a flake so that Nix users can easily keep up with the bleeding edge. A basic ",(0,t.jsx)(n.code,{children:"flake.nix"})," setup to get you started:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nix",children:'{\n\tinputs = {\n\t\tnixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";\n\n\t\thome-manager = {\n\t\t\turl = "github:nix-community/home-manager/release-23.11";\n\t\t\tinputs.nixpkgs.follows = "nixpkgs";\n\t\t};\n\n\t\tyazi.url = "github:sxyazi/yazi";\n\t};\n\n\toutputs = { nixpkgs, home-manager, yazi, ... }: {\n\t\t# To install Yazi system-wide:\n\t\tnixosConfigurations = {\n\t\t\tnixos = nixpkgs.lib.nixosSystem {\n\t\t\t\tmodules = [\n\t\t\t\t\t({ pkgs, ... }: {\n\t\t\t\t\t\tenvironment.systemPackages = [ yazi.packages.${pkgs.system}.default ];\n\t\t\t\t\t})\n\t\t\t\t];\n\t\t\t};\n\t\t};\n\n\t\t# To install it for a specific user:\n\t\thomeConfigurations = {\n\t\t\t"alice@nixos" = home-manager.lib.homeManagerConfiguration {\n\t\t\t\tpkgs = nixpkgs.legacyPackages.x86_64-linux;\n\t\t\t\tmodules = [\n\t\t\t\t\t({ pkgs, ... }: {\n\t\t\t\t\t\thome.packages = [ yazi.packages.${pkgs.system}.default ];\n\t\t\t\t\t})\n\t\t\t\t];\n\t\t\t};\n\t\t};\n\t};\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you want to override the package inside nixpkgs with the one from the flake, you can use overlays:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nix",children:"nixpkgs.overlays = [ yazi.overlays.default ];\n"})}),"\n",(0,t.jsx)(n.p,{children:"A module is also available for both NixOS and home-manager:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nix",children:"programs.yazi = {\n\tenable = true;\n\tpackage = yazi.packages.${pkgs.system}.default; # if you use overlays, you can omit this\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,t.jsxs)(n.p,{children:["Pre-built artifacts are served at ",(0,t.jsx)(n.a,{href:"https://yazi.cachix.org",children:"https://yazi.cachix.org"}),", so that Nix users don't have to build Yazi on their machine.\nYou can make use of it by adding the following options to ",(0,t.jsx)(n.code,{children:"nix.settings"}),", either in your NixOS or home-manager configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nix",children:'extra-substituters = [ "https://yazi.cachix.org" ];\nextra-trusted-public-keys = [ "yazi.cachix.org-1:Dcdz63NZKfvUCbDGngQDAZq6kOroIrFoyO064uvLh8k=" ];\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the cache will only be applied ",(0,t.jsx)(n.em,{children:"after"})," you rebuild your Nix config. If you want to ensure that the cache gets applied right away, add the options above to your flake's ",(0,t.jsx)(n.code,{children:"nixConfig"})," attribute."]}),"\n",(0,t.jsxs)(n.p,{children:["If you're having any problems, refer to this ",(0,t.jsx)(n.a,{href:"https://docs.cachix.org/faq#why-is-nix-not-picking-up-on-any-of-the-pre-built-artifacts",children:"entry"})," from Cachix's FAQ."]}),"\n",(0,t.jsx)(n.h2,{id:"homebrew",children:"Homebrew"}),"\n",(0,t.jsxs)(n.p,{children:["First, make sure that Homebrew is fully up-to-date with ",(0,t.jsx)(n.code,{children:"brew update"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Then you can install Yazi (and the optional dependencies):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"brew install yazi ffmpegthumbnailer sevenzip jq poppler fd ripgrep fzf zoxide imagemagick font-symbols-only-nerd-font\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you prefer to use the most recent code, use the ",(0,t.jsx)(n.code,{children:"--HEAD"})," flag when installing Yazi."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"brew install yazi --HEAD\n"})}),"\n",(0,t.jsx)(n.h2,{id:"macports",children:"MacPorts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo port install yazi ffmpegthumbnailer 7zip jq poppler fd ripgrep fzf zoxide ImageMagick\n"})}),"\n",(0,t.jsx)(n.h2,{id:"netbsd",children:"NetBSD"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pkgin install yazi ffmpegthumbnailer p7zip jq poppler fd ripgrep fzf zoxide ImageMagick\n"})}),"\n",(0,t.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(n.p,{children:"Windows has been supported since Yazi v0.1.4, but it's still in the early stage, so please file an issue if you encounter any bugs."}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["Yazi relies on ",(0,t.jsx)(n.code,{children:"file(1)"})," to detect the mime-type of the file, and the easiest and most reliable way to get it on Windows is to install Git for Windows and use the ",(0,t.jsx)(n.code,{children:"file.exe"})," that comes with it."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install Git for Windows by running ",(0,t.jsx)(n.a,{href:"https://git-scm.com/download/win",children:"the official installer"}),", or through your package manager of choice."]}),"\n",(0,t.jsxs)(n.li,{children:["To allow Yazi to find it, add ",(0,t.jsx)(n.code,{children:"<Git_Installed_Directory>\\usr\\bin\\file.exe"})," to your ",(0,t.jsx)(n.code,{children:"YAZI_FILE_ONE"})," environment variable, which differs depending on how you installed Git:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you installed Git with the installer, it would be ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\Git\\usr\\bin\\file.exe"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If you installed Git with Scoop, it would be ",(0,t.jsx)(n.code,{children:"C:\\Users\\<Username>\\scoop\\apps\\git\\current\\usr\\bin\\file.exe"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Restart your terminal."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This is ",(0,t.jsx)(n.strong,{children:"the ONLY way we recommend"}),". We do not recommend install ",(0,t.jsx)(n.code,{children:"file"})," via Scoop or Chocolatey, since they cannot handle Unicode filenames (such as ",(0,t.jsx)(n.code,{children:"oliver-sjo\u0308stro\u0308m.jpg"}),") properly and lack some required parameters."]}),"\n",(0,t.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["You can download the latest official binaries from ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases",children:"GitHub Releases"}),", or install Yazi with ",(0,t.jsx)(n.a,{href:"https://scoop.sh/",children:"Scoop"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"scoop install yazi\n# Install the optional dependencies (recommended):\nscoop install 7zip jq poppler fd ripgrep fzf zoxide imagemagick\n"})}),"\n",(0,t.jsx)(n.h2,{id:"aosc-os",children:"AOSC OS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo oma install yazi\n"})}),"\n",(0,t.jsx)(n.h2,{id:"official-binaries",children:"Official binaries"}),"\n",(0,t.jsxs)(n.p,{children:["You can download the latest official binaries from GitHub Releases: ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases",children:"https://github.com/sxyazi/yazi/releases"})]}),"\n",(0,t.jsx)(n.p,{children:"On this page, we offer GNU/Musl builds to meet the needs of different users; we also provide a Snapcraft package, which Ubuntu/Debian users can use."}),"\n",(0,t.jsxs)(n.p,{children:["This page also includes a ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases/tag/nightly",children:"nightly release"}),", which is built from the latest code within the past 6 hours."]}),"\n",(0,t.jsx)(n.h2,{id:"cargo",children:"Cargo"}),"\n",(0,t.jsxs)(n.p,{children:["Setup the latest stable Rust toolchain via ",(0,t.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nrustup update\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now you can install Yazi from crates.io:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cargo install --locked yazi-fm yazi-cli\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or install the latest Git version:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cargo install --locked --git https://github.com/sxyazi/yazi.git yazi-fm yazi-cli\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If it fails to build, please check if ",(0,t.jsx)(n.code,{children:"make"})," and ",(0,t.jsx)(n.code,{children:"gcc"})," is installed on your system."]}),"\n",(0,t.jsx)(n.h2,{id:"build-from-source",children:"Build from source"}),"\n",(0,t.jsxs)(n.p,{children:["Setup the latest stable Rust toolchain via ",(0,t.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nrustup update\n"})}),"\n",(0,t.jsx)(n.p,{children:"Clone the repository and build Yazi:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/sxyazi/yazi.git\ncd yazi\ncargo build --release --locked\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, you can run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"./target/release/yazi\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If it fails to build, please check if ",(0,t.jsx)(n.code,{children:"make"})," and ",(0,t.jsx)(n.code,{children:"gcc"})," is installed on your system."]}),"\n",(0,t.jsx)(n.h2,{id:"x-cmd",children:"x-cmd"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.x-cmd.com/",children:"x-cmd"})," is a ",(0,t.jsx)(n.strong,{children:"toolbox for Posix Shell"}),", offering a lightweight package manager built using shell and awk."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"x env use yazi fzf 7za jq fd rg zoxide\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6225:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(959);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);