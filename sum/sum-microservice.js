const sumMicroservice = require('seneca')

sumMicroservice({tag: 'sum'})
	.test('print')
	.use('consul-registry', {
		host: 'consul'
	})
	.use('./sum')
	.use('mesh',{
		pin: 'role:math,cmd:sum',
		discover:{
			registry:{
				active: true
			},
			multicast:{
				active: false
			}
		}
	})
	.ready(function (){
		var seneca = this
		console.log('sum', seneca.id)
	})