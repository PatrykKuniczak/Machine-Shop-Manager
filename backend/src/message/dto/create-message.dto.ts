import {User} from "../../user/user.entity";
import {IsNotEmpty} from "class-validator";


export class CreateMessageDto {
    @IsNotEmpty()
    content: string;

    sender: User;

    addressee: User;
}