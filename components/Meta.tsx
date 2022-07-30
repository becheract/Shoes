import Head from 'next/head'
export default function Meta({title , keywords, description} : any) {
  return (
    <Head>
        <meta name="viewport"
        content="width=device-width, initial-scale=1"/>

        <meta name="description" content={description}/>

        <meta charSet="utf8"/>

        <link rel="icon" href="/favicon.ico"/>

        <title>{title}</title>
   
    </Head>
  )
}

Meta.defaultProps ={
    title: 'Bechera Shoes',
    keywords: 'web development, programming ,shoes, nike',
    description: 'server-side-rendering side project'
}
