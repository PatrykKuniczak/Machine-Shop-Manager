import {User} from "../../user/user.entity";
import {IsAlpha, IsPositive, Matches, MaxDate, ValidateIf} from "class-validator";


export class CreateMaterialDto {
    @IsAlpha()
    isoClass: string;

    @Matches("[P | H | M | S | K | N][1-6]")
    isoSubGroup: string;

    @IsAlpha()
    metalAlloy: string;

    @IsPositive()
    amount: number;

    @ValidateIf(o => o.boughtDate >= o.takenDate)
    @MaxDate(new Date())
    takenDate: Date;

    @MaxDate(new Date())
    boughtDate: Date;

    takenBy: User[]
}