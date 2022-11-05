import {Position} from "../../position/position.entity";
import {Message} from "../../message/message.entity";
import {PersonalDatum} from "../../personal-datum/personal-datum.entity";


export class CreateUserDto {
    position: Position;

    hiredDate: Date;

    message: Message[]

    personalDatum: PersonalDatum;
}