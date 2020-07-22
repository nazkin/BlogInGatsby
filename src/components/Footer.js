import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styles from './compStyles/footer.module.scss'
const Footer = () => {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title,
                    author
                }
            }
        }
    `)

    return (
        <footer className={styles.footer}>
            <p>Created by: {data.site.siteMetadata.author} || Copyright 2020</p>
            <p>{data.site.siteMetadata.title}</p>
        </footer>
    )
}

export default Footer;