import React from 'react';
import logo from '../../../images/icon.webp';
import { graphql, useStaticQuery } from 'gatsby';

const HeadComp = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <title>{data.site.siteMetadata.title}</title>
            {/* <meta name="description" content={data.site.siteMetadata.description} /> */}
            {/* <meta name="author" content={data.site.siteMetadata.author} /> */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href={logo} type="image/x-icon" />
        </>
    );
};

export default HeadComp;
