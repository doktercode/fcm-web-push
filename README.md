# fcm-web-push
Firebase Cloud Messaging (Web Push)

## Getting started
> npm i -S fcm-web-push

```javascript
const FCMWP = require('fcm-web-push')
const FCM = new FCMWP()
FCM.setAuthKey('xxx')
```

## Verify a user token

```javascript
let token = 'xxx'
FCM.verifyToken(token)
        .then((verified) => {
            if (verified) {
               ...
            }
            else{
               ...
            }
        })
        .catch((err) => {
            console.log(err)
        })
```

## Send notification

```javascript
let tokens = ['xxx', 'xxx']
let notification = {
                        "title": "Title",
                        "body": "Description",
                        "click_action": "action url",
                        "icon": "icon url"
                    }
FCM.sendNotification(tokens, notification)
            .then((success) => {
                if (success) {
                   ...
                }
                else{
                   ...
                }
            })
            .catch((err) => console.log(err))
```
