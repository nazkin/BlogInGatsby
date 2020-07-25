import React from 'react'
import Layout from '../components/Layout'
import {graphql, useStaticQuery} from 'gatsby'
import styles from './pageStyles/blog.module.scss'


const Blog = (props) => {
 

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title,
                            date
                        },
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `);


    const navHandler = (slug)=> {
        props.navigate(`/Blog/${slug}`);
    }

    const blogs = data.allMarkdownRemark.edges.map(edge => {

        let blogSlug = edge.node.fields.slug;
        return (
            <div key={blogSlug}>
                <div onClick={()=> navHandler(blogSlug)} className={styles.blogHeader}>

                    <h2 className={styles.blogTitle}>{edge.node.frontmatter.title}</h2>
                    <p className={styles.blogDate}>{edge.node.frontmatter.date}</p>

                </div> 
                {/* <div>
                    {contentHTML}
                </div> */}
            </div>
        )
    })
    return (
        <Layout>
           <h1>Recent Blog Posts</h1>
           <div>
                {blogs}
           </div>
        </Layout>
    )
}

export default Blog