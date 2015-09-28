var cli = require('cli')
cli.parse({
    config: [false, 'Config path', 'path', './config.json']
})
cli.main(function(args, options) {
    var app = require('koa')()
        //your app business
    require('co').wrap(function*() {
        //init minicloud
        //db is sqlite(./minicloud.db)
        var config = require(options.config)
        app = yield require('minicloud')(app, config)
            //.....
            //your koa app business
            //.....
            //start app
        app.listen(8030)
        console.log('minicloud started')
    })()
})
