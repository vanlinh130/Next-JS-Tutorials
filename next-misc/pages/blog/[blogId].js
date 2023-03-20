import Head from "next/head";

function Blog({ title, description }) {
    return ( 
        <>
            <Head>
                <title>deƯ{title}</title>   
                <meta name="description" content={description}/>
            </Head> 
            <h1 className="content">Article</h1>
        </>

     );
}

export default Blog;

export async function getServerSideProps() {
    return {
        props: {
            title: 'Article Title',
            description: 'Article description',
        },
    }
}