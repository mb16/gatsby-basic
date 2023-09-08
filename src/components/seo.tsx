import * as React from 'react'
import useSiteMetadata from './useSiteMetadata';

interface SeoProps {
    title: string;
}

const Seo = ({ title }: SeoProps ) => {
  const data = useSiteMetadata();

  return (
    <title>{title} | {data?.site?.siteMetadata?.title}</title>
  )
}

export default Seo