import { MinLength, MaxLength, IsString, IsDefined, IsEmail, IsOptional, validate } from 'class-validator'
import { parseError } from '../../../../utils/parseClassValidatorError'
import { AbstractDto } from '../../../../common/abstractDto'

export interface IRequestCreateUserDto {
    email: string;
    password: string;
}

export class RequestCreateUserDto extends AbstractDto implements IRequestCreateUserDto {
    //-------------FIELD-------------
    @IsEmail()
    @IsDefined({ message: 'Email is required' })
    public email: string

    //-------------FIELD-------------
    @IsDefined({ message: 'Password is required' })
    @MinLength(3, {
        message: 'Password is too short',
    })
    @MaxLength(15, {
        message: 'Password is too long',
    })
    @IsString({message:"T'es nul"})
    public password: string

    constructor(props: IRequestCreateUserDto) {
        super();

        // const { firstname, lastname, username, email, password } = props;
        const { email, password } = props;

        // this.firstname = firstname;
        // this.lastname = lastname;
        // this.username = username;
        this.email = email;
        this.password = password;
    }
}