'use client'

import { useEffect, useState } from 'react'

const andreaIcon = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ksw9H8eXvKfupc1NytqE7aSU276def.png'
const catalogueEntries = [
  { name: 'Abby', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hZS55mZXsqBLFfbGCn6Szrf7aMIeQJ.png', detailImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VTMub5eTY6cnuGHhRhdOkVtESqaFdL.png' },
  { name: 'Abella Danger', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jtVVIuRDaW72FGdE4bsDOVIJH2crgq.png' },
  { name: 'Abril', image: andreaIcon },
  { name: 'Aina', image: andreaIcon },
  { name: 'Andrea', image: andreaIcon },
  { name: 'Andrea Beltrán', image: andreaIcon, detailImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5466-ddRidvG58OFZ9da1UdGgu6dvKZR3U9.jpg' },
  { name: 'Candela Herrero', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-StlQ5IH9Eryauk8vA6hekLBvbEt5Mh.png' },
  { name: 'Carla', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0GWYIgmCff80mVD3GktkvfMwL9aZXX.png' },
  { name: 'Emily Willis', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-toJQC12ZmPc37YJrX3XeARx4kWjuZY.png' },
  { name: 'Eva Elfie', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-InxYlkCFWHlSZyYq1BlrIlfOPIApfm.png' },
  { name: 'Flor Indica', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O1BOr5qNT3aUef5TgwwuCDqKT9VP0L.png' },
  { name: 'Katty West', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YJ4lZDzhi6Eb3at2z3QpWmsifdrSJV.png' },
  { name: 'Lana Rhoades', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NhdEv7xeM5UVeSDZEiuoNdIQ58W4bF.png' },
  { name: 'Laura', image: andreaIcon },
  { name: 'Mia Khalifa', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wjEteA3Ng9a33FGROuf5f1wAPpxIh8.png' },
  { name: 'Mia Malkova', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3H9Pqprd8bjrYwBguy15PhKeEwPpu.png' },
  { name: 'Paula', image: andreaIcon },
  { name: 'Paula Pombo', image: andreaIcon },
  { name: 'Payton Presslee', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HcGqqNMkyVLDkEwKRdZl2v8cbpDG8d.png' },
  { name: 'Violet Myers', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Lgc3XYsJZC5RDKTXlRt37n3HDqh0qp.png' },
  { name: 'Yenifer Chacon', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mbdmxDkh5ROIJlXv6dqXjRJHszrt2l.png' },
]

const PAGE_SIZE = 12
const PAGE_COUNT = Math.max(1, Math.ceil(catalogueEntries.length / PAGE_SIZE))

export default function Page() {
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [vectors, setVectors] = useState(false)
  const [diary, setDiary] = useState(false)
  const [detail, setDetail] = useState(false)
  const [album, setAlbum] = useState(false)
  const [previewMedia, setPreviewMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null)

  const pageStart = (page - 1) * PAGE_SIZE
  const pageEntries = catalogueEntries.slice(pageStart, pageStart + PAGE_SIZE)
  const catalogueSlots = [...pageEntries, ...Array(Math.max(0, PAGE_SIZE - pageEntries.length)).fill(null)]
  const selectedEntry = catalogueEntries[selected] ?? catalogueEntries[0]
  const openDetail = () => setDetail(true)
  const closeDetail = () => { setDetail(false); setAlbum(false); setPreviewMedia(null) }
  const galleryMedia = [
    { type: 'image' as const, src: selectedEntry.image },
    ...(selectedEntry.name === 'Abby' ? [{ type: 'video' as const, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/745bd35e-25a9-40f7-8de8-0e2a4a1e765e-DIZL44TktH8dzjSkRemH4lvb2MRnXh.mp4' }] : []),
    ...(selectedEntry.name === 'Candela Herrero' ? [{ type: 'video' as const, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%200.06.28-29jusnDyHHGxOfyrYWwy03p7TD2vux.mp4' }] : []),
    ...(selectedEntry.name === 'Carla' ? [
      { type: 'video' as const, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%2015.15.00-KNO5UnsK5GPfYuKrZTHYq7D7hCkqZ0.mp4' },
      { type: 'video' as const, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sin%20ti%CC%81tulo-M0mGRTtghhytsio0WmnBrRNWV9yadR.mp4' },
      { type: 'video' as const, label: 'VIDEO 03', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sin%20ti%CC%81tulo%20copia-8qSZHqL1Amg3JcqwamNlomRyp99exz.mp4' },
      { type: 'video' as const, label: 'VIDEO 07', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sin%20ti%CC%81tulo%2010.59.20-CKwGUKAcNbZzs7oOSSA21KuVXlCf4m.mp4' },
    ] : []),
    { type: 'video' as const, src: `/media/${selectedEntry.name.toLowerCase().replaceAll(' ', '-')}/video-01.mp4` },
    { type: 'video' as const, src: `/media/${selectedEntry.name.toLowerCase().replaceAll(' ', '-')}/video-02.mp4` },
  ]

  const nextGirl = () => setSelected((value) => { const nextValue = (value + 1) % catalogueEntries.length; setPage(Math.floor(nextValue / PAGE_SIZE) + 1); return nextValue })
  const previousGirl = () => setSelected((value) => { const previousValue = (value - 1 + catalogueEntries.length) % catalogueEntries.length; setPage(Math.floor(previousValue / PAGE_SIZE) + 1); return previousValue })
  const next = () => {
    setPage((currentPage) => {
      const nextPage = Math.min(currentPage + 1, PAGE_COUNT)
      setSelected((nextPage - 1) * PAGE_SIZE)
      return nextPage
    })
  }
  const previous = () => {
    setPage((currentPage) => {
      const previousPage = Math.max(currentPage - 1, 1)
      setSelected((previousPage - 1) * PAGE_SIZE)
      return previousPage
    })
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      if (key === 'd' || event.key === 'arrowright') next()
      if (key === 'a' || event.key === 'arrowleft') previous()
      if (key === 'z') setZoom((value) => !value)
      if (key === 'x' && catalogueEntries[selected]) openDetail()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])

  return (
    <main className="game-shell" aria-label="Neon Archive creature catalogue">
      <section className={`game-screen ${zoom ? 'is-zoomed' : ''}`}>
        {detail ? (
          <section className="detail-screen" aria-label={`Ficha de ${selectedEntry.name}`}>
            <div className="detail-topline"><button onClick={previousGirl} aria-label="Previous girl">‹</button><span>WORLD MAP</span><strong>CHARACTER DATA</strong><span>{selected + 1} OF {catalogueEntries.length}</span><button onClick={nextGirl} aria-label="Next girl">›</button></div>
            <div className={`detail-content ${album ? 'album-open' : ''}`}>
              <div className="detail-info">
                {album ? <div className="album-view">
                  <div className="album-heading"><img className="album-heading-thumb" src={selectedEntry.image} alt="" /><span>{selectedEntry.name.toUpperCase()}</span></div>
                  <div className="media-grid">{galleryMedia.map((media, index) => <button className="media-card" key={media.src} onClick={() => setPreviewMedia(media)}>{media.type === 'image' ? <img src={media.src} alt={`${selectedEntry.name} gallery item ${index + 1}`} /> : <span className="video-card"><video src={media.src} muted loop autoPlay playsInline preload="metadata" /><b>▶</b><small>{'label' in media ? media.label : `VIDEO ${String(index).padStart(2, '0')}`}</small></span>}</button>)}</div>
                </div> : <>
                  <h2><img className="detail-name-thumb" src={selectedEntry.image} alt="" />{selectedEntry.name.toUpperCase()}</h2>
                  <div className="stat-list">
                    {['CULO', 'CARA', 'TETAS', 'MAMADA', 'CUERPO', 'CACHONDA'].map((stat) => <div className="stat-row" key={stat}><span>{stat}</span><div className="stat-track"><i /></div><b>1</b></div>)}
                  </div>
                  <div className="level-row"><span>NIVEL</span><div className="level-track"><i /></div><b>1</b></div>
                </>}
              </div>
              <div className="detail-portrait">{previewMedia ? (previewMedia.type === 'image' ? <img src={previewMedia.src} alt={`${selectedEntry.name} selected media`} /> : <video src={previewMedia.src} controls autoPlay loop playsInline />) : <img src={selectedEntry.detailImage ?? selectedEntry.image} alt="" />}</div>
            </div>
            <footer className="detail-footer"><button onClick={closeDetail}>○ ATRÁS</button><button>△ ATAQUE</button><strong onClick={() => setAlbum((value) => !value)} role="button" tabIndex={0} aria-label="Open album">ALBUM</strong><button onClick={() => { setAlbum(false); setPreviewMedia(null) }}>× STATS</button></footer>
          </section>
        ) : <>
        <header className="game-header">
          <button className="nav-arrow left" onClick={previousGirl} aria-label="Previous girl">‹</button>
          <button className="world-label" onClick={() => setDiary(false)}>WORLD MAP</button>
          <h1>CATALOGUE</h1>
          <button className="diary-label" onClick={() => setDiary(true)}>KENT&apos;S DIARY</button>
          <button className="nav-arrow right" onClick={nextGirl} aria-label="Next girl">›</button>
        </header>

        <div className="catalogue-body">
          <div className="tech-ring ring-one" />
          <div className="tech-ring ring-two" />
          <div className="grid-lines" />
          <div className="creature-grid" aria-label="Creature selection">
            {catalogueSlots.map((portrait, index) => (
              <button className={`creature-slot ${selected === pageStart + index ? 'selected' : ''} ${!portrait ? 'empty-slot' : ''}`} key={portrait?.name ?? `locked-${pageStart + index}`} onClick={() => { if (portrait) { setSelected(pageStart + index); openDetail() } }} aria-label={portrait ? `Select portrait ${pageStart + index + 1}` : 'Empty catalogue slot'}>
                <span className="corner-bracket" />
                {portrait ? <img className="portrait-art" src={portrait.image} alt="" style={{ filter: vectors ? 'drop-shadow(0 0 7px #b9ff00)' : undefined }} /> : <span className="locked-mark">?</span>}
              </button>
            ))}
          </div>
          <button className="side-next" onClick={next} aria-label="Next page">▶</button>
          {diary && <aside className="diary-panel"><strong>KENT&apos;S DIARY</strong><p>Portrait record {selected + 1} was archived beyond the eastern ridge.</p><button onClick={() => setDiary(false)}>CLOSE</button></aside>}
        </div>

        <footer className="game-footer">
          <button onClick={() => setSelected((value) => (value + 1) % catalogueEntries.length)}>▣ INTERACT</button>
          <button onClick={() => setVectors((value) => !value)}>△ VECTORS</button>
          <strong>{page} OF {PAGE_COUNT}</strong>
          <button onClick={() => setZoom((value) => !value)}>○ ZOOM</button>
          <button onClick={() => setVectors((value) => !value)}>× VIEW {vectors ? 'NORMAL' : 'INVISIMAL'}</button>
        </footer>
        </>}
      </section>
    </main>
  )
}
