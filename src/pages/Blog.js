import React from 'react'
import Layout from '../components/Layout'
import {graphql, useStaticQuery} from 'gatsby'
import styles from './pageStyles/blog.module.scss'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Blog = () => {

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title,
                            date
                        },
                        html
                    }
                }
            }
        }
    `)
    let edgesData = data.allMarkdownRemark.edges;
    console.log(data.allMarkdownRemark);

    const blogs = data.allMarkdownRemark.edges.map(edge => {
        const content = edge.node.html;
        const contentHTML = ReactHtmlParser(content);
        console.log(edge.node.html)
        return (
            <div key={edge.node.frontmatter.title + edge.node.frontmatter.date}>
                <div className={styles.blogHeader}>
                    <h2 className={styles.blogTitle}>{edge.node.frontmatter.title}</h2>
                    <p className={styles.blogDate}>{edge.node.frontmatter.date}</p>
                </div>
                <div>
                    {contentHTML}
                </div>

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