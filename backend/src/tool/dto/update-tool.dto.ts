import { PartialType } from "@nestjs/mapped-types";
import { CreateToolDto } from '../dto/create-tool.dto';


export class UpdateToolDto extends PartialType(CreateToolDto) {}