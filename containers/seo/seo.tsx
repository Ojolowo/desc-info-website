import Head from "next/head";

interface Props {
   title: string;
   children: React.ReactNode;
   description?: string;
}

export const AppContainer = ({ title, children, description }: Props) => {
   return (
      <>
         <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/vercel.svg" />
         </Head>
         <>{children}</>
      </>
   );
};
