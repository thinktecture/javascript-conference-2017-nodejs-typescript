import 'reflect-metadata';
import {ApiServer} from './server/index';
import {DatabaseProvider} from './database/index';

DatabaseProvider.configure({
    type: process.env.DATABASE_TYPE as any || 'postgres',
    database: process.env.DATABASE_NAME || 'apiconference2017',
    username: process.env.DATABASE_USERNAME || 'apiconference2017',
    password: process.env.DATABASE_PASSWORD || 'apiconference2017',
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT || 5432,
    ssl: !!process.env.USE_SSL
});

const server = new ApiServer();
server.start(+process.env.PORT || 8080);
