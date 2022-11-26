import { PartialType } from "@nestjs/mapped-types";
import { CreateInsertDto } from "./create-insert.dto";


export class UpdateInsertDto extends PartialType(CreateInsertDto) {}