import { Module } from '@nestjs/common';
import { InsertService } from './insert.service';
import { InsertController } from './insert.controller';

@Module({
    controllers: [InsertController],
    providers: [InsertService]
})
export class InsertModule {}
