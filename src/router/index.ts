import fs from 'fs'
import { myKoa } from '../@types'

const useRoutes = function () {
    console.log(this);
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.ts') return;
        const router = require(`./${file}`).default;
        (this as any).use(router.routes());
        (this as any).use(router.allowedMethods());
    })
}

export default useRoutes