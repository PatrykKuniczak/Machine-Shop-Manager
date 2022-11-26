import {IsAlpha, Min, MinLength} from "class-validator";
import {Tool} from "../../tool/tool.entity";


export class CreateHolderDto {
    @MinLength(3)
    name: string;

    @Min(1)
    length: number;

    @Min(1)
    radius: number;

    @MinLength(3)
    @IsAlpha()
    type: string;

    tool: Tool[];
}