import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Crypto } from "src/common/utils/crypto/crypt.util";
import { Repository } from "typeorm";
import {CreateUserDto} from "../dto/create-update-user.dto";
import { User } from "../entities/user.entity";

@Injectable()
class CreateOrUpdateUserService{

    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
        @Inject(Crypto)
        private crypt:Crypto
    ){
    }

    public async execute(
        userToCreate:CreateUserDto
    ): Promise<User>
    {
        try {

            userToCreate.password= await this.crypt.createHash(userToCreate.password)

            const created = await this.userRepository.save(
                await this.userRepository.create(userToCreate)
            )

            created.password=undefined

            return created
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
        

    }
}

export default CreateOrUpdateUserService