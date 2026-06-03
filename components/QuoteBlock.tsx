import React from 'react';

interface QuoteBlockProps {
    paragraphs: React.ReactNode[];
    highlightText: React.ReactNode;
}

export default function QuoteBlock({ paragraphs, highlightText }: QuoteBlockProps) {
    return (
        <div className="relative mt-12 p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-orange-500/[0.04] via-amber-500/[0.02] to-transparent border border-orange-200/50 shadow-[inset_0_1px_2px_rgba(251,146,60,0.05)] overflow-hidden select-none">
            {/* Subtle background gradient overlay for premium border glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,146,60,0.1),transparent_60%)] pointer-events-none" />
            
            {/* Stylized background quote mark */}
            <div className="absolute right-4 -top-8 sm:right-6 sm:-top-10 text-orange-500/10 text-[12rem] sm:text-[14rem] font-instrument italic pointer-events-none select-none">
                “
            </div>
            
            <div className="relative z-10 flex flex-col gap-4 text-left max-w-4xl">
                {paragraphs.map((p, idx) => (
                    <p key={idx} className="text-neutral-700 text-lg sm:text-xl font-light leading-relaxed">
                        {p}
                    </p>
                ))}
                <p className="text-xl sm:text-2xl md:text-3xl font-instrument italic leading-tight text-orange-600 mt-2">
                    {highlightText}
                </p>
            </div>
        </div>
    );
}
