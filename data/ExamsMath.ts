import { AnyMockExam } from '../types';

export const MOCK_EXAMS_MATH_GRADE_9_FINAL_1: AnyMockExam[] = [
    {
        id: 'toan9-ck1-de1-vinhlong-oe',
        title: 'Đề 1 (Vĩnh Long 2023-2024)',
        source: 'Sở GD&ĐT Vĩnh Long, Cuối kì 1, 2023-2024',
        type: 'open-ended',
        questions: [
            {
                topic: "Căn bậc hai và Biến đổi biểu thức",
                question: `**Bài 1 (2.0 điểm):** Thực hiện phép tính:
a) $0.8 \\cdot \\sqrt{125}$
b) $2\\sqrt{75} - 5\\sqrt{27} - \\sqrt{192} + 4\\sqrt{48}$
c) $\\frac{\\sqrt{27}-3\\sqrt{2}}{\\sqrt{3}-\\sqrt{2}} - \\frac{6}{3+\\sqrt{3}}$
d) $\\sqrt{28-16\\sqrt{3}} + \\sqrt{13-4\\sqrt{3}}$`,
                suggestedAnswer: `**Gợi ý trả lời:**
a) $\\sqrt{0.8 \\cdot 125} = \\sqrt{100} = 10$.
b) $10\\sqrt{3} - 15\\sqrt{3} - 8\\sqrt{3} + 16\\sqrt{3} = (10 - 15 - 8 + 16)\\sqrt{3} = 3\\sqrt{3}$.
c) $\\frac{\\sqrt{3}(\\sqrt{9}- \\sqrt{6})}{\\sqrt{3}-\\sqrt{2}} - \\frac{6(3-\\sqrt{3})}{9-3} = \\frac{3(\\sqrt{3}-\\sqrt{2})}{\\sqrt{3}-\\sqrt{2}} - (3-\\sqrt{3}) = 3 - 3 + \\sqrt{3} = \\sqrt{3}$.
d) $\\sqrt{(4-2\\sqrt{3})^2} + \\sqrt{(2\\sqrt{3}-1)^2} = |4-2\\sqrt{3}| + |2\\sqrt{3}-1| = 4-2\\sqrt{3} + 2\\sqrt{3}-1 = 3$.`
            },
            {
                topic: "Điều kiện xác định và Giải phương trình chứa căn",
                question: `**Bài 2 (1.5 điểm):**
a) Với giá trị nào của x thì $\\sqrt{6-2x}$ có nghĩa?
b) Giải phương trình $5\\sqrt{x-5} + \\sqrt{9x-45} = 16$.`,
                suggestedAnswer: `**Gợi ý trả lời:**
a) Biểu thức $\\sqrt{6-2x}$ có nghĩa khi $6-2x \\geq 0 \\Leftrightarrow -2x \\geq -6 \\Leftrightarrow x \\leq 3$.
b) $5\\sqrt{x-5} + \\sqrt{9(x-5)} = 16 \\Leftrightarrow 5\\sqrt{x-5} + 3\\sqrt{x-5} = 16 \\Leftrightarrow 8\\sqrt{x-5} = 16 \\Leftrightarrow \\sqrt{x-5} = 2 \\Leftrightarrow x-5 = 4 \\Leftrightarrow x = 9$. Tập nghiệm $S = \\{9\\}$.`
            },
            {
                topic: "Rút gọn biểu thức chứa căn",
                question: "Rút gọn biểu thức $P = \\frac{\\sqrt{x}}{2\\sqrt{x}-3} + \\frac{\\sqrt{x}-2}{2\\sqrt{x}+3} + \\frac{15-4\\sqrt{x}}{9-4x}$ với $x \\geq 0; x \\neq \\frac{9}{4}$.",
                suggestedAnswer: `**Gợi ý trả lời:**
$P = \\frac{\\sqrt{x}}{2\\sqrt{x}-3} + \\frac{\\sqrt{x}-2}{2\\sqrt{x}+3} - \\frac{15-4\\sqrt{x}}{4x-9}$
$P = \\frac{\\sqrt{x}(2\\sqrt{x}+3) + (\\sqrt{x}-2)(2\\sqrt{x}-3) - (15-4\\sqrt{x})}{(2\\sqrt{x}-3)(2\\sqrt{x}+3)}$
$P = \\frac{2x+3\\sqrt{x} + 2x-3\\sqrt{x}-4\\sqrt{x}+6 - 15+4\\sqrt{x}}{4x-9}$
$P = \\frac{4x-9}{4x-9} = 1$.`
            },
            {
                topic: "Hàm số bậc nhất",
                question: `**Bài 4 (1.5 điểm):** Cho hàm số bậc nhất $y = (m+1)x - 4$.
a) Tìm m để hàm số nghịch biến trên $\\mathbb{R}$.
b) Vẽ đồ thị của hàm số đã cho với $m=1$.`,
                suggestedAnswer: `**Gợi ý trả lời:**
a) Hàm số nghịch biến trên $\\mathbb{R}$ khi hệ số góc $a < 0 \\Leftrightarrow m+1 < 0 \\Leftrightarrow m < -1$.
b) Với $m=1$, hàm số là $y=2x-4$.
- Cho $x=0 \\Rightarrow y=-4$, ta được điểm A(0, -4) trên trục Oy.
- Cho $y=0 \\Rightarrow x=2$, ta được điểm B(2, 0) trên trục Ox.
Đồ thị hàm số là đường thẳng đi qua hai điểm A và B.`
            },
            {
                topic: "Hệ thức lượng trong tam giác vuông",
                question: "Cho tam giác ABC có $AB = 5\\text{cm}, AC = 12\\text{cm}, BC = 13\\text{cm}$. Chứng minh $\\triangle ABC$ vuông tại A. Vẽ AH vuông góc với BC tại H, tính diện tích $\\triangle ABH$.",
                suggestedAnswer: `**Gợi ý trả lời:**
- Ta có: $AB^2 = 5^2 = 25$, $AC^2 = 12^2 = 144$, $BC^2 = 13^2 = 169$.
- Vì $AB^2 + AC^2 = 25 + 144 = 169 = BC^2$, nên theo định lí Pytago đảo, $\\triangle ABC$ vuông tại A.
- Áp dụng hệ thức lượng trong tam giác vuông ABC:
  - $AH = \\frac{AB \\cdot AC}{BC} = \\frac{5 \\cdot 12}{13} = \\frac{60}{13}$ (cm).
  - $BH = \\frac{AB^2}{BC} = \\frac{5^2}{13} = \\frac{25}{13}$ (cm).
- Diện tích $\\triangle ABH$ là: $S_{ABH} = \\frac{1}{2} AH \\cdot BH = \\frac{1}{2} \\cdot \\frac{60}{13} \\cdot \\frac{25}{13} = \\frac{750}{169} \\approx 4.44 \\text{ cm}^2$.`
            },
            {
                topic: "Đường tròn",
                question: `**Bài 6 (2.5 điểm):** Từ một điểm A ở ngoài đường tròn (O), kẻ hai tiếp tuyến AB, AC với đường tròn tâm O (B,C là các tiếp điểm).
a) Chứng minh bốn điểm A, B, O, C cùng thuộc một đường tròn.
b) Vẽ cát tuyến ADE (D nằm giữa A, E) sao cho điểm O nằm trong góc EAB. Gọi I là trung điểm của ED. BC cắt OA, EA theo thứ tự tại H, K. Chứng minh OA $\\perp$ BC tại H và $AH \\cdot AO = AK \\cdot AI$.
c) Tia AO cắt (O) tại hai điểm M, N (M nằm giữa A, N). Gọi P là trung điểm của HN, đường vuông góc với BP vẽ từ H cắt tia BM tại S. Chứng minh MB = MS.`,
                suggestedAnswer: `**Gợi ý trả lời:**
a) Do AB, AC là tiếp tuyến của (O) nên $\\angle OBA = \\angle OCA = 90^\\circ$. Hai đỉnh B và C cùng nhìn đoạn OA dưới một góc vuông, do đó bốn điểm A, B, O, C cùng thuộc đường tròn đường kính OA.
b) - Vì AB, AC là hai tiếp tuyến cắt nhau tại A nên AB = AC và AO là tia phân giác của $\\angle BAC$. Tam giác ABC cân tại A có AO là phân giác cũng là đường trung trực của BC. Suy ra OA $\\perp$ BC tại H.
  - I là trung điểm dây ED nên OI $\\perp$ AE tại I $\\Rightarrow \\angle OIA = 90^\\circ$.
  - Xét $\\triangle AIO$ và $\\triangle AHK$ có $\\angle A$ chung và $\\angle AIO = \\angle AHK = 90^\\circ$. Do đó $\\triangle AIO \\sim \\triangle AHK$ (g.g).
  - Suy ra $\\frac{AI}{AH} = \\frac{AO}{AK} \\Rightarrow AH \\cdot AO = AK \\cdot AI$.
c) Phần này đòi hỏi chứng minh phức tạp hơn, dựa trên các cặp tam giác đồng dạng và tính chất góc nội tiếp, góc tạo bởi tiếp tuyến và dây cung. Chứng minh $\\triangle SBH \\sim \\triangle BNP$ và $\\triangle HMB \\sim \\triangle HBN$ để suy ra các tỉ lệ cần thiết, kết hợp với P là trung điểm HN để đi đến kết luận MB = MS.`
            },
            {
                topic: "Phương trình vô tỷ",
                question: "Giải phương trình $\\sqrt{x^2 - 3x + 2} + 3 = 3\\sqrt{x-1} + \\sqrt{x-2}$.",
                suggestedAnswer: `**Gợi ý trả lời:**
- Điều kiện xác định: $x-1 \\geq 0$ và $x-2 \\geq 0 \\Rightarrow x \\geq 2$.
- Phương trình tương đương:
  $\\sqrt{(x-1)(x-2)} - 3\\sqrt{x-1} - \\sqrt{x-2} + 3 = 0$
  $\\sqrt{x-1}(\\sqrt{x-2}-3) - (\\sqrt{x-2}-3) = 0$
  $(\\sqrt{x-2}-3)(\\sqrt{x-1}-1) = 0$
- Trường hợp 1: $\\sqrt{x-2}-3 = 0 \\Leftrightarrow \\sqrt{x-2} = 3 \\Leftrightarrow x-2 = 9 \\Leftrightarrow x = 11$ (Thỏa mãn ĐKXĐ).
- Trường hợp 2: $\\sqrt{x-1}-1 = 0 \\Leftrightarrow \\sqrt{x-1} = 1 \\Leftrightarrow x-1 = 1 \\Leftrightarrow x = 2$ (Thỏa mãn ĐKXĐ).
- Vậy, tập nghiệm của phương trình là $S = \\{2, 11\\}$.`
            }
        ]
    }
];
