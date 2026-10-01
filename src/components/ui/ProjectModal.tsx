import { useEffect, useRef } from 'react'
import {
  X,
  ExternalLink,
  Play,
  Video,
} from 'lucide-react'
import { GithubIcon } from './Icons'
import type { Project } from '../../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/**
 * Parses any video URL including Google Drive links (sharing/view/open links),
 * YouTube, or direct MP4/WebM files into an embeddable format.
 */
function parseVideoSource(url?: string): { isIframe: boolean; src: string } {
  if (!url) {
    // Default high-performance sample tech demo video
    return {
      isIframe: false,
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    }
  }

  // 1. Google Drive Link: converts view/open links to /preview iframe
  const gdriveRegex = /drive\.google\.com\/(?:file\/d\/([a-zA-Z0-9_-]+)|open\?id=([a-zA-Z0-9_-]+))/
  const gdriveMatch = url.match(gdriveRegex)
  if (gdriveMatch) {
    const fileId = gdriveMatch[1] || gdriveMatch[2]
    return {
      isIframe: true,
      src: `https://drive.google.com/file/d/${fileId}/preview`,
    }
  }

  if (url.includes('drive.google.com') && url.includes('/preview')) {
    return {
      isIframe: true,
      src: url,
    }
  }

  // 2. YouTube
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)
  if (ytMatch) {
    return {
      isIframe: true,
      src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
    }
  }

  // 3. Direct video file (mp4, webm)
  return {
    isIframe: false,
    src: url,
  }
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    // Close on Escape key press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeBtnRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const videoData = parseVideoSource(project.video)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalVideoTitle"
      className="fixed inset-0 z-[999] p-3 sm:p-6 w-full h-full bg-black/80 backdrop-blur-md flex items-center justify-center animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="w-full max-w-4xl max-h-[94svh] overflow-y-auto rounded-3xl border border-gray-200 bg-white shadow-2xl relative animate-popIn flex flex-col z-[1000]"
        role="document"
      >
        {/* Modal Header */}
        <div className="w-full px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-200 flex items-center justify-between bg-[#FAFAFA]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-mono">
              <Video className="w-4 h-4" />
            </span>
            <div>
              <h3
                id="modalVideoTitle"
                className="font-display font-bold text-base sm:text-lg text-black uppercase tracking-tight"
              >
                {project.title}
              </h3>
              <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                Project Video Preview // {project.category}
              </p>
            </div>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close video player"
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-gray-300 bg-white hover:border-black hover:bg-black hover:text-white text-black grid place-items-center transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="w-full bg-black relative aspect-video flex items-center justify-center overflow-hidden">
          {videoData.isIframe ? (
            <iframe
              src={videoData.src}
              title={`${project.title} Video Preview`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={videoData.src}
              poster={project.image}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            >
              <track kind="captions" />
              Your browser does not support HTML5 video playback.
            </video>
          )}
        </div>

        {/* Bottom Meta & Action Links */}
        <div className="p-5 sm:p-6 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl select-none">{project.emoji}</span>
                <span className="font-display font-bold text-lg text-black uppercase tracking-tight">
                  {project.title}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 uppercase font-semibold">
                  {project.kind}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* External Links */}
            <div className="flex items-center gap-2.5 shrink-0">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-gray-300 hover:border-black text-black hover:bg-black hover:text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Google Drive Link Instruction & Status Banner */}
          <div className="p-3.5 rounded-2xl bg-[#F4F4F6] border border-gray-200 flex items-start gap-3 text-xs text-gray-600">
            <Play className="w-4 h-4 text-black shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-semibold text-black">
                Sample video currently playing.
              </p>
              <p className="text-[11px] text-gray-500 font-mono">
                To connect your Google Drive recorded video, simply paste your Google Drive share link into <code className="text-black bg-gray-200 px-1 py-0.5 rounded">src/data/config.ts</code> under <code className="text-black bg-gray-200 px-1 py-0.5 rounded">video: 'YOUR_GDRIVE_LINK'</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}