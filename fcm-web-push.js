const
    request = require('request')

const
    PUSH_SERVER = 'https://fcm.googleapis.com/fcm/send'

class FCMWP {
    constructor() {
        this.AUTH_KEY = ''
    }

    setAuthKey(AUTH_KEY) {
        this.AUTH_KEY = 'key=' + AUTH_KEY
    }

    /**
     * Verify token
     * @param {String} token
     * @returns {Promise}
     */
    verifyToken(token) {
        return new Promise((res, rej) => {
            let options = {
                method: 'POST',
                url: PUSH_SERVER,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.AUTH_KEY
                },
                body: JSON.stringify({
                    'dry_run': true,
                    'to': token
                })
            }
            request(options, (error, response, body) => {
                if (error || response.statusCode != 200) return rej(error)
                body = JSON.parse(body)
                res(body.success)
            })
        })
    }

    /**
     * Send Notifications
     * @param {Array} tokens
     * @param {JSON} notification
     * @returns {Promise}
     */
    sendNotification(tokens, notification) {
        return new Promise((res, rej) => {
            let options = {
                method: 'POST',
                url: PUSH_SERVER,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.AUTH_KEY
                },
                body: JSON.stringify({
                    notification,
                    'registration_ids': tokens
                })
            }
            request(options, (error, response, body) => {
                if (error || response.statusCode != 200) return rej(error)
                body = JSON.parse(body)
                res(body.success)
            })
        })
    }
}

module.exports = FCMWP