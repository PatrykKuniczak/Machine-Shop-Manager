import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import { AxisDimensionModule } from './axis-dimension/axis-dimension.module';
import { FaultModule } from './fault/fault.module';
import { PartModule } from './part/part.module';
import typeOrmConfig from "../database/config/typeorm.config";


@Module({
    imports: [ConfigModule.forRoot({isGlobal: true}), TypeOrmModule.forRootAsync(typeOrmConfig), AxisDimensionModule, FaultModule, PartModule],
    controllers: [],
    providers: []
})


export class AppModule {
}