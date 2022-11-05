import {User} from "../../user/user.entity";
import {IsAlpha, MinDate} from "class-validator";


export class CreateMaterialDto {
    isoNumber: number;

    @IsAlpha()
    metalAlloy: string;

    takenBy: User[]

    @MinDate(new Date())
    @MinDate(new Date("2100.01.01"))
    takenDate: Date;

    @MinDate(new Date())
    @MinDate(new Date("2100.01.01"))
    boughtDate: Date;
}