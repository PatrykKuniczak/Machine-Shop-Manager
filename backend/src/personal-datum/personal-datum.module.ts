import { Module } from '@nestjs/common';
import { PersonalDatumService } from './personal-datum.service';
import { PersonalDatumController } from './personal-datum.controller';


@Module({
  controllers: [PersonalDatumController],
  providers: [PersonalDatumService]
})


export class PersonalDatumModule {}
