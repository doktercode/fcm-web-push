# fcm-web-push
Firebase Cloud Messaging (Web Push)

## Getting started
> npm i -S fcm-web-push

```
const FCMWP = require('fcm-web-push')
const FCM = new FCMWP()
FCM.setAuthKey('xxx')
```

## Verify an user token

```
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

```
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
