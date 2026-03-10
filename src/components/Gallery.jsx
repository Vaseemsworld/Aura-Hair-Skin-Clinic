import { useState } from 'react'
import { Upload, X, ZoomIn } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const initialImages = [
  { id: 1, src: '/images/auraoutside.jpg', caption: 'Aura Clinic — Udaipur', size: 'tall' },
  { id: 2, src: '/images/hairtransform.jpg', caption: 'Hair Transplant Results', size: 'normal' },
  { id: 3, src: '/images/aura_logo.jpg', caption: 'Aura Brand', size: 'small' },
  { id: 4, src: '/images/auraoutside.jpg', caption: 'Clinic Entrance', size: 'normal' },
  { id: 5, src: '/images/hairtransform.jpg', caption: 'Before & After', size: 'tall' },
  { id: 6, src: '/images/auraoutside.jpg', caption: 'Treatment Area', size: 'small' },
]

export default function Gallery() {
  const ref = useScrollAnimation()
  const [images, setImages] = useState(initialImages)
  const [lightbox, setLightbox] = useState(null)

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    files.forEach(file => {
      const url = URL.createObjectURL(file)
      setImages(prev => [...prev, {
        id: Date.now() + Math.random(),
        src: url,
        caption: file.name.replace(/\.[^/.]+$/, ''),
        size: 'normal'
      }])
    })
  }

  return (
    <section id="gallery" ref={ref} className="py-24 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <p className="section-tag animate-on-scroll">Our Clinic</p>
            <h2 className="section-title animate-on-scroll delay-1">
              Clinic Gallery &
              <br />
              <span className="gold-text">Treatment Showcase</span>
            </h2>
          </div>
          <label className="mt-4 sm:mt-0 flex items-center gap-2 cursor-pointer bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold text-sm font-body px-5 py-2.5 rounded-full transition-all duration-300 animate-on-scroll delay-2">
            <Upload size={15} />
            Add Photos
            <input type="file" multiple accept="image/*" className="hidden" onChange={handleUpload} />
          </label>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4 animate-on-scroll delay-1">
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`break-inside-avoid group relative overflow-hidden rounded-2xl cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-400 ${
                img.size === 'tall' ? 'row-span-2' : ''
              }`}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  img.size === 'tall' ? 'h-80' : img.size === 'small' ? 'h-36' : 'h-52'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white font-body text-sm">{img.caption}</span>
                <ZoomIn size={18} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-charcoal-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white/70 font-body text-sm">{lightbox.caption}</p>
        </div>
      )}
    </section>
  )
}
