import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import ReactHtmlParser from 'react-html-parser';
import styles from './templateStyles/templateBlog.module.scss';

export const data = graphql`
    query(
        $slug: String
    ){
        markdownRemark(fields: {
            slug: {
                eq: $slug
            }
        }){
            frontmatter{
                title,
                date
            },
            html
        }
    }
`;

const Blog = (props) => {
    const blogHeader = props.data.markdownRemark.frontmatter;
    const blogBody = props.data.markdownRemark.html;
    const bodyHTML = ReactHtmlParser(blogBody);

    return (
        <Layout>
            <div className={styles.blogHead}>
                <h1>{blogHeader.title}</h1>
                <h4>{blogHeader.date}</h4>
            </div>
            <div>
                {bodyHTML}
            </div>
        </Layout>
    )
}


export default Blog