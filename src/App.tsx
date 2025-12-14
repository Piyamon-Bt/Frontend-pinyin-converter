import { useState } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function PinyinConverter() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [chineseInput, setChineseInput] = useState("");
  const [pinyinResult, setPinyinResult] = useState("");
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const historyItems = [
    { id: 1, chinese: "你能帮我吗？", pinyin: "Nǐ néng bāng wǒ ma?" },
    { id: 2, chinese: "我想去商店。", pinyin: "Wǒ xiǎng qù shāngdiàn." },
    { id: 3, chinese: "请问厕所在哪里？", pinyin: "Qǐngwèn cèsuǒ zài nǎlǐ?" },
    { id: 4, chinese: "今天的天气很好。", pinyin: "Jīntiān de tiānqì hěn hǎo." },
    { id: 5, chinese: "我吃了半个蛋糕。", pinyin: "Wǒ chīle bàn gè dàngāo." },
    { id: 6, chinese: "我吃了半个蛋糕。", pinyin: "Wǒ chīle bàn gè dàngāo." },
  ];

  const paragraphs = [
    {
      chinese:
        "石室诗士施氏，嗜狮，誓食十狮。施氏时时适市视狮。十时，适十狮适市。是时，适施氏适市。施氏视是十狮，恃矢势，使是十狮逝世。氏拾是十狮尸，适石室。石室湿，氏使侍拭石室。石室拭，氏始试食是十狮尸。食时，始识是十狮尸，实十石狮尸。试释是事。",
      pinyin:
        "Shíshì shī shì shī shì, shì shī, shì shí shí shī. Shī shì shí shí shì shì shì shī. Shí shí, shì shí shī shì shì. Shì shí, shì Shī shì shì shì. Shī shì shì shì shí shī, shì shǐ shì, shǐ shì shí shī shì shì. Shì shí shì shí shī shī, shì shí shì. Shí shì shī, shì shǐ shì shì shí shì. Shí shì shì, shì shǐ shì shí shì shí shī shī. Shí shí, shǐ shí shì shí shī shī, shí shí shí shī shī. Shì shì shì shì.",
    },
    {
      chinese: "四是四，十是十，十四是十四，四十是四十。",
      pinyin: "Sì shì sì, shí shì shí, shísì shì shísì, sìshí shì sìshí.",
    },
  ];

  const handleCardClick = (cardNumber: number) => {
    setExpandedCard((prev) => (prev === cardNumber ? null : cardNumber));
  };

  const handlePrevParagraph = () => {
    setCurrentParagraph((prev) => (prev > 0 ? prev - 1 : paragraphs.length - 1));
  };

  const handleNextParagraph = () => {
    setCurrentParagraph((prev) => (prev < paragraphs.length - 1 ? prev + 1 : 0));
  };

  const convertToPinyin = () => {
    // mock
    setPinyinResult(`Nǐ néng bāng wǒ ma?\nNi3 neng2 bang1 wo3 ma5?`);
  };

  const IconButton = ({
    expanded,
    onClick,
    ariaLabelExpand,
    ariaLabelCollapse,
    variant = "indigo",
  }: {
    expanded: boolean;
    onClick: () => void;
    ariaLabelExpand: string;
    ariaLabelCollapse: string;
    variant?: "indigo" | "pinkOrange";
  }) => {
    const base =
      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110";

    const color =
      variant === "pinkOrange"
        ? "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
        : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600";

    return (
      <button
        type="button"
        aria-label={expanded ? ariaLabelCollapse : ariaLabelExpand}
        title={expanded ? "Collapse" : "Expand"}
        onClick={onClick}
        className={`${base} ${color}`}
      >
        {expanded ? (
          <ChevronUp className="w-6 h-6 text-white" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white" />
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 md:p-8 w-full">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      <div className="w-full max-w-none px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Pinyin Converter
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Master Chinese pronunciation with ease
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Card 1 */}
            <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-start space-x-4 sm:space-x-6 w-full">
                  <div className="text-5xl sm:text-6xl md:text-7xl flex-shrink-0 animate-float">
                    平
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      Pinyin Converter
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Type Chinese Character or sentences to let the program convert to pinyin with tone or pinyin with number tone
                    </p>
                  </div>
                </div>

                <IconButton
                  expanded={expandedCard === 1}
                  onClick={() => handleCardClick(1)}
                  ariaLabelExpand="Expand Pinyin Converter"
                  ariaLabelCollapse="Collapse Pinyin Converter"
                />
              </div>

              {expandedCard === 1 && (
                <div className="mt-8 pt-8 border-t border-indigo-200 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2" />
                        Type in Chinese
                      </h3>
                      <textarea
                        className="w-full h-36 p-4 border-2 border-indigo-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                        placeholder="你能帮我吗？"
                        value={chineseInput}
                        onChange={(e) => setChineseInput(e.target.value)}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        Pinyin Result
                      </h3>
                      <div className="w-full h-36 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-purple-200 rounded-2xl overflow-auto whitespace-pre-line text-sm shadow-sm">
                        {pinyinResult ||
                          "Nǐ néng bāng wǒ ma?\nNi3 neng2 bang1 wo3 ma5?"}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="button"
                      aria-label="Convert to pinyin"
                      onClick={convertToPinyin}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
                    >
                      Convert to Pinyin
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Card 2 */}
            <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-start space-x-4 sm:space-x-6 w-full">
                  <div className="text-5xl sm:text-6xl flex-shrink-0">
                    <svg
                      viewBox="0 0 120 120"
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 animate-float"
                    >
                      <defs>
                        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      <g fill="url(#cloudGradient)">
                        <path d="M 30 40 Q 40 30 50 40 Q 60 50 50 60 Q 40 70 30 60 Q 20 50 30 40" />
                        <path d="M 60 50 Q 70 40 80 50 Q 90 60 80 70 Q 70 80 60 70 Q 50 60 60 50" />
                        <path d="M 45 70 Q 55 60 65 70 Q 75 80 65 90 Q 55 100 45 90 Q 35 80 45 70" />
                        <circle cx="35" cy="45" r="3" fill="#6366f1" />
                        <circle cx="65" cy="55" r="3" fill="#6366f1" />
                        <circle cx="50" cy="75" r="3" fill="#6366f1" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      Practice Reading Pinyin
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Read pinyin with provided chinese sentence with pinyin converter
                    </p>
                  </div>
                </div>

                <IconButton
                  expanded={expandedCard === 2}
                  onClick={() => handleCardClick(2)}
                  ariaLabelExpand="Expand Practice Reading"
                  ariaLabelCollapse="Collapse Practice Reading"
                />
              </div>

              {expandedCard === 2 && (
                <div className="mt-8 pt-8 border-t border-indigo-200 animate-fadeIn">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-inner">
                    <p className="text-gray-900 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
                      {paragraphs[currentParagraph].chinese}
                    </p>

                    <div className="flex items-center justify-between border-t-2 border-indigo-100 pt-6">
                      <button
                        type="button"
                        aria-label="Previous paragraph"
                        title="Previous"
                        onClick={handlePrevParagraph}
                        className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-all duration-300 transform hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6 text-indigo-600" />
                      </button>

                      <p className="text-indigo-700 text-sm sm:text-base text-center flex-1 px-4 font-medium">
                        {paragraphs[currentParagraph].pinyin}
                      </p>

                      <button
                        type="button"
                        aria-label="Next paragraph"
                        title="Next"
                        onClick={handleNextParagraph}
                        className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-all duration-300 transform hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6 text-indigo-600" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Card 3 */}
            <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-start space-x-4 sm:space-x-6 w-full">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0">
                    <svg viewBox="0 0 120 120" className="w-full h-full animate-float">
                      <defs>
                        <linearGradient id="flowerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff6b9d" />
                          <stop offset="100%" stopColor="#ffa500" />
                        </linearGradient>
                        <linearGradient id="flowerGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#dc143c" />
                          <stop offset="100%" stopColor="#ff1493" />
                        </linearGradient>
                      </defs>
                      <g>
                        <ellipse cx="60" cy="60" rx="35" ry="25" fill="url(#flowerGradient1)" opacity="0.8" />
                        <ellipse cx="50" cy="70" rx="30" ry="22" fill="url(#flowerGradient2)" opacity="0.7" />
                        <circle cx="60" cy="60" r="15" fill="#FFD700" />
                        <circle cx="50" cy="70" r="12" fill="#FFA500" />
                        <text x="35" y="45" fontSize="20" fill="#FFB300">+</text>
                        <text x="85" y="50" fontSize="20" fill="#FFB300">+</text>
                        <text x="70" y="90" fontSize="20" fill="#FFB300">+</text>
                        <circle cx="25" cy="75" r="4" fill="#DC143C" />
                        <circle cx="95" cy="85" r="4" fill="#DC143C" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                      Pinyin Sound Graph
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>

                <IconButton
                  expanded={expandedCard === 3}
                  onClick={() => handleCardClick(3)}
                  ariaLabelExpand="Expand Pinyin Sound Graph"
                  ariaLabelCollapse="Collapse Pinyin Sound Graph"
                  variant="pinkOrange"
                />
              </div>

              {expandedCard === 3 && (
                <div className="mt-8 pt-8 border-t border-orange-200 overflow-x-auto animate-fadeIn">
                  <div className="bg-white rounded-2xl p-4 sm:p-6 min-w-[600px] shadow-inner">
                    <table className="w-full text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr>
                          {["Pinyin table", "b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h"].map((h) => (
                            <th
                              key={h}
                              className="border-2 border-pink-200 p-2 bg-gradient-to-r from-pink-100 to-orange-100 font-bold"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { r: "a", v: ["ba","pa","ma","fa","da","ta","na","la","ga","ka","ha"] },
                          { r: "o", v: ["bo","po","mo","fo","","","","lo","","","he"] },
                          { r: "e", v: ["","","me","","de","te","ne","le","ge","ke","he"] },
                          { r: "ai", v: ["bai","pai","mai","","dai","tai","nai","lai","gai","kai","hai"] },
                          { r: "ei", v: ["bei","pei","mei","fei","dei","","nei","lei","gei","","hei"] },
                        ].map((row) => (
                          <tr key={row.r}>
                            <td className="border-2 border-pink-200 p-2 bg-gradient-to-r from-pink-50 to-orange-50 font-semibold">
                              {row.r}
                            </td>
                            {row.v.map((cell, idx) => (
                              <td
                                key={idx}
                                className="border-2 border-pink-200 p-2 hover:bg-pink-50 transition-colors"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Cute Character Card */}
            <div className="glass-effect rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="flex justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl mb-2">🐻</div>
                    <div className="text-pink-500 text-xs sm:text-sm font-semibold">Deluxe</div>
                  </div>
                </div>
              </div>
            </div>

            {/* History Card */}
            <div className="glass-effect rounded-3xl p-4 sm:p-6 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-indigo-500 mb-4 sm:mb-6">
                History
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {historyItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {item.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium mb-1 break-words">
                        {item.chinese}
                      </p>
                      <p className="text-gray-600 text-sm break-words">{item.pinyin}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
