import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  img: z.string(),
  phone: z.string(),
  createdAt: z.date(),
});

const contactInformationsSchema = z.object({
  id: z.number(),
});

const contactInformationsSchemaRequest = contactInformationsSchema.omit({
  id: true,
});

const userSchemaRequest = userSchema
  .omit({
    createdAt: true,
    id: true,
  })
  .extend({
    profileInformations: z.optional(contactInformationsSchemaRequest),
  });

const userSchemaWithoutId = userSchema.omit({
  deletedAt: true,
  createdAt: true,
  id: true,
  age: true,
});

const userSchemaUpdateRequest = userSchemaRequest.partial();

const userSchemaResponse = userSchema.omit({
  password: true,
});

const usersSchemaResponse = z.array(userSchemaResponse);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdateRequest,
  userSchemaWithoutId,
};
