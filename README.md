# gemini-localip

Gemini plugin to dynamically set root url to local ip address. 

Automatically sets root url of option to your local ip address. In case of
multiple network interfaces, picks the one that will be used to connect to
selenium grid.

## Configuration

Add the following code to `system.plugins` section in your `.gemini.yml`:

```yaml
system:
  plugins:
    localip:
      port: 12345
```

`port` setting specifies a port part of the url to set. It does not run any
server on it, you should take care of it yourself.
