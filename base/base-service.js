var baseService = require('seneca')

baseService({tag: 'base'})
  .test('print')
  .use('consul-registry', {
    host: 'consul'
  })
  .use('mesh', {
    isbase: true,
    port: 39002,
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })
  .ready(function () {
    console.log('base', this.id)
  })