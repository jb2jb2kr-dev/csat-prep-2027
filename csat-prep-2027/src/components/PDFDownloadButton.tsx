import React, { useState } from 'react';
import { Printer, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

interface PDFDownloadButtonProps {
    targetId: string;
    fileName: string;
    label?: string;
    className?: string;
    printTitle?: string;
    isMock?: boolean;
}

/**
 * 인쇄 전용 CSS — 새 창에 삽입됩니다.
 * 원본 페이지의 Tailwind/overflow 충돌 없이 독립적으로 동작합니다.
 */
const PRINT_CSS = `
@page {
    size: A4 portrait;
    margin: 15mm;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Pretendard', 'Noto Sans KR', -apple-system, sans-serif;
    font-size: 12pt;
    line-height: 1.7;
    color: #000;
    background: #fff;
    padding: 0;
}

/* 문제 카드 */
.question-card {
    border: 1.5pt solid #333;
    border-radius: 6pt;
    padding: 14pt;
    margin-bottom: 14pt;
    page-break-inside: auto;
    break-inside: auto;
}

/* 문제 번호 + 메타 */
.question-header {
    display: flex;
    align-items: center;
    gap: 8pt;
    margin-bottom: 8pt;
}

/* 문제 번호 스타일 1: 검정 원 + 흰색 번호 (초급/모의고사) */
.q-num-circle {
    background: #000;
    color: #fff;
    width: 22pt;
    height: 22pt;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10pt;
    font-weight: 700;
    flex-shrink: 0;
}

/* 문제 번호 스타일 2: 원 없이 검정 번호 (중급/심화) */
.q-num-plain {
    color: #000;
    font-size: 14pt;
    font-weight: 800;
    margin-right: 4pt;
    display: flex;
    align-items: center;
}

.question-meta {
    font-size: 9pt;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5pt;
}

.question-meta .badge {
    display: inline-block;
    padding: 2pt 6pt;
    border-radius: 8pt;
    font-size: 8pt;
    font-weight: 600;
    margin-right: 4pt;
}

.badge-foundation { background: #d1fae5; color: #065f46; }
.badge-intermediate { background: #dbeafe; color: #1e40af; }
.badge-advanced { background: #ede9fe; color: #5b21b6; }

/* 지문 (12pt) */
.question-content {
    font-size: 12pt;
    line-height: 1.7;
    margin-bottom: 10pt;
    padding: 8pt 10pt;
    border-left: 3pt solid #ccc;
    white-space: pre-wrap;
}

/* 문제 텍스트 (14pt) */
.question-text {
    font-size: 14pt;
    font-weight: 700;
    margin-bottom: 8pt;
    break-after: avoid;
    page-break-after: avoid;
}

/* 선택지 (12pt) */
.choices {
    list-style: none;
    padding: 0;
}

.choice-item {
    font-size: 12pt;
    padding: 5pt 8pt;
    margin-bottom: 3pt;
    border: 1pt solid #ccc;
    border-radius: 4pt;
}

.choice-number {
    display: inline-block;
    width: 18pt;
    font-weight: 700;
    color: #666;
}

/* 차트 */
.chart-container {
    border: 1pt solid #ddd;
    border-radius: 6pt;
    padding: 10pt;
    margin-bottom: 10pt;
}

.chart-title {
    text-align: center;
    font-weight: 700;
    font-size: 11pt;
    margin-bottom: 8pt;
}

.chart-bar-container {
    margin-bottom: 6pt;
}

.chart-bar-label {
    display: flex;
    justify-content: space-between;
    font-size: 10pt;
    margin-bottom: 2pt;
}

.chart-bar {
    height: 10pt;
    background: #e2e8f0;
    border-radius: 5pt;
    overflow: hidden;
}

.chart-bar-fill {
    height: 100%;
    background: #6366f1;
    border-radius: 5pt;
}

/* 인쇄 시 페이지 제목 */
.print-header {
    text-align: center;
    font-size: 16pt;
    font-weight: 700;
    margin-bottom: 16pt;
    padding-bottom: 8pt;
    border-bottom: 2pt solid #000;
}

@media print {
    body { padding: 0; }
    .question-card {
        page-break-inside: auto;
        break-inside: auto;
    }
    .question-text {
        page-break-after: avoid;
        break-after: avoid;
    }
}
`;

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
    targetId,
    label = "인쇄하기",
    className,
    printTitle = "수능 영어 연습 문제",
    isMock = false
}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handlePrint = () => {
        setIsGenerating(true);

        try {
            // targetId가 가리키는 영역의 콘텐츠를 새 창에서 인쇄
            const sourceEl = document.getElementById(targetId);
            if (!sourceEl) {
                alert('인쇄할 콘텐츠를 찾을 수 없습니다.');
                setIsGenerating(false);
                return;
            }

            // 문제 카드들에서 데이터 추출
            const cards = sourceEl.querySelectorAll('.glass-card, .print-question-card');
            if (cards.length === 0) {
                // 모의고사 등 다른 구조인 경우 기존 방식 fallback
                window.print();
                setIsGenerating(false);
                return;
            }

            let questionsHtml = '';

            cards.forEach((card, idx) => {
                // 레벨 배지
                const levelBadge = card.querySelector('[class*="bg-emerald-100"], [class*="bg-blue-100"], [class*="bg-purple-100"]');
                const level = levelBadge?.textContent?.trim() || '';
                const badgeClass = level === 'Foundation' ? 'badge-foundation'
                    : level === 'Intermediate' ? 'badge-intermediate'
                        : 'badge-advanced';

                // 유형
                const typeMeta = card.querySelector('.text-slate-500.text-sm');
                const typeText = typeMeta?.textContent?.trim() || '';

                // 지문 (content)
                const contentEl = card.querySelector('.whitespace-pre-wrap') || card.querySelector('.border-l-4');
                const content = contentEl?.textContent?.trim() || '';

                // 차트 데이터
                let chartHtml = '';
                const chartContainer = card.querySelector('.bg-white.p-6.rounded-xl.border');
                if (chartContainer) {
                    const title = chartContainer.querySelector('h4')?.textContent || '';
                    const bars = chartContainer.querySelectorAll('.relative');
                    let barsHtml = '';
                    bars.forEach(bar => {
                        const labels = bar.querySelectorAll('span');
                        const barLabel = labels[0]?.textContent || '';
                        const barValue = labels[1]?.textContent || '';
                        const numVal = parseFloat(barValue) || 0;
                        barsHtml += `
                            <div class="chart-bar-container">
                                <div class="chart-bar-label"><span>${barLabel}</span><span>${barValue}</span></div>
                                <div class="chart-bar"><div class="chart-bar-fill" style="width:${numVal}%"></div></div>
                            </div>`;
                    });
                    chartHtml = `<div class="chart-container"><div class="chart-title">${title}</div>${barsHtml}</div>`;
                }

                // 문제 텍스트
                const questionEl = card.querySelector('h3');
                const question = questionEl?.textContent?.trim() || '';

                // 문제 번호 스타일 결정
                const isFoundation = level === 'Foundation';
                const qNumClass = (isMock || isFoundation) ? 'q-num-circle' : 'q-num-plain';

                // 선택지 추출 로직 보완: A. 1. (1) 등 다양한 번호 형태 제거
                const buttons = card.querySelectorAll('.space-y-3 button');
                let choicesHtml = '<ul class="choices">';
                buttons.forEach((btn, i) => {
                    // 텍스트 앞의 "1. ", "A. ", "(1) " 등을 제거
                    const text = btn.textContent?.trim().replace(/^([A-E]|\d+)\.?\s*|\(\d+\)\s*/i, '') || '';
                    choicesHtml += `<li class="choice-item"><span class="choice-number">${i + 1}.</span> ${text}</li>`;
                });
                choicesHtml += '</ul>';

                questionsHtml += `
                    <div class="question-card">
                        <div class="question-header">
                            <div class="${qNumClass}">${idx + 1}</div>
                            <div class="question-meta">
                                <span class="badge ${badgeClass}">${level}</span>
                                ${typeText}
                            </div>
                        </div>
                        ${content ? `<div class="question-content">${escapeHtml(content)}</div>` : ''}
                        ${chartHtml}
                        <div class="question-text">${escapeHtml(question)}</div>
                        ${choicesHtml}
                    </div>`;
            });

            // 새 창 열고 인쇄
            const printWindow = window.open('', '_blank');
            if (!printWindow) {
                alert('팝업이 차단되었습니다. 팝업 허용 후 다시 시도해주세요.');
                setIsGenerating(false);
                return;
            }

            printWindow.document.write(`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>인쇄 - CSAT Prep</title>
    <style>${PRINT_CSS}</style>
</head>
<body>
    <div class="print-header">${escapeHtml(printTitle)}</div>
    ${questionsHtml}
</body>
</html>`);

            printWindow.document.close();

            // 폰트 로드 대기 후 인쇄
            setTimeout(() => {
                printWindow.print();
                printWindow.close();
                setIsGenerating(false);
            }, 500);

        } catch (err) {
            console.error('인쇄 오류:', err);
            // fallback: 기존 방식
            window.print();
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={handlePrint}
            disabled={isGenerating}
            className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-sm no-print",
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

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br>');
}
