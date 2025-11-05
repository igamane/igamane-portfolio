"use client"

import { projects } from "@/data"
import { useParams } from "next/navigation"
import Link from "next/link"
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6"
import { useEffect, useMemo, useState, useCallback } from "react"
import { Spotlight } from "@/components/ui/Spotlight"
import MagicButton from "@/components/MagicButton"
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect"
import { AnimatePresence, motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import Markdown from "@/components/Markdown"
import Image from "next/image";

type Maybe<T> = T | undefined | null

function isImagePath(path: string) {
  return /\.(png|jpe?g|webp|gif|svg)$/i.test(path)
}

function parseYouTubeId(u: string): Maybe<string> {
  try {
    const url = new URL(u)
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "")
    }
    if (url.hostname.includes("youtube.com") || url.hostname.includes("youtube-nocookie.com")) {
      if (url.pathname.startsWith("/watch")) return url.searchParams.get("v") || undefined
      if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/")[2]
      if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2]
    }
  } catch {}
  return undefined
}

function parseVimeoId(u: string): Maybe<string> {
  try {
    const url = new URL(u)
    if (url.hostname.includes("vimeo.com")) {
      const parts = url.pathname.split("/").filter(Boolean)
      if (parts[0] === "video" && parts[1]) return parts[1]
      if (parts[0]) return parts[0]
    }
  } catch {}
  return undefined
}

function toEmbedUrl(u: Maybe<string>): Maybe<{ src: string; provider: "youtube" | "vimeo" }> {
  if (!u) return undefined
  const yt = parseYouTubeId(u)
  if (yt) return { src: `https://www.youtube-nocookie.com/embed/${yt}`, provider: "youtube" }
  const vm = parseVimeoId(u)
  if (vm) return { src: `https://player.vimeo.com/video/${vm}`, provider: "vimeo" }
  return undefined
}

/**
 * Screenshots loader
 * - Accepts:
 *   - array of URLs
 *   - single image URL
 *   - folder path like /projects-screenshots/2/d-1 (or /project-screenshots/..)
 *   -> when folder, asks /api/list-images to enumerate files
 */
function useScreenshots(source: Maybe<string | string[]>) {
  const [shots, setShots] = useState<string[]>([])

  useEffect(() => {
    let cancelled = false

    async function run() {
      if (!source) {
        if (!cancelled) setShots([])
        return
      }

      if (Array.isArray(source)) {
        if (!cancelled) setShots(source.filter(Boolean))
        return
      }

      const s = source.trim()

      if (isImagePath(s)) {
        if (!cancelled) setShots([s])
        return
      }

      const folder = s.startsWith("/") ? s : `/${s}`

      try {
        const res = await fetch(`/api/list-images?dir=${encodeURIComponent(folder)}`, { cache: "no-store" })
        const data = (await res.json()) as { images?: string[] }
        if (!cancelled) setShots((data.images || []).filter(Boolean))
      } catch {
        if (!cancelled) setShots([])
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [source])

  return shots
}

export default function ProjectCaseStudy() {
  const params = useParams()
  const projectId = Number.parseInt(params.id as string)
  const project = projects.find((p) => p.id === projectId)
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedDashboard, setSelectedDashboard] = useState(0)

  // fullscreen modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const openModal = useCallback((idx: number) => {
    setModalIndex(idx)
    setIsModalOpen(true)
    // lock scroll
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden"
    }
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = ""
    }
  }, [])

  const nextModal = useCallback(
    (len: number) => setModalIndex((i) => (i + 1) % len),
    []
  )
  const prevModal = useCallback(
    (len: number) => setModalIndex((i) => (i - 1 + len) % len),
    []
  )

  useEffect(() => {
    if (!isModalOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowRight") nextModal(screenshots.length || 1)
      if (e.key === "ArrowLeft") prevModal(screenshots.length || 1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isModalOpen, closeModal, nextModal, prevModal /* screenshots below */])

  if (!project) {
    return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
        <div className="max-w-7xl w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project not found</h1>
            <Link href="/#projects" className="text-purple hover:text-purple/80">
              Back to projects
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const caseStudy = project.caseStudy || {}
  const hasDashboards = Array.isArray(caseStudy.dashboards) && caseStudy.dashboards.length > 0
  const currentDashboard = hasDashboards ? caseStudy.dashboards[selectedDashboard] : null

  // Video
  const demoVideoRaw: Maybe<string> =
    (currentDashboard && (currentDashboard as any).demoVideo) ||
    (caseStudy as any).demoVideo
  const embed = useMemo(() => toEmbedUrl(demoVideoRaw), [demoVideoRaw])

  // Screenshots source
  const screenshotsSource: Maybe<string | string[]> =
    (currentDashboard && (currentDashboard as any).screenshots) ||
    (caseStudy as any).screenshots ||
    []
  const screenshots = useScreenshots(screenshotsSource)

  useEffect(() => {
    setCurrentScreenshot(0)
  }, [selectedDashboard, screenshotsSource])

  // modal guards
  const canShowModal = screenshots.length > 0

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Back button */}
        <div className="pt-20 pb-10">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-purple hover:text-purple/80 transition-colors w-fit group"
          >
            <FaArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        <div className="py-16 mb-8">
          <h1 className="heading lg:max-w-[80vw] text-balance">{project.title}</h1>

          {/* description supports markdown */}
          {project.des ? (
            <Markdown className="md:mt-8 my-6 text-lg text-center">
              {project.des}
            </Markdown>
          ) : null}
        </div>

        {/* Dashboards area */}
        {hasDashboards && (
          <div className="py-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-purple rounded-full"></span>
              Dashboard Explorer
            </h2>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Sidebar */}
              <div className="lg:w-80 flex-shrink-0">
                <ScrollArea className="h-auto lg:h-[600px] rounded-2xl border border-white/[0.1] bg-black-200/50 backdrop-blur-sm p-4">
                  <div className="space-y-3">
                    {caseStudy.dashboards.map((dashboard: any, index: number) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setSelectedDashboard(index)
                          setCurrentScreenshot(0)
                        }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative w-full group p-4 rounded-xl border-2 transition-all duration-300 overflow-hidden text-left ${
                          selectedDashboard === index
                            ? "border-purple bg-purple/10 shadow-lg shadow-purple/30"
                            : "border-white/[0.1] hover:border-purple/50 bg-black-200/30"
                        }`}
                      >
                        {selectedDashboard === index && (
                          <motion.div
                            layoutId="dashboardIndicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-purple rounded-r-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <div className="relative z-10 flex items-start gap-3">
                          <div className="text-3xl flex-shrink-0">{dashboard.icon}</div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold mb-1 text-white truncate">
                              {dashboard.name || `Dashboard ${index + 1}`}
                            </h3>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Right Content */}
              <div className="flex-1 space-y-6">
                <motion.div
                  key={`title-${selectedDashboard}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-4xl">{(currentDashboard as any)?.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {(currentDashboard as any)?.name || `Dashboard ${selectedDashboard + 1}`}
                    </h3>
                  </div>
                </motion.div>

                {/* Video Demo */}
                {embed?.src ? (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black-200 border border-white/[0.1] backdrop-blur-sm group hover:border-purple/50 transition-all duration-300 shadow-lg hover:shadow-purple/20">
                    <motion.iframe
                      key={`video-${selectedDashboard}-${embed.src}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      width="100%"
                      height="100%"
                      src={embed.src}
                      title="Dashboard Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full"
                    />
                  </div>
                ) : null}

                {/* Screenshots */}
                {screenshots.length > 0 ? (
                  <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
                    <span className="w-1 h-8 bg-purple rounded-full"></span>
                    Screenshots
                  </h2>
                    {/* Title + hover action lives inside the image container */}
                    <div className="relative group">
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black-200 border border-white/[0.1] backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-purple/20">
                        {/* top badges */}
                        <div className="absolute left-3 top-3 z-20">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/60 border border-white/15">
                            Screenshots
                          </span>
                        </div>
                        {canShowModal && (
                          <button
                            onClick={() => openModal(currentScreenshot)}
                            className="absolute right-3 top-3 z-20 px-3 py-1 text-xs font-semibold rounded-full bg-purple/80 hover:bg-purple transition border border-white/20 opacity-0 group-hover:opacity-100"
                          >
                            View full image
                          </button>
                        )}

                        <motion.img
                          key={`screenshot-${selectedDashboard}-${currentScreenshot}-${screenshots[currentScreenshot]}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          src={screenshots[currentScreenshot]}
                          alt={`Screenshot ${currentScreenshot + 1}`}
                          className="w-full h-full object-cover"
                          onClick={() => openModal(currentScreenshot)}
                          role="button"
                        />
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-3 justify-start max-w-[1100px]">
                    {screenshots.map((s: string, index: number) => (
                        <motion.button
                          key={`${s}-${index}`}
                          onClick={() => setCurrentScreenshot(index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-24 h-20 md:w-28 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                            currentScreenshot === index
                              ? "border-purple shadow-lg shadow-purple/50"
                              : "border-white/[0.1] hover:border-white/[0.3]"
                          }`}
                          title={`Screenshot ${index + 1}`}
                        >
                          <Image src={s} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {/* No dashboards but gallery exists */}
        {!hasDashboards && screenshots.length > 0 ? (
          <div className="py-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-purple rounded-full"></span>
              Gallery
            </h2>

            <div className="space-y-4">
              <div className="relative group">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black-200 border border-white/[0.1]">
                  <div className="absolute left-3 top-3 z-20">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/60 border border-white/15">
                      Screenshots
                    </span>
                  </div>
                  {canShowModal && (
                    <button
                      onClick={() => openModal(currentScreenshot)}
                      className="absolute right-3 top-3 z-20 px-3 py-1 text-xs font-semibold rounded-full bg-purple/80 hover:bg-purple transition border border-white/20 opacity-0 group-hover:opacity-100"
                    >
                      View full image
                    </button>
                  )}

                  <motion.img
                    key={`gallery-${currentScreenshot}-${screenshots[currentScreenshot]}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={screenshots[currentScreenshot]}
                    alt={`Screenshot ${currentScreenshot + 1}`}
                    className="w-full h-full object-cover"
                    onClick={() => openModal(currentScreenshot)}
                    role="button"
                  />
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-3 justify-start max-w-[1100px]">
              {screenshots.map((s, idx) => (
                  <motion.button
                    key={`${s}-${idx}`}
                    onClick={() => setCurrentScreenshot(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-24 h-20 md:w-28 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      currentScreenshot === idx
                        ? "border-purple shadow-lg shadow-purple/50"
                        : "border-white/[0.1] hover:border-white/[0.3]"
                    }`}
                    title={`Screenshot ${idx + 1}`}
                  >
                    <Image src={s} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* Case Study */}
        <div className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
            <span className="w-1 h-8 bg-purple rounded-full"></span>
            Case Study
          </h2>

          <div className="space-y-8">
            {/* Research Publication FIRST (just above Industry) */}
            {caseStudy.researchPublication ? (
              <div className="border border-purple/40 rounded-3xl p-8 md:p-10 bg-purple/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple/30 border border-purple/50">
                    Research Publication
                  </span>
                  {caseStudy.researchPublication.views ? (
                    <span className="px-3 py-1 text-xs rounded-full bg-black-200 border border-white/10">
                      {caseStudy.researchPublication.views} views
                    </span>
                  ) : null}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{caseStudy.researchPublication.title}</h3>
                <p className="text-sm opacity-80 mb-3">
                  {caseStudy.researchPublication.conference}
                </p>
                <div className="text-sm mb-6">
                  {caseStudy.researchPublication.doi ? (
                    <p className="mb-1">DOI: {caseStudy.researchPublication.doi}</p>
                  ) : null}
                  {caseStudy.researchPublication.link ? (
                    <a
                      href={caseStudy.researchPublication.link}
                      className="text-purple hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on IEEE Xplore
                    </a>
                  ) : null}
                </div>
                {Array.isArray(caseStudy.researchPublication.keyFindings) &&
                caseStudy.researchPublication.keyFindings.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {caseStudy.researchPublication.keyFindings.map((k: string, i: number) => (
                      <li key={i}>{k}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}

            {/* Industry */}
            {caseStudy.industry ? (
              <motion.div
                onMouseEnter={() => setHoveredCard("industry")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border border-white/[0.1] rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple/50 transition-all duration-300"
                style={{ background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" }}
              >
                <AnimatePresence>
                  {hoveredCard === "industry" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                      <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-emerald-900/20 rounded-3xl overflow-hidden"
                        colors={[[76, 175, 80]]}
                        dotSize={1}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative z-10">
                  <div className="inline-block mb-6">
                    <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold border border-emerald-500/30">
                      Industry
                    </span>
                  </div>
                  <Markdown>{caseStudy.industry}</Markdown>
                </div>
              </motion.div>
            ) : null}

            {/* Technologies */}
            {Array.isArray(caseStudy.technologies) && caseStudy.technologies.length > 0 ? (
              <motion.div
                onMouseEnter={() => setHoveredCard("tech")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border border-white/[0.1] rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple/50 transition-all duration-300"
                style={{ background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" }}
              >
                <AnimatePresence>
                  {hoveredCard === "tech" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                      <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-blue-900/20 rounded-3xl overflow-hidden"
                        colors={[[100, 200, 255]]}
                        dotSize={1}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">Core Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {caseStudy.technologies.map((tech: string, index: number) => (
                      <motion.div
                        key={`${tech}-${index}`}
                        whileHover={{ y: -4 }}
                        className="p-4 rounded-xl bg-black-200 border border-purple/30 hover:border-purple/60 transition-all hover:bg-purple/10 group/tech"
                      >
                        <p className="text-center font-semibold text-purple group-hover/tech:text-purple/80 transition-colors">
                          {tech}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}

            {/* Background */}
            {caseStudy.background ? (
              <motion.div
                onMouseEnter={() => setHoveredCard("background")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border border-white/[0.1] rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple/50 transition-all duration-300"
                style={{ background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" }}
              >
                <AnimatePresence>
                  {hoveredCard === "background" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                      <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-pink-900/20 rounded-3xl overflow-hidden"
                        colors={[[255, 150, 200]]}
                        dotSize={1}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Background</h3>
                  <Markdown>{caseStudy.background}</Markdown>
                </div>
              </motion.div>
            ) : null}

            {/* Challenge */}
            {caseStudy.challenge ? (
              <motion.div
                onMouseEnter={() => setHoveredCard("challenge")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border border-white/[0.1] rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple/50 transition-all duration-300"
                style={{ background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" }}
              >
                <AnimatePresence>
                  {hoveredCard === "challenge" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                      <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-orange-900/20 rounded-3xl overflow-hidden"
                        colors={[[255, 165, 0]]}
                        dotSize={1}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Challenge</h3>
                  <Markdown>{caseStudy.challenge}</Markdown>
                </div>
              </motion.div>
            ) : null}

            {/* Solution */}
            {caseStudy.solution ? (
              <motion.div
                onMouseEnter={() => setHoveredCard("solution")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border border-white/[0.1] rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple/50 transition-all duration-300"
                style={{ background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" }}
              >
                <AnimatePresence>
                  {hoveredCard === "solution" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                      <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-cyan-900/20 rounded-3xl overflow-hidden"
                        colors={[[0, 200, 255]]}
                        dotSize={1}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Solution Delivered</h3>
                  <Markdown>{caseStudy.solution}</Markdown>
                </div>
              </motion.div>
            ) : null}

            {/* Marketing */}
            {caseStudy.marketing ? (
              <motion.div
                onMouseEnter={() => setHoveredCard("marketing")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border border-white/[0.1] rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple/50 transition-all duration-300"
                style={{ background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Go to Market</h3>
                  <Markdown>{caseStudy.marketing}</Markdown>
                </div>
              </motion.div>
            ) : null}

            {/* Conclusion */}
            {caseStudy.conclusion ? (
              <motion.div
                onMouseEnter={() => setHoveredCard("conclusion")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border border-white/[0.1] rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple/50 transition-all duration-300"
                style={{ background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)" }}
              >
                <AnimatePresence>
                  {hoveredCard === "conclusion" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                      <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-purple-900/20 rounded-3xl overflow-hidden"
                        colors={[[200, 100, 255]]}
                        dotSize={1}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Conclusion</h3>
                  <Markdown>{caseStudy.conclusion}</Markdown>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>

        <div className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Interested in working together?</h3>
            <a href="mailto:mohamedigamane1203@gmail.com">
            <MagicButton title="Get in touch" icon={<FaLocationArrow />} position="right" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="h-20"></div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isModalOpen && canShowModal ? (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0" onClick={closeModal} />
            <div className="relative max-w-[95vw] max-h-[90vh] z-[101]">
              <Image
                src={screenshots[modalIndex]}
                alt={`Screenshot ${modalIndex + 1}`}
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl border border-white/10"
              />
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 text-sm font-bold shadow"
                aria-label="Close"
                title="Close"
              >
                ×
              </button>

              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => prevModal(screenshots.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/60 hover:bg-black/80 border border-white/20 rounded-md text-white"
                    title="Previous"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => nextModal(screenshots.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/60 hover:bg-black/80 border border-white/20 rounded-md text-white"
                    title="Next"
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  )
}
