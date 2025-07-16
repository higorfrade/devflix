import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'devflix_development',
    username: 'developer',
    password: '@admin170425',
    define: {
        underscored: true
    }
});