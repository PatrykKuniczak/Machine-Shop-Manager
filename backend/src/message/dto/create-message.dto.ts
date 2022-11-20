import {User} from "../../user/user.entity";

export class CreateMessageDto {
    content: string;

    sender: User

    addressee: User
}