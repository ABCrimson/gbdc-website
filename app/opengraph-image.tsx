import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Great Beginnings Day Care - Quality childcare for ages 6 weeks to 12 years'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(135deg, #0B7BA7 0%, #1BAAA8 50%, #26B89A 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px 60px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              textShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            Great Beginnings
          </div>
          <div
            style={{
              fontSize: 48,
              color: 'white',
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Day Care Center
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'white',
              maxWidth: '900px',
              lineHeight: 1.4,
              opacity: 0.9,
            }}
          >
            Quality childcare for ages 6 weeks to 12 years in Roselle, IL
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 50,
              gap: 30,
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '20px 40px',
                borderRadius: 12,
                fontSize: 24,
                color: 'white',
                fontWeight: 600,
              }}
            >
              📚 Educational Programs
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '20px 40px',
                borderRadius: 12,
                fontSize: 24,
                color: 'white',
                fontWeight: 600,
              }}
            >
              👨‍👩‍👧‍👦 Nurturing Environment
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
