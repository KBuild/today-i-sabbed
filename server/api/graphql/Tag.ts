import { schema } from 'nexus';

schema.objectType({
  name: 'Tag',
  definition(t) {
    t.string('id');
    t.string('name');
    t.date('createdAt');
    t.date('updatedAt');
  },
});