import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';
// Note to self: Prettier edits for backend: Trailing commas - all; Use Tabs - false; single quotes - true;

export const User = list({
  // access
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO: add roles, cart, orders
  },
});
