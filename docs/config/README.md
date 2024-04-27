---
icon: file
---
# 配置文件

NapCatReforged 使用 [YAML](https://yaml.org/) 作为配置文件格式。本章将给出完整的、带注释的配置文件供您参考。

## 完整配置文件

```yaml
# 登录账号相关配置
account:
  # Bot 的 QQ 号
  uin: "10086"
  # 可选，指定则一直使用账密方式登录，不指定则根据下一条配置决定使用快速登录还是二维码登录
  password: "qwertyuio"
  # 若设置为 true 则使用快速登录代替二维码登录。请注意欲登录的 QQ 号必须在该设备上登录过一次，否则将无法使用快速登录
  noQuickLogin: false

# Bot 协议适配器相关配置
adapters:
  # Onebot 适配器相关配置
  onebot:
    # 是否启用该适配器
    # 请注意即使此项设置为 true，你仍然可以通过删除某一服务的方式来禁用该服务
    enabled: true
    # HTTP 正向服务相关配置
    http:
      #（可选）监听的 IP。如果设备有多网卡且只希望监听某一网卡的端口，可设置为对应网卡的 IP
      # 如果只希望本地访问可以设置为 127.0.0.1
      host: '0.0.0.0'
      # 监听的端口
      port: 3600
      # （可选）Access token
      accessToken: 'asdfghjkl'
    # HTTP Post 服务相关配置
    httpPost:
      # 服务器列表。如果不指定任何服务器则不会开启本服务
      servers:
        - 'http://localhost:6700/'
      # （可选）Access token
      accessToken: 'asdfghjkl'
    # 正向 WebSocket 服务相关配置
    websocket:
      #（可选）监听的 IP。如果设备有多网卡且只希望监听某一网卡的端口，可设置为对应网卡的 IP
      # 如果只希望本地访问可以设置为 127.0.0.1
      host: '0.0.0.0'
      # 监听的端口
      port: 4600
      # （可选）Access token
      accessToken: 'asdfghjkl'
      # （可选）心跳包频率，单位为秒
      # 如果不填则不会启用心跳包
      heartbeat: 5
    # 反向 WebSocket 服务相关配置
    websocketReverse:
      # 服务器列表。如果不指定任何服务器则不会开启本服务
      servers:
        - 'ws://localhost:8900/'
      # （可选）Access token
      accessToken: 'asdfghjkl'
      # （可选）心跳包频率，单位为秒
      # 如果不填则不会启用心跳包
      heartbeat: 5
      # （可选）断线是否自动重连
      # 如果不填或为 false 则断线不会自动重连
      reconnect: true
      # （可选）断线重连时间间隔，单位为秒
      # 如果不填则默认为 5 秒
      reconnectInterval: 5
    # （可选）调用 `/get_file` 接口时如果获取不到 Url 则使用 base64 字段返回文件内容，默认为不启用
    localFileToUrl: false
    # （可选）上报消息格式，请参考 https://github.com/botuniverse/onebot-11/blob/master/message/README.md。默认为数组格式（array）
    messageFormat: 'array'

# 日志相关配置
log:
  # 可填入的等级可参考 https://log4js-node.github.io/log4js-node/api.html#configuration-object。如果需要反馈问题，推荐设置为 debug。
  level: info
  # 设置为 true 则会在程序目录下的 log 文件夹内写入日志文件。
  saveFile: false
```