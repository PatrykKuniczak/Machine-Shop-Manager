import {Module} from '@nestjs/common';
import {MachineTechnicalDataService} from './machine-technical-data.service';
import {MachineTechnicalDataController} from './machine-technical-data.controller';


@Module({
    controllers: [MachineTechnicalDataController],
    providers: [MachineTechnicalDataService]
})


export class MachineTechnicalDataModule {
}