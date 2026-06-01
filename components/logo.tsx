import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconOnly?: boolean
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Logo Icon - 抽象化的 "T" 与网格结构结合 */}
      <div className="relative flex h-8 w-8 items-center justify-center">
        <svg 
          viewBox="0 0 32 32" 
          className="h-full w-full"
          fill="none"
        >
          {/* 底层：渐变背景矩形 */}
          <rect 
            x="2" 
            y="2" 
            width="28" 
            height="28" 
            rx="4" 
            className="fill-primary"
          />
          
          {/* T 字形主体 - 代表 Thesis */}
          <path 
            d="M8 9h16v3H18v11h-4V12H8V9z" 
            className="fill-primary-foreground"
          />
          
          {/* 右下角网格点 - 代表 Grid，同时形成数据可视化的感觉 */}
          <circle cx="22" cy="18" r="1.5" className="fill-primary-foreground opacity-60" />
          <circle cx="22" cy="23" r="1.5" className="fill-primary-foreground opacity-60" />
          <circle cx="26" cy="18" r="1.5" className="fill-primary-foreground opacity-40" />
          <circle cx="26" cy="23" r="1.5" className="fill-primary-foreground opacity-40" />
        </svg>
      </div>
      
      {!iconOnly && (
        <span className="text-lg font-semibold tracking-tight">ThesisGrid</span>
      )}
    </div>
  )
}

// 备选方案：更加简约的书籍+网格设计
export function LogoAlt({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center">
        <svg 
          viewBox="0 0 32 32" 
          className="h-full w-full"
          fill="none"
        >
          {/* 背景 */}
          <rect 
            x="2" 
            y="2" 
            width="28" 
            height="28" 
            rx="3" 
            className="fill-primary"
          />
          
          {/* 抽象书籍/文档形态 + 结构化网格 */}
          {/* 左侧竖线 - 像书脊 */}
          <rect x="7" y="7" width="2.5" height="18" rx="1" className="fill-primary-foreground" />
          
          {/* 横向线条 - 代表文本行/数据行 */}
          <rect x="12" y="8" width="13" height="2" rx="0.5" className="fill-primary-foreground" />
          <rect x="12" y="13" width="10" height="2" rx="0.5" className="fill-primary-foreground opacity-80" />
          <rect x="12" y="18" width="13" height="2" rx="0.5" className="fill-primary-foreground opacity-60" />
          <rect x="12" y="23" width="8" height="2" rx="0.5" className="fill-primary-foreground opacity-40" />
        </svg>
      </div>
      
      {!iconOnly && (
        <span className="text-lg font-semibold tracking-tight">ThesisGrid</span>
      )}
    </div>
  )
}

// 方案三：更加高端金融风格 - 抽象图表+结构
export function LogoFinance({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center">
        <svg 
          viewBox="0 0 32 32" 
          className="h-full w-full"
          fill="none"
        >
          {/* 背景 */}
          <rect 
            x="2" 
            y="2" 
            width="28" 
            height="28" 
            rx="3" 
            className="fill-primary"
          />
          
          {/* 三层递进的横条 - 象征研究深度和数据层次 */}
          <rect x="6" y="8" width="20" height="3" rx="1" className="fill-primary-foreground" />
          <rect x="6" y="14" width="16" height="3" rx="1" className="fill-primary-foreground opacity-75" />
          <rect x="6" y="20" width="12" height="3" rx="1" className="fill-primary-foreground opacity-50" />
          
          {/* 右下角装饰性网格点 */}
          <circle cx="24" cy="22" r="2" className="fill-primary-foreground opacity-60" />
        </svg>
      </div>
      
      {!iconOnly && (
        <span className="text-lg font-semibold tracking-tight">ThesisGrid</span>
      )}
    </div>
  )
}
