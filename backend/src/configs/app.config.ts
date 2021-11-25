export default () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    database: {
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      name:process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME || 'root',
      password:process.env.DATABASE_PASSWORD || ''
    }
  });