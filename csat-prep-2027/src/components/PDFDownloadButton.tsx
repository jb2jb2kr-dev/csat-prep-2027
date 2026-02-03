import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

interface PDFDownloadButtonProps {
    targetId: string;
    fileName: string;
    label?: string;
    className?: string;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
    targetId,
    fileName,
    label = "PDF 다운로드",
    className
}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        const element = document.getElementById(targetId);
        if (!element) return;

        setIsGenerating(true);

        try {
            const canvas = await html2canvas(element, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            // First page
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Additional pages
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`${fileName}.pdf`);
        } catch (error) {
            console.error('PDF Generation Error:', error);
            alert('PDF 생성 중 오류가 발생했습니다.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
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
                    생성 중...
                </>
            ) : (
                <>
                    <Download className="w-4 h-4" />
                    {label}
                </>
            )}
        </button>
    );
};
