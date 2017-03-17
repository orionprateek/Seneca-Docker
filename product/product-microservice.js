const productMicroservice = require('seneca')

productMicroservice({tag: 'product'})
	.test('print')
	.use('consul-registry', {
		host: 'consul'
	})
	.use('./product')
	.use('mesh',{
		pin: 'role:math,cmd:product',
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
		console.log('product', seneca.id)
	})