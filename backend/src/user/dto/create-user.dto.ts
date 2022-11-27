import {Position} from "../../position/position.entity";
import {Message} from "../../message/message.entity";
import {PersonalDatum} from "../../personal-datum/personal-datum.entity";
import {IsEmail, IsString, MinLength} from "class-validator";


export class CreateUserDto {
    @MinLength(10)
    login: string;

    @MinLength(10)
    @IsString()
    password: string;

    @IsEmail()
    email: string;

    hiredDate: Date;

    personalDatum: PersonalDatum;

    position: Position;

    message: Message[];
}