"use client"

import { useRef, useEffect, useState } from "react"

interface EmailHeaderProps {
  variant?: "dark" | "light"
  tagline?: string
}

export function EmailHeader({ 
  variant = "dark",
  tagline = "AI-Native Research Infrastructure"
}: EmailHeaderProps) {
  const isDark = variant === "dark"
  
  return (
    <div 
      className={`relative w-full overflow-hidden ${
        isDark ? "bg-[#0a0c10]" : "bg-[#f8fafb]"
      }`}
      style={{ 
        height: "120px",
        fontFamily: "'Inter', system-ui, sans-serif"
      }}
    >
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Accent Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, #3eb489 30%, #3eb489 70%, transparent)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="h-10 w-10">
            <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
              <rect x="2" y="2" width="28" height="28" rx="3" fill="#3eb489" />
              <rect x="7" y="7" width="2.5" height="18" rx="1" fill={isDark ? "#0a0c10" : "#ffffff"} />
              <rect x="12" y="8" width="13" height="2" rx="0.5" fill={isDark ? "#0a0c10" : "#ffffff"} />
              <rect x="12" y="13" width="10" height="2" rx="0.5" fill={isDark ? "#0a0c10" : "#ffffff"} fillOpacity="0.8" />
              <rect x="12" y="18" width="13" height="2" rx="0.5" fill={isDark ? "#0a0c10" : "#ffffff"} fillOpacity="0.6" />
              <rect x="12" y="23" width="8" height="2" rx="0.5" fill={isDark ? "#0a0c10" : "#ffffff"} fillOpacity="0.4" />
            </svg>
          </div>
          
          {/* Brand Name */}
          <div className="flex flex-col">
            <span 
              className={`text-xl font-semibold tracking-tight ${
                isDark ? "text-white" : "text-[#0a0c10]"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              ThesisGrid
            </span>
            <span 
              className={`text-xs tracking-wide ${
                isDark ? "text-white/50" : "text-[#0a0c10]/50"
              }`}
            >
              {tagline}
            </span>
          </div>
        </div>
        
        {/* Right Side Decoration */}
        <div className="ml-auto flex items-center gap-2">
          <div className="flex gap-1.5">
            {[1, 0.7, 0.4].map((opacity, i) => (
              <div 
                key={i}
                className="w-1.5 h-8 rounded-full"
                style={{ 
                  backgroundColor: "#3eb489",
                  opacity 
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px ${
          isDark ? "bg-white/10" : "bg-black/10"
        }`}
      />
    </div>
  )
}

// 用于生成静态图片的预览页面
export function EmailHeaderPreview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [downloadUrl, setDownloadUrl] = useState<string>("")
  
  useEffect(() => {
    // 动态导入 html2canvas
    const generateImage = async () => {
      if (!containerRef.current) return
      
      try {
        const html2canvas = (await import("html2canvas")).default
        const canvas = await html2canvas(containerRef.current, {
          scale: 2,
          backgroundColor: null,
          logging: false,
        })
        setDownloadUrl(canvas.toDataURL("image/png"))
      } catch (error) {
        console.error("Failed to generate image:", error)
      }
    }
    
    // 延迟执行以确保组件完全渲染
    const timer = setTimeout(generateImage, 500)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="p-8 bg-neutral-900 min-h-screen">
      <h1 className="text-white text-2xl font-semibold mb-6">Email Header Preview</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-white/60 text-sm mb-3">Dark Version (Recommended)</h2>
          <div ref={containerRef} style={{ width: "600px" }}>
            <EmailHeader variant="dark" />
          </div>
        </div>
        
        <div>
          <h2 className="text-white/60 text-sm mb-3">Light Version</h2>
          <div style={{ width: "600px" }}>
            <EmailHeader variant="light" />
          </div>
        </div>
        
        {downloadUrl && (
          <div className="pt-4">
            <a 
              href={downloadUrl}
              download="thesisgrid-email-header.png"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3eb489] text-[#0a0c10] rounded-md font-medium text-sm hover:bg-[#3eb489]/90 transition-colors"
            >
              Download Header Image
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
