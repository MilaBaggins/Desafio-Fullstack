import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  email: z.string().email(),
  img: z.string(),
  phone: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
});

const contactSchemaResponse = contactSchema.extend({
  createdAt: z.string(),
});

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
  })
  .partial();

const contactsSchemaResponse = z.array(contactSchemaResponse);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
  contactsSchemaResponse,
};
