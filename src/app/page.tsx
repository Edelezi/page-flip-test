'use client';

import {useEffect, useMemo, useRef, useState} from "react";
import page1 from '@/svg/page01.svg';
import styled from "styled-components";
import PageFlip from "@/app/pageFlip2";
import PageFlip3 from "@/app/pageFlip3";

const pages = [
    '/svg/page01.svg',
    '/svg/page02.svg',
    '/svg/page03.svg',
    '/svg/page04.svg',
    '/svg/page05.svg',
    '/svg/page06.svg',
    '/svg/page07.svg',
    '/svg/page08.svg',
    '/svg/page09.svg',
    '/svg/page10.svg',
    '/svg/page11.svg',
    '/svg/page12.svg',
    '/svg/page13.svg',
    '/svg/page14.svg',
    '/svg/page15.svg',
    '/svg/page16.svg',
]

// async function svgFileToString(iconpath) {
//     return fetch(iconpath)
//         .then(response => response.text())
//         .then(text => {
//             return text;
//         });
// }

export default function Home() {
    const [flipProgress, setFlipProgress] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [scaled, setScaled] = useState(false);
    
    const [showType, setShowType] = useState<'flip1' | 'flip2' | 'both'>('flip1');

    useEffect(() => {
        document.addEventListener('scroll', function () {
            let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight));

            const page = Math.floor(scrollPercentage * pages.length) * 2;
            console.log(page);
            setCurrentPage(page);
            setFlipProgress((scrollPercentage * pages.length) % 1)
        });
    }, []);
    
    const firstPage = useMemo(() => {
        return currentPage > 0 ? pages[currentPage - 1] : undefined;
    }, [currentPage]);
    
    const lastPage = useMemo(() => {
        return pages[currentPage + 2];
    }, [currentPage]);
    
    const frontPageUrl = useMemo(() => {
        return pages[currentPage];
    }, [currentPage]);
    
    const backPageUrl = useMemo(() => {
        return pages[currentPage + 1];
    }, [currentPage]);

    return (
        <div className="h-full">
            <div className="flex gap-2 fixed top-4 left-4 z-50">
                <div className="flex flex-col gap-2">
                    <button className="h-10 flex items-center justify-center rounded-lg bg-white border border-black px-3 min-w-16" onClick={() => setShowType('flip1')}>Flip 1</button>
                    <button className="h-10 flex items-center justify-center rounded-lg bg-white border border-black px-3 min-w-16" onClick={() => setShowType('flip2')}>Flip 2</button>
                    <button className="h-10 flex items-center justify-center rounded-lg bg-white border border-black px-3 min-w-16" onClick={() => setShowType('both')}>Both</button>
                </div>
                <button className="h-10 flex items-center justify-center rounded-lg bg-white border border-black px-3 min-w-16" onClick={() => setScaled(!scaled)}>0.75 scale</button>
            </div>
            {/*<PageFlip3 progress={flipProgress} firstPage={currentPage > 0 ? pages[currentPage - 1] : undefined}*/}
            {/*           lastPage={pages[currentPage + 2]} frontPageUrl={pages[currentPage]}*/}
            {/*           backPageUrl={pages[currentPage + 1]}/>*/}
            {/*<PageFlip />*/}
            <div className={`fixed w-full h-full flex flex-col items-center justify-center gap-12 mt-10 ${scaled && 'transform scale-75'}`}>
                {(showType === 'flip1' || showType === 'both') && <PageFlip progress={flipProgress} firstPage={firstPage} lastPage={lastPage} flipFrontPageUrl={frontPageUrl}
                                                                            flipBackPageUrl={backPageUrl}/>}
                {(showType === 'flip2' || showType === 'both') && <PageFlip3 progress={flipProgress} firstPage={firstPage} lastPage={lastPage} frontPageUrl={frontPageUrl}
                                                                             backPageUrl={backPageUrl} />}
            </div>
        </div>
    );
}


