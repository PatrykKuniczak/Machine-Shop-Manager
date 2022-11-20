import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {AxisDimensionModule} from './axis-dimension/axis-dimension.module';
import {FaultModule} from './fault/fault.module';
import {PartModule} from './part/part.module';
import {MachineTechnicalDataModule} from './machine-technical-data/machine-technical-data.module';
import { OperationModule } from './operation/operation.module';
import { InspectionModule } from './inspection/inspection.module';
import { ToolModule } from './tool/tool.module';
import { InsertModule } from './insert/insert.module';
import { HolderModule } from './holder/holder.module';
import typeOrmConfig from "../database/config/typeorm.config";


@Module({
    imports: [ConfigModule.forRoot({isGlobal: true}), TypeOrmModule.forRootAsync(typeOrmConfig),
        AxisDimensionModule, FaultModule, PartModule, MachineTechnicalDataModule, OperationModule,
        InspectionModule, ToolModule, InsertModule, HolderModule]
})


export class AppModule {
}