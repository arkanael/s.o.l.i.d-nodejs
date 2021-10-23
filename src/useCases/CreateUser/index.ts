import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import {CreateUserController} from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUSeCase = new CreateUserUseCase(postgresUserRepository, mailtrapProvider);

const createUserController = new CreateUserController(createUserUSeCase);

export { createUserUSeCase , createUserController };