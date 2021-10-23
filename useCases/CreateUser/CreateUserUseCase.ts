import { User } from "../../src/entities/User";
import { IMailProvider } from "../../src/providers/IMailProvider";
import { IUsersRepository } from "../../src/repositories/IUSersRepository";
import { ICreateUserUSeCaseRequestDTO } from "./CreateUserDTO";

export class CreateUserUSeCase{
      constructor(private usersRepository: IUsersRepository, 
                  private mailProvider: IMailProvider){
      }
      
      async execute(data: ICreateUserUSeCaseRequestDTO){
            const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

            if(userAlreadyExists) { 
                  throw new Error(`User already exists.`)
            }

            const user = new User(data);

            await this.usersRepository.save(user);

            this.mailProvider.sendMail({
                  to: {

                        name: data.name,
                        email: data.email,
                  }, 
                  from:{
                        name: "Equipe do meu app",
                        email: "equipe@meuapp.com"
                  },

                  subject: "Seja bem vindo à plataforma",
                  body: '<p>Você há pode fazer login na nossa plataforma.</p>'  
            });
      }
}
