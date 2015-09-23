# minicloud-examples
koa app integrate with minicloud+sqlite

## Run Server
```
$ git clone http://github.com/minicloud/koa-example
$ cd koa-example
$ npm install 
$ node ./node_modules/minicloud/install.js 
$ node index.js

```
## Test case
```
//register member
curl -X POST http://127.0.0.1:8030/api/v1/members/register \
    --header "Content-Type: application/json" \
    --data "{\"name\":\"zhangsan\",\"nick\":\"xiaozhang\",\"password\":\"8k9v6n\",\"email\":\"zhangsan@minicloud.io\"}"

//login 
curl -X POST http://127.0.0.1:8030/api/v1/oauth2/token \
    --header "Content-Type: application/json" \
    --data "{\"name\":\"zhangsan\",\"password\":\"8k9v6n\",\"device_name\":\"test-pc\"}"

//If successful, there will be the following information output
{"token_type":"bearer","access_token":"xxxxx","expires_in":3600}

```