const path = require('path');
const axios = require('axios');

exports.createPages = async function({ graphql, actions }) {
  // 1. Query all tips
  const { data } = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "tip" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  // 2. Loop over each tip
  const tips = data.allMdx.nodes;
  tips.forEach((tip, i) => {
    // 3. For each tip, create a page
    actions.createPage({
      // what is the url for the page
      path: `/tips/${tip.frontmatter.slug}`,
      // what React component will we render when someone hits this page
      component: path.resolve('./src/components/templates/tip.js'),
      // what data is needed for the page itself
      context: {
        // not a React Context
        id: tip.id,
        prev: i !== 0 ? tips[i - 1].frontmatter.slug : null,
        next: tips[i + 1] ? tips[i + 1].frontmatter.slug : null,
      },
    });
  });
};

async function sourceUsers({ actions, createNodeId, createContentDigest }) {
  // 1. Fetch the users
  // destructure the data prop into its own variable, and then rename it to 'users'
  const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');

  // 2. Loop over each user
  users.forEach(user => {
    console.log('sourcing a user', user.name);

    // 3. Create a node for each user in the graphql API
    const node = {
      // take all the user's properties
      ...user,
      // add a couple custom properties that gatsby requires
      id: createNodeId(`user-${user.id}`),
      parent: null, // no parent to this
      children: [], // no children
      internal: {
        type: 'User',
        mediaType: 'application/json',
        contentDigest: createContentDigest(user), 
      },
    };
    actions.createNode(node);
  });
}

exports.sourceNodes = async function({ 
  actions,
  createNodeId,
  createContentDigest }) {
  await sourceUsers({ actions, createNodeId, createContentDigest })
}
