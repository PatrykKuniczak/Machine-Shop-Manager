import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {AxisDimensionModule} from './axis-dimension/axis-dimension.module';
import {FaultModule} from './fault/fault.module';
import {PartModule} from './part/part.module';
import {MachineTechnicalDataModule} from './machine-technical-data/machine-technical-data.module';
import {OperationModule} from './operation/operation.module';
import {InspectionModule} from './inspection/inspection.module';
import {ToolModule} from './tool/tool.module';
import {InsertModule} from './insert/insert.module';
import {HolderModule} from './holder/holder.module';
import typeOrmConfig from "../database/config/typeorm.config";
import {MessageModule} from "./message/message.module";
import {PositionModule} from "./position/position.module";
import {PermissionModule} from "./permission/permission.module";
import {UserModule} from "./user/user.module";
import {PersonalDatumModule} from "./personal-datum/personal-datum.module";
import {MaterialModule} from "./material/material.module";
import {OrderModule} from "./order/order.module";
import {MachineModule} from "./machine/machine.module";
import {InstrumentModule} from "./instrument/instrument.module";


@Module({
    imports: [ConfigModule.forRoot({isGlobal: true}), TypeOrmModule.forRootAsync(typeOrmConfig),
        AxisDimensionModule, FaultModule, PartModule, MachineTechnicalDataModule, OperationModule,
        InspectionModule, MessageModule, PositionModule, PermissionModule, UserModule, PersonalDatumModule,
        MaterialModule, OrderModule, MachineModule, ToolModule, InsertModule, HolderModule, InstrumentModule],
    controllers: [],
    providers: []
})


export class AppModule {
}