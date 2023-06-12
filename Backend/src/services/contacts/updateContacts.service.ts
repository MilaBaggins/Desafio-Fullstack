import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";
import {
  IContactUpdateRequest,
  IContacts,
} from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entity";

const updateContactsService = async (
  userData: IContactUpdateRequest,
  userId: number
): Promise<IContacts> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldUserData: Contact | null = await contactRepository.findOneBy({
    id: userId,
  });

  const newContacData: Contact = contactRepository.create({
    ...oldUserData,
    ...userData,
  });
  await contactRepository.save(newContacData);

  return newContacData;
};

export default updateContactsService;
