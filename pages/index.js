import Head from 'next/head';
import styles from '../styles/Home.module.css';


const post = {
  title: 'mi super tituloooo',
  authorship: 'asfnoasifh asfaf sdfsf gfd ',
  mainImage: 'https://redradix.com/cms/uploads/IAC_Paris1_36102053a1.jpg',
}
export default function Home() {

  const ogImgURL = `http://localhost:3000/api/og?title=${post.title}&author=${post.authorship}&image=${post.mainImage}`;

  console.log(ogImgURL);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://main--stupendous-duckanoo-28310c.netlify.app/" />
        <meta property="og:title" content="OG title of the page" />
        <meta property="og:description" content="OG description of the page" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://main--stupendous-duckanoo-28310c.netlify.app/" />
        <meta name="twitter:title" content="OG title of the page" />
        <meta name="twitter:description" content="OG description of the page" />

        <meta property="og:image" content="https://main--glittering-profiterole-8b0117.netlify.app/assets/images/og.jpg" />
        <meta name="twitter:image" content="https://main--glittering-profiterole-8b0117.netlify.app/assets/images/og.jpg" />

      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome!
        </h1>
        <img src={post.mainImage}></img>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
