            close() {
                if (useBlobFallback) {
                    const blob = new Blob(chunks, {
                        type: 'application/octet-stream; charset=utf-8'
                    })
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    link.download = filename
                    link.click()
                } else {
                    channel.port1.postMessage('end')
                }
            },
            abort() {
                chunks = []
                channel.port1.postMessage('abort')
                channel.port1.onmessage = null
                channel.port1.close()
                channel.port2.close()
                channel = null
            }
        }, opts.writableStrategy)
    }

    return streamSaver
})
