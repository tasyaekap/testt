'use strict'

class TestController {
    async test({ request, response }) {
        try {
            let isi = {
                "req": request.all(),
                "resp": "ok "
            };
            return response.json(isi);
        } catch (err) {
            return response.json({ "message": "error" })
        }
    }
}

module.exports = TestController