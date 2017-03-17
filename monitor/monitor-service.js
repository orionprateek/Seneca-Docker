const monitorService = require('seneca')

monitorService({log: 'silent'})
	.use('consul-registry', {
	    host: 'consul'
	  })
	  .use('mesh', {
	    monitor: true, 
	    discover: {
	      registry: {
	        active: true
	      },
	      multicast: {
	        active: false
	      }
	    }
	  })