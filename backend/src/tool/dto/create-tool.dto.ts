import {Min} from "class-validator";
import {Insert} from "src/insert/insert.entity";
import {Holder} from "src/holder/holder.entity";


export class CreateToolDto {
    @Min(1)
    length: number;

    @Min(1)
    radius: number;

    @Min(1)
    insertsNumber: number;

    insert: Insert;

    holder: Holder;
}