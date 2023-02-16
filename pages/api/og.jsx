import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'Redradix'
  const author = searchParams.get('author') ?? ''
  const image =  searchParams.get('image') ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: '100%',
          width: '100%',
          position: 'relative',
          backgroundImage: `url("${image}")`,
          backgroundSize: '1200px 630px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            position: 'absolute',
            inset: '0px',
            background: 'rgb(35,35,35)',
            background:
              'linear-gradient(90deg, rgba(35,35,35,1) 0%, rgba(35,35,35,1) 55%, rgba(35,35,35,0.1) 100%)',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            fontWeight: 600,
            padding: '80px',
            zIndex: '1',
          }}
        >
          <div
            style={{
              backgroundColor: '#4BDA96',
              height: '7px',
              width: '27px',
              marginBottom: '40px',
            }}
          ></div>
          <div
            style={{
              maxWidth: '800px',
              fontSize: 56,
              marginBottom: '20px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              maxWidth: '800px',
              fontSize: 40,
            }}
          >
            {author}
          </div>
        </div>
        <svg
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '92px',
            right: '92px',
            width: '56px',
            height: '62px',
          }}
          width="86"
          height="96"
          viewBox="0 0 86 96"
        >
          <path
            fill="#ffffff"
            d="M52.182 59.573v34.03c0 1.027-.938 2.397-2.099 2.397h-14.16c-1.163 0-2.104-1.37-2.104-2.397v-22.7l18.363-11.33zm13.89-8.575 18.805 11.605c.839.514 1.48 2.07.897 3.129l-7.139 12.932c-.583 1.061-2.173 1.226-3.012.708L57.075 67.928V56.55l8.997-5.552zm9.554-34.372c.834-.514 2.428-.338 3.009.719l7.14 12.934c.585 1.059-.062 2.605-.893 3.118L10.38 79.372c-.84.518-2.428.353-3.017-.708L.226 65.732c-.583-1.06.058-2.615.898-3.13zm-68.263.719c.583-1.058 2.178-1.233 3.012-.719L28.92 28.07v11.383l-8.995 5.55L1.118 33.398c-.834-.513-1.478-2.06-.892-3.118zM50.083 0c1.161 0 2.099 1.371 2.097 2.39v22.708L33.82 36.429V2.389c0-1.02.943-2.389 2.104-2.389z"
          ></path>
        </svg>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
