import Koa from "koa";
import { myKoa } from '../@types'
import bodyParser from "koa-bodyparser";
import errorHandler from "./error-handle";
// import useRoutes from '../router'
import cors from 'koa-cors'

import authRouter from '../router/auth.router'
import userRouter from '../router/user.router'
import movieRouter from '../router/movie.router'
import teleplayRouter from '../router/teleplay.router'
import varietyRouter from '../router/variety.router'
import animationRouter from '../router/animation.router'
import documentaryRouter from '../router/documentary.router'

const app: myKoa = new Koa();
// app.useRoutes = useRoutes;

app.use(bodyParser())
app.use(cors())

app.use(authRouter.routes())
app.use(userRouter.routes())
app.use(movieRouter.routes())
app.use(teleplayRouter.routes())
app.use(varietyRouter.routes())
app.use(animationRouter.routes())
app.use(documentaryRouter.routes())
// app.useRoutes()

app.on('error', errorHandler);

export default app;
