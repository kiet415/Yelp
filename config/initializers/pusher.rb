# pusher_app_id: "2954"
# pusher_key: 7381a978f7dd7f9a1117
# pusher_secret: abdc3b896a0ffb85d373

Pusher.app_id = Figaro.env.pusher_app_id!
Pusher.key    = Figaro.env.pusher_key!
Pusher.secret = Figaro.env.pusher_secret!