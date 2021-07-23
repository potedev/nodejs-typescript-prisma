import { createUserProps } from './userTypes'
import { User } from '../../app/database/typeorm/entities/user'

export class UserRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: createUserProps) {
        const UserEntity = this.entities.user

        const exists = await this.exists(userProps.email);

        if (!exists) {
            await UserEntity.create(
                {
                    data: {
                        email:userProps.email
                    }
                })
        }

        return
    }

    public async exists(email: string): Promise<boolean> {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        console.log('exists : ', result);

        return !!result === true;
    }

    public async getUserByEmail(email: string): Promise<User> {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        return result
    }
}