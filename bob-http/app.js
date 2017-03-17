const consumerMicroservice = require('seneca')

consumerMicroservice({tag: 'api'})
  .test('print')
  .use('consul-registry', {
    host: 'consul'
  })
  .use('mesh', {
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })

  .ready(function(){
    const seneca = this
    const express = require('express')
    const app = express();
    app.get('/api/math/:cmd/:left/:right', function(req, res){
      seneca.act(
        {
          role: 'math',
          cmd: req.params.cmd,
          left: Number(req.params.left),
          right: Number(req.params.right)
        },
        function(err, out){
          res.json(err || out)
        }
      )
    })
    app.listen(3000)
  })