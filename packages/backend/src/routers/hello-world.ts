import { Request, Router } from 'express'

import { JSONResponse } from '../interfaces'

export const HelloWorld = (router: Router) => {
  router.get('/', (req: Request, res: JSONResponse<string>) => {
    try {
      return res.json({
        data: 'hello world!',
        message: 'success',
        status: 200,
      })
    } catch (error) {
      return res.status(400).json({
        data: null,
        message: (error as Error).message,
        status: 400,
      })
    }
  })

  return router
}
