import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { IContacts } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entity";
import { contactSchema } from "../../schemas/contacts.schema";

const retrieveContactsService = async (userId: number): Promise<IContacts> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactsRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      /* profileInformation: true, */
    },
  });

  if (!contact) {
    throw new AppError("User not found", 404);
  }

  const returnContact: IContacts = contactSchema.parse(contact);

  return returnContact;
};

export default retrieveContactsService;
