var app = require('koa')()

require('co').wrap(function*() {
    //init minicloud
    //db is sqlite(./minicloud.db)
    app = yield require('minicloud')(app)
        //.....
        //your koa app business
        //.....
        //start app
    app.listen(8030)
    console.log('minicloud started')
})()
