import { Repository } from "typeorm";
import {
  IContacts,
  TContactsPagination,
} from "../../interfaces/contact.interface";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactService = async (
  page: number | undefined,
  perPage: number | undefined
): Promise<TContactsPagination> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  let contacts: Contact[] | undefined;

  const orderBy = "email";
  let orderObj = {};
  if (orderBy === "email") {
    orderObj = {
      email: "desc",
    };
  }

  if (!page || !perPage) {
    contacts = await contactRepository.find({
      relations: {
        /* profileInformation: true, */
      },
      withDeleted: true,
    });
  } else {
    contacts = await contactRepository.find({
      skip: (page - 1) * perPage,
      take: perPage,
      order: orderObj,
      relations: {
        /*  profileInformation: true, */
      },
    });
  }

  // const returnUsers: TUsersResponse = usersSchemaResponse.parse(users)

  return {
    page: page || null,
    perPage: perPage || null,
    data: contacts,
  };
};

export default listContactService;
