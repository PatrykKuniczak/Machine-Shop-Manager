import { Module } from '@nestjs/common';
import { AxisDimensionService } from './axis-dimension.service';
import { AxisDimensionController } from './axis-dimension.controller';


@Module({
  controllers: [AxisDimensionController],
  providers: [AxisDimensionService]
})


export class AxisDimensionModule {}