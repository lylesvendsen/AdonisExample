'use strict'

class PaymentsOrderController {
    async index({params, view, response, request}){
        return response.json(
            {
                error:"Not Yet Implemented", 
                url:request.originalUrl(),
                getvars:request.get(),
                postvars:request.post()
            }
        )
    }

    async store({params, view}){
        return response.json(
            {
                error:"Not Yet Implemented", 
                url:request.originalUrl(),
                getvars:request.get(),
                postvars:request.post()
            }
        )
    }

    async show({params, view}){
        return response.json(
            {
                error:"Not Yet Implemented", 
                url:request.originalUrl(),
                getvars:request.get(),
                postvars:request.post()
            }
        )
    }

    async update({params, view}){
        return response.json(
            {
                error:"Not Yet Implemented", 
                url:request.originalUrl(),
                getvars:request.get(),
                postvars:request.post()
            }
        )
    }

    async destroy({params, view}){
        return response.json(
            {
                error:"Not Yet Implemented", 
                url:request.originalUrl(),
                getvars:request.get(),
                postvars:request.post()
            }
        )
    }
}

module.exports = PaymentsOrderController
