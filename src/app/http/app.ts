import express from 'express'
import { v1Router } from './router'
import { API_BASE_URL } from '../../constant'

//Documentation
import swaggerConfig from '../../middlewares/documentation/swagger.json'
import swaggerUi from 'swagger-ui-express'

import cors from 'cors'
import cookieParser from 'cookie-parser'

//Logger
import morgan from 'morgan'

export const createServer = async (): Promise<express.Application> => {

    const app: express.Application = express();

    app.use(cookieParser())
    app.use(cors({
        origin: "http://localhost:1234",
        credentials: true
    }))
    app.use(express.json());
    app.use(morgan('combined'));

    app.use(`${API_BASE_URL}`, v1Router);

    //Documentation
    app.use(`${API_BASE_URL}documentation/`, swaggerUi.serve, swaggerUi.setup(swaggerConfig));

    app.listen(4000, () => {
        console.log(`[App]: Listening on PORT ${4000}`)
    })

    return app
}