const path = require('path');


module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    // Transform the new node here and create a new node or
    // create a new node field.
    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md');
        // console.log(JSON.stringify(node));
        createNodeField({
            node: node,
            name: 'slug',
            value: slug
        });
    }
  }

  module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
     // 1) Path to template
    const blogTemplate = path.resolve('./src/templates/blog.js');
    // 2) Path to markdown
    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `);
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/Blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        });
    });

    // 3) Create new pages
  }