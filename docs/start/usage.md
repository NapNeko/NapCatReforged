# 运行 NapCatReforged

## Windows 用户

对于使用 `Windows 11` 或系统默认编码为 UTF-8 的用户，直接运行 `napcatqq.bat` 即可。

对于使用 `Windows 10` 及更老的系统的用户，推荐运行 `napcatqq-utf8.bat`。

如果对终端打印效果有更高需求，可以使用 [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) 配合 [Fira Code](https://github.com/tonsky/FiraCode) 字体运行 NapCatReforged。

## Linux 用户

给予 `napcatqq.sh` 文件执行权限然后直接运行即可。

如果你使用的是手动解压的 QQ，请修改 `napcatqq.sh` 文件的第 4 行，将 `QQ_PATH` 的值修改为你手动解压的 QQ 的二进制文件路径即可。

## 修改配置文件

NapCarReforged 在未检测到配置文件时会在程序根目录下创建一个简单的配置文件 `config.yml`，您可以参照 [下一章](../config/) 中的内容对其进行修改。

修改完成后，重启 NapCatReforged 即可。