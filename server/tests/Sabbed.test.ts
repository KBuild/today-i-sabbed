import { createTestContext } from './__helpers';

const ctx = createTestContext();

it('ensures that a Sabbed can be created and published', async () => {
  const creationResult = await ctx.client.send(`
    mutation {
      createSabbed(title: "Nexus", body: "Nexus is the framework") {
        title
        body
        published
      }
    }
  `);

  expect(creationResult).toMatchInlineSnapshot(`
    Object {
      "createSabbed": Object {
        "body": "Nexus is the framework",
        "published": true,
        "title": "Nexus",
      },
    }
  `);
});