import { schema } from 'nexus';

schema.objectType({
  name: 'Sabbed',
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('body');
    t.boolean('published');
    t.date('createdAt');
    t.date('updatedAt');
  },
});

schema.queryType({
  definition(t) {
    t.list.field('sabbedList', {
      type: 'Sabbed',
      resolve(_root, _args, ctx) {
        return ctx.db.sabbed.findMany({ where: { published: true } });
      }
    });
  },
});

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createSabbed', {
      type: 'Sabbed',
      args: {
        title: schema.stringArg({ required: true }),
        body: schema.stringArg({ required: true }),
      },
      resolve(_root, args, ctx) {
        const sabbed = {
          title: args.title,
          body: args.body,
          published: true,
        };
        return ctx.db.sabbed.create({ data: sabbed });
      }
    })
  }
});