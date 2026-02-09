import React, { useState } from 'react';
import { Printer, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

interface PDFDownloadButtonProps {
    targetId: string;
    fileName: string;
    label?: string;
    className?: string;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
    label = "PDF 저장(인쇄)",
    className
}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handlePrint = () => {
        setIsGenerating(true);

        // Brief timeout to show "Generating" state if UI is slow
        setTimeout(() => {
            window.print();
            setIsGenerating(false);
        }, 100);
    };

    return (
        <button
            onClick={handlePrint}
            disabled={isGenerating}
            className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-sm",
                "bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed",
                className
            )}
        >
            {isGenerating ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    준비 중...
                </>
            ) : (
                <>
                    <Printer className="w-4 h-4" />
                    {label}
                </>
            )}
        </button>
    );
};
