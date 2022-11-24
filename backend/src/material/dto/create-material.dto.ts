import {User} from "../../user/user.entity";
import {IsAlpha, Matches, MaxDate, Min, ValidateIf} from "class-validator";


export class CreateMaterialDto {
    @IsAlpha()
    isoClass: string;

    @Matches("[P | H | M | S | K | N][1-6]")
    isoSubGroup: string;

    @IsAlpha()
    metalAlloy: string;

    @Min(1)
    amount: number;

    @MaxDate(new Date())
    boughtDate: Date;

    @ValidateIf(o => o.boughtDate >= o.takenDate)
    @MaxDate(new Date())
    takenDate: Date;

    takenBy: User[];
}