import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useState } from 'react'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const videos = [
    'https://d3sfr3jalg57ca.cloudfront.net/bellalegal/lobby-6931c25f5c202131843fa0a6/1767119344162',
    'https://d3sfr3jalg57ca.cloudfront.net/bellalegal/lobby-6931c25f5c202131843fa0a6/1767102450558',
    'https://d3sfr3jalg57ca.cloudfront.net/bellalegal/lobby-6931c25f5c202131843fa0a6/1767041777049'
  ]

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{ margin: '20px 0' }}>
        {videos.map((video, idx) => (
          <button
            key={video}
            onClick={() => { setShowPopup(true); setSelectedVideo(video);
  setShouldLoadVideo(false); }}
            style={{ margin: '0 10px 10px 0', padding: '10px 20px', fontSize: '16px' }}
          >
            Show Video Player {idx + 1}
          </button>
        ))}
      </div>
      {showPopup && selectedVideo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#222',
            padding: 24,
            borderRadius: 12,
            boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
            minWidth: 320,
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button onClick={() => { setShowPopup(false); setSelectedVideo(null); setShouldLoadVideo(false); }} style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: '#444',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '4px 10px',
              cursor: 'pointer',
              fontSize: 18
            }}>×</button>
             {!shouldLoadVideo ? (
                <div
                    className="w-full h-[360px] bg-black rounded-lg flex items-center justify-center cursor-pointer group"
                    onClick={() => setShouldLoadVideo(true)}
                >
                    <div className="flex flex-col items-center text-white">
                        <button className="w-16 h-16 mb-2 group-hover:scale-110 transition"></button>
                        <span className="text-sm opacity-80">Click to play recording</span>
                    </div>
                </div>
            ) : (
                <VideoPlayer videoSrc={selectedVideo} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default App
