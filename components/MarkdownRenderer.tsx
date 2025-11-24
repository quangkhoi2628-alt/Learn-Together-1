import React, { useEffect, useRef } from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const convertMarkdownToHTML = (text: string): string => {
  if (!text) return '';

  const placeholders = new Map<string, string>();
  let placeholderIndex = 0;

  // Tách các khối công thức $$...$$ ra để chúng không bị gói trong thẻ <p>
  let processedText = text.replace(/\$\$([\s\S]+?)\$\$/g, (match) => {
      const placeholder = `__MATHJAX_PLACEHOLDER_${placeholderIndex++}__`;
      placeholders.set(placeholder, match);
      return `\n\n${placeholder}\n\n`;
  });

  // Chuyển đổi Markdown cơ bản
  let html = processedText
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Xử lý các đoạn văn và danh sách
  const blocks = html.split('\n\n').filter(block => block.trim() !== '');
  
  const finalHtml = blocks.map(block => {
    const trimmedBlock = block.trim();
    
    // Trả lại placeholder cho MathJax
    if (trimmedBlock.startsWith('__MATHJAX_PLACEHOLDER_')) {
      return trimmedBlock;
    }
    
    // Xử lý tiêu đề
    if (trimmedBlock.startsWith('<h')) {
        return trimmedBlock;
    }

    // Xử lý danh sách
    const lines = block.split('\n');
    const isUl = lines.every(l => /^\s*[-*] /.test(l));
    const isOl = lines.every(l => /^\s*\d+\. /.test(l));

    if (isUl) {
      const items = lines.map(l => `<li>${l.replace(/^\s*[-*] /, '')}</li>`).join('');
      return `<ul class="list-disc list-inside space-y-1 my-2">${items}</ul>`;
    }
    if (isOl) {
      const items = lines.map(l => `<li>${l.replace(/^\s*\d+\. /, '')}</li>`).join('');
      return `<ol class="list-decimal list-inside space-y-1 my-2">${items}</ol>`;
    }
    
    // Nếu không, đó là một đoạn văn
    return `<p>${block.replace(/\n/g, '<br />')}</p>`;
  }).join('');

  // Khôi phục lại các khối công thức
  let result = finalHtml;
  placeholders.forEach((mathBlock, placeholder) => {
    result = result.replace(placeholder, mathBlock);
  });
  
  return result;
};


export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  const htmlContent = convertMarkdownToHTML(content);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Yêu cầu MathJax tìm và render công thức trong nội dung mới được hiển thị
    // Thêm một độ trễ nhỏ để đảm bảo DOM đã được cập nhật trước khi MathJax chạy
    const timer = setTimeout(() => {
        if (containerRef.current && (window as any).MathJax && (window as any).MathJax.typesetPromise) {
            (window as any).MathJax.typesetPromise([containerRef.current]).catch((err: any) => console.error('Lỗi khi render MathJax:', err));
        }
    }, 10); 
    return () => clearTimeout(timer);
  }, [htmlContent]);

  return (
    <div
      ref={containerRef}
      className={`max-w-none text-inherit prose-p:my-0 ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};