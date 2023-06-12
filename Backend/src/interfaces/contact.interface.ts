import { Contact } from "../entities/contact.entity";

type IContacts = {
  [x: string]: any;
  id: number;
  name: string;
  email: string;
  img: string;
  phone: string;
};

type IContactUpdateRequest = {
  id: number;
  name: string;
  email: string;
  img: string;
  phone: string;
};

type TContactsPagination = {
  page: number | null | undefined;
  perPage: number | null | undefined;
  data: Contact[];
};

export { IContacts, IContactUpdateRequest, TContactsPagination };
