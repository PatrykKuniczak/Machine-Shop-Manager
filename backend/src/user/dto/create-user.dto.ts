import {Position} from "../../position/position.entity";
import {Message} from "../../message/message.entity";
import {PersonalDatum} from "../../personal-datum/personal-datum.entity";


export class CreateUserDto {
    hiredDate: Date;

    position: Position;

    personalDatum: PersonalDatum;

    message: Message[];
}