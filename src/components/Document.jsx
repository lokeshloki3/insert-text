import React, { useEffect, useState } from "react";

const Document = () => {
    const [text, setText] = useState("");
    const [content, setContent] = useState([]);
    const [hightlightedIndex, setHightlightedIndex] = useState(null);

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (text.trim() !== '') {
                setContent((prev) => [...prev, text]);
                setText('');
            }
        }
    }
    // console.log(content);

    useEffect(() => {
        if (content.length === 0) {
            return
        }

        const lastIndex = content.length - 1;
        setHightlightedIndex(lastIndex);

        const timer = setTimeout(() => setHightlightedIndex(null), 2000);
        // just to clear any previous values
        return () => clearTimeout(timer);
    }, [content])

    return (
        <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg space-y-4">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnter}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
            />
            <div className="space-y-2 max-h-64 overflow-y-auto">
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: hightlightedIndex === index ? "bg-blue-500 text-white" : "transparent"
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Document;