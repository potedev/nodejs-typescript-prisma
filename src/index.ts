import { createServer } from './app/http/app'
// import { createConnection } from 'typeorm'
import { PrismaClient } from '.prisma/client'

// import { typeORMConfig } from './app/database/typeorm'

// const prisma = new PrismaClient();

const main = async () => {
    createServer();
}

main();

// main()
//     .catch((e) => {
//         throw e
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })


// createConnection(typeORMConfig).then(_ => {
//     createServer();
// })

