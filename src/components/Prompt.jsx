'use client'

import { BoltIcon } from '@heroicons/react/24/solid'
import React, { useRef, useState } from 'react'

export function Prompt() {

    const textareaRef = useRef(null);
    const [textAreaHeight, setTextAreaHeight] = useState('auto');

    const handleInput = () => {
        if (textareaRef.current) {
            if (textareaRef.current.value === "") {
                // If the textarea is empty, reset to default height
                setTextAreaHeight('auto');
            } else {
                // Reset height to 'auto' to allow it to shrink if required
                setTextAreaHeight('auto');
                // Set height based on the scrollHeight
                setTextAreaHeight(`${textareaRef.current.scrollHeight}px`);
            }
        }
    };

    return (

        <div className="flex flex-row w-full justify-center pb-6">
            <form className="flex flex-auto px-24" action="#" method="GET">
                <div className="group flex relative mt-2 w-full  rounded-full shadow-sm">
                    <textarea
                        ref={textareaRef}
                        onInput={handleInput}
                        style={{ height: textAreaHeight }}
                        name="name"
                        id="name"
                        rows="1"
                        className="flex w-full pl-4 pr-10 rounded-full border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 group-hover:text-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Redescubre tus demandas..."
                    />
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center px-4">
                        <BoltIcon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 group-focus:text-indigo-600" />
                    </button>
                </div>
            </form>

        </div>
    );
}

