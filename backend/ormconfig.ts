module.exports = {
    host: process.env.DATABASE_HOST||'localhost',
    type: 'mysql',
    port: process.env.DATABASE_PORT||'3306',
    username: process.env.DATABASE_USERNAME||'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        'src/modules/**/entities/**.entity.ts',
    ],
    migrations: [
        'migrations/*.ts',
    ],
    cli: {
        migrationsDir: 'migrations',
    },
    synchronize: false,
};