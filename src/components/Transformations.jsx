import { useState, useRef, useCallback, useEffect } from 'react'
import { Upload, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// BeforeAfter slider component
function BASlider({ before, after, beforeLabel = 'Before', afterLabel = 'After', title }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(5, Math.min(95, pct)))
  }, [])

  const onMouseDown = (e) => { dragging.current = true; e.preventDefault() }
  const onMouseMove = (e) => { if (dragging.current) updatePosition(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchStart = () => { dragging.current = true }
  const onTouchMove = (e) => { if (dragging.current) updatePosition(e.touches[0].clientX) }
  const onTouchEnd = () => { dragging.current = false }

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  })

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="ba-slider relative h-64 sm:h-80 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-lg"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Before image */}
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover object-top" />

        {/* After image clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full z-10 flex items-center justify-center shadow-xl border-2 border-gold pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="flex items-center gap-0.5">
            <ChevronLeft size={10} className="text-gold" />
            <ChevronRight size={10} className="text-gold" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-charcoal/70 backdrop-blur-sm text-white text-xs font-body px-3 py-1 rounded-full z-10">
          {beforeLabel}
        </div>
        <div className="absolute top-3 right-3 bg-gold/80 backdrop-blur-sm text-white text-xs font-body px-3 py-1 rounded-full z-10">
          {afterLabel}
        </div>
      </div>
      {title && (
        <p className="font-display text-center text-charcoal mt-3 text-base font-medium">{title}</p>
      )}
    </div>
  )
}

// Initial transformations using uploaded images
const initialTransformations = [
  {
    id: 1,
    before: '/images/hairtransform.jpg',
    after: '/images/hairtransform.jpg',
    title: 'Hair Transplant - 6 Month Results',
  },
  {
    id: 2,
    before: '/images/hairtransform.jpg',
    after: '/images/hairtransform.jpg',
    title: 'FUE Hair Restoration',
  },
  {
    id: 3,
    before: '/images/hairtransform.jpg',
    after: '/images/hairtransform.jpg',
    title: 'PRP + Hair Transplant Combo',
  },
]

export default function Transformations() {
  const ref = useScrollAnimation()
  const [transformations, setTransformations] = useState(initialTransformations)
  const [showUpload, setShowUpload] = useState(false)
  const [form, setForm] = useState({ title: '', before: null, after: null })

  const handleFileChange = (field) => (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setForm(prev => ({ ...prev, [field]: url }))
    }
  }

  const handleAdd = () => {
    if (form.before && form.after && form.title) {
      setTransformations(prev => [
        ...prev,
        { id: Date.now(), before: form.before, after: form.after, title: form.title }
      ])
      setForm({ title: '', before: null, after: null })
      setShowUpload(false)
    }
  }

  return (
    <section id="transformations" ref={ref} className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <p className="section-tag text-gold animate-on-scroll">Real Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight animate-on-scroll delay-1">
              Before & After
              <br />
              <span className="shimmer-gold font-semibold">Transformations</span>
            </h2>
          </div>
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="mt-4 sm:mt-0 flex items-center gap-2 bg-gold/20 hover:bg-gold/30 border border-gold/40 text-gold text-sm font-body px-5 py-2.5 rounded-full transition-all duration-300 animate-on-scroll delay-2"
          >
            <Upload size={15} />
            Add New Transformation
          </button>
        </div>

        {/* Upload form */}
        {showUpload && (
          <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 mb-10 animate-fade-in">
            <h3 className="font-display text-xl text-white mb-5">Add Transformation Photos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="font-body text-sm text-white/70 block mb-2">Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Hair Transplant Result"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="font-body text-sm text-white/70 block mb-2">Before Photo</label>
                <label className="flex items-center gap-2 cursor-pointer w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/60 font-body text-sm hover:border-gold transition-colors">
                  <Upload size={14} />
                  {form.before ? 'Photo selected ✓' : 'Upload before photo'}
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange('before')} />
                </label>
              </div>
              <div>
                <label className="font-body text-sm text-white/70 block mb-2">After Photo</label>
                <label className="flex items-center gap-2 cursor-pointer w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/60 font-body text-sm hover:border-gold transition-colors">
                  <Upload size={14} />
                  {form.after ? 'Photo selected ✓' : 'Upload after photo'}
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange('after')} />
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleAdd} className="btn-gold text-sm py-2.5">Add Transformation</button>
              <button onClick={() => setShowUpload(false)} className="btn-white-outline text-sm py-2.5">Cancel</button>
            </div>
          </div>
        )}

        {/* Sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <div key={t.id} className={`animate-on-scroll delay-${(i % 4) + 1}`}>
              <BASlider
                before={t.before}
                after={t.after}
                title={t.title}
              />
            </div>
          ))}
        </div>

        <p className="font-body text-center text-white/40 text-sm mt-8 animate-on-scroll">
          Drag the slider to compare before and after results
        </p>
      </div>
    </section>
  )
}
