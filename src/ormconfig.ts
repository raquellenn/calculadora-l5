import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'raquel',
  password: '23011821a',
  database: 'calculadora',
  synchronize: true,
  logging: false,
  entities: ['src/**/*.entity{.ts,.js}'],
});

await dataSource.initialize();
