command: ""
refreshFrequency: false

render: -> """
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    webview {
      width: 420px;
      height: 680px;
      border-radius: 14px;
      overflow: hidden;
      display: block;
    }
  </style>
  <webview
    src="https://step1-liart.vercel.app"
    useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
    disablewebsecurity>
  </webview>
"""

style: """
  right: 20px
  top: 20px
  width: 420px
  height: 680px
"""
