import { TypeOrmModule } from '@nestjs/typeorm';

//jdbc:postgresql://localhost:5433/store_shared_db
export default TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'store_user',
    password: 'store_password',
    database: 'store_shared_db',
    schema: 'store',
    entities: [__dirname + '/**/*.entity{.ts,.js}', __dirname + '/../**/*.entity{.ts,.js}'],
    // true - only for development
    synchronize: false,
});
