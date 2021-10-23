yarn init -y
yarn add express 
yarn add typescript ts-node-dev -D
tsc --init 
yarn add @types/express -D
yarn add uuidv4
yarn add nodemailer
yarn add @types/nodemailer -D
yarn add dotenv


yarn start

packegd by filter
fake repotory     

SOLID:

DTOS: 


Mailtrap: é uma ferramenta gratuita para testar envio de e-mails. 
Essa ferramenta é extremamente útil em ambiente local de desenvolvimento, 
porque o envio de e-mail fica centralizado e através da ferramenta é muito mais fácil analisar o conteúdo do e-mail.

https://mailtrap.io/

Apos se cadastarar no site do Mailtrap, pegar as credentials e substituir no MailtrapMailProvider
 user: "6f36b6b6c38a87",
 pass: "6f36b6b6c38a87"

 Exemplo:
 constructor(){
            this.transporter = nodemailer.createTransport({
                  host: "smtp.mailtrap.io",
                  port: 2525,
                  auth: {
                    user: "6f36b6b6c38a87",
                    pass: "6f36b6b6c38a87"
                  }
            });
      }

Depois é só executar o comando: yarn start

http://localhost:3333/user
