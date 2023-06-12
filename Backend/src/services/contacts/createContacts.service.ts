import { IContacts } from "../../interfaces/contact.interface";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { Contact } from "../../entities/contact.entity";

const createContactService = async (
  contactData: IContacts
): Promise<Contact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  delete contactData.profileInformations;

  const contact: Contact = contactRepository.create(contactData);
  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
