import styled from "styled-components";
import {useEffect} from "react";

type Props = {
    progress: number;
    firstPage: string | undefined;
    lastPage: string;
    frontPageUrl: string;
    backPageUrl: string;
}

function animateFlipFront(progress: number): string {
    const startOriginX = 1315;
    const startOriginY = 500;
    const startTranslateX = -1030;
    const startTranslateY = -500;
    const startRotate = -32;

    const endOriginX = 1570;
    const endOriginY = 500;
    const endTranslateX = -1285;
    const endTranslateY = -500;
    const endRotate = 0;

    const currentOriginX = startOriginX + (endOriginX - startOriginX) * progress;
    const currentOriginY = startOriginY + (endOriginY - startOriginY) * progress;
    const currentTranslateX = startTranslateX + (endTranslateX - startTranslateX) * progress;
    const currentTranslateY = startTranslateY + (endTranslateY - startTranslateY) * progress;
    const currentRotate = startRotate + (endRotate - startRotate) * progress;
    
    return `transform-origin: ${currentOriginX}px ${currentOriginY}px; 
            transform: translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${currentRotate}deg);`;
}

function animatePageFront(progress: number): string {
    const originX = 285;
    const originY = 0;
    const startTranslateX = 1030;
    const startTranslateY = 500;
    const startRotate = 32;

    const endTranslateX = 1285;
    const endTranslateY = 500;
    const endRotate = 0;

    const currentTranslateX = startTranslateX + (endTranslateX - startTranslateX) * progress;
    const currentTranslateY = startTranslateY;
    const currentRotate = startRotate + (endRotate - startRotate) * progress;

    return `transform-origin: ${originX}px ${originY}px; 
            transform: translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${currentRotate}deg);`;
}

function animateFlipBack(progress: number): string {
    const startOriginX = 1315;
    const startOriginY = 500;
    const startTranslateX = -1030;
    const startTranslateY = -500;
    const startRotate = -32;

    const endOriginX = 1570;
    const endOriginY = 500;
    const endTranslateX = -1285;
    const endTranslateY = -500;
    const endRotate = 0;

    const currentOriginX = startOriginX + (endOriginX - startOriginX) * progress;
    const currentOriginY = startOriginY + (endOriginY - startOriginY) * progress;
    const currentTranslateX = startTranslateX + (endTranslateX - startTranslateX) * progress;
    const currentTranslateY = startTranslateY + (endTranslateY - startTranslateY) * progress;
    const currentRotate = startRotate + (endRotate - startRotate) * progress;

    return `transform-origin: ${currentOriginX}px ${currentOriginY}px; 
            transform: translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${currentRotate}deg);`;
}

function animatePageBack(progress: number): string {
    const originX = 0;
    const originY = 0;
    const startTranslateX = 1255;
    const startTranslateY = 500;
    const startRotate = -32;

    const endTranslateX = 1000;
    const endTranslateY = 500;
    const endRotate = 0;

    const currentTranslateX = startTranslateX + (endTranslateX - startTranslateX) * progress;
    const currentTranslateY = startTranslateY;
    const currentRotate = startRotate + (endRotate - startRotate) * progress;

    return `transform-origin: ${originX}px ${originY}px; 
            transform: translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${currentRotate}deg);`;
}

function animateFlipBackShadow(progress: number): string {
    const startOriginX = 70;
    const startOriginY = 500;
    const startTranslateX1 = 215;
    const startTranslateY1 = -500;
    const startRotate = -32;
    const startTranslateX2 = 40;
    const startTranslateY2 = 0;

    const endOriginX = 325;
    const endOriginY = 500;
    const endTranslateX1 = -40;
    const endTranslateY1 = -500;
    const endRotate = 0;
    const endTranslateX2 = 40;
    const endTranslateY2 = 0;

    const currentOriginX = startOriginX + (endOriginX - startOriginX) * progress;
    const currentOriginY = startOriginY + (endOriginY - startOriginY) * progress;
    const currentTranslateX1 = startTranslateX1 + (endTranslateX1 - startTranslateX1) * progress;
    const currentTranslateY1 = startTranslateY1 + (endTranslateY1 - startTranslateY1) * progress;
    const currentRotate = startRotate + (endRotate - startRotate) * progress;
    const currentTranslateX2 = startTranslateX2 + (endTranslateX2 - startTranslateX2) * progress;
    const currentTranslateY2 = startTranslateY2 + (endTranslateY2 - startTranslateY2) * progress;

    return `transform-origin: ${currentOriginX}px ${currentOriginY}px; 
            transform: translate(${currentTranslateX1}px, ${currentTranslateY1}px) rotate(${currentRotate}deg) translate(${currentTranslateX2}px, ${currentTranslateY2}px);`;
}

function animateBackShadowWidth(progress: number): string {
    const startWidth = 25;
    const endWidth = 11;
    const currentWidth = startWidth + (endWidth - startWidth) * progress;
    return `${currentWidth}px`;
}

function animateBendShadow(progress: number): string {
    const startOriginX = 45;
    const startOriginY = 500;
    const startTranslateX = 240;
    const startTranslateY = -500;
    const startRotate = -32;

    const endOriginX = 300;
    const endOriginY = 500;
    const endTranslateX = -15;
    const endTranslateY = -500;
    const endRotate = 0;

    const currentOriginX = startOriginX + (endOriginX - startOriginX) * progress;
    const currentOriginY = startOriginY + (endOriginY - startOriginY) * progress;
    const currentTranslateX = startTranslateX + (endTranslateX - startTranslateX) * progress;
    const currentTranslateY = startTranslateY + (endTranslateY - startTranslateY) * progress;
    const currentRotate = startRotate + (endRotate - startRotate) * progress;

    return `transform-origin: ${currentOriginX}px ${currentOriginY}px; 
            transform: translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${currentRotate}deg);`;
}

export default function PageFlip3({progress, firstPage, lastPage, backPageUrl, frontPageUrl}: Props) {
    useEffect(() => {
        console.log('progress', progress);
        const flipFront = document.getElementById('r1');
        const flipBackShadowInner = document.getElementById('sp3');
        const pageFront = document.getElementById('p1')?.firstElementChild;
        const flipBack = document.getElementById('r3');
        const pageBack = document.getElementById('p3')?.firstElementChild;
        const flipBackShadow = document.getElementById('s3');
        const flipBendShadowInner = document.getElementById('s4');
        const flipBendShadow = document.getElementById('s2');

        if (flipFront) {
            flipFront.style.cssText = animateFlipFront(progress);
        }
        if (pageFront) {
            (pageFront as HTMLElement).style.cssText = animatePageFront(progress);
        }
        if (flipBack) {
            flipBack.style.cssText = animateFlipBack(progress);
        }
        if (pageBack) {
            (pageBack as HTMLElement).style.cssText = animatePageBack(progress);
        }
        if (flipBackShadow) {
            flipBackShadow.style.cssText = animateFlipBackShadow(progress);
        }
        if (flipBackShadowInner) {
            flipBackShadowInner.style.width = animateBackShadowWidth(progress);
        }
        if (flipBendShadowInner) {
            flipBendShadowInner.style.opacity = (1 - progress * 10).toString();
        }
        if (flipBendShadow) {
            flipBendShadow.style.cssText = animateBendShadow(progress);
        }
    }, [progress]);
    
    return (
        <Wrapper id="all">
            <BookWrapper id="page-flip">
                {firstPage && (<FirstPage pageUrl={firstPage}>
                    <div></div>
                </FirstPage>)}
                <FlipFront id="r1">
                    <PageFront id="p1" pageUrl={frontPageUrl}>
                        <div>
                            <div></div>
                        </div>
                    </PageFront>
                </FlipFront>
                <LastPage id="p2" pageUrl={lastPage}>
                    <div></div>
                </LastPage>
                <FlipBack id="r3">
                    <PageBack id="p3" pageUrl={backPageUrl}>
                        <div>
                            <div></div>
                        </div>
                    </PageBack>
                </FlipBack>
                <ShadowContainer className="s">
                    <FlipBackShadow id="s3">
                        <div id="sp3"></div>
                    </FlipBackShadow>
                </ShadowContainer>
                <ShadowContainer className="s" id="s4" $isBack>
                    <FlipBendShadow id="s2">
                        <div id="sp2"></div>
                    </FlipBendShadow>
                </ShadowContainer>
            </BookWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    height: 640px;
    width: 700px;
`;

const BookWrapper = styled.div`
    //background-image: url(https://cssdeck.com/uploads/media/items/6/6h4pDpK.jpg);
    position: absolute;
    padding: 20px 40px 40px 340px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const FlipFront = styled.div`
    position: absolute;
    z-index: 2;
    -webkit-transform-origin: 1315px 500px;
    -webkit-transform: translate(-1030px, -500px) rotate(-32deg);
    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;
    //-webkit-transition-duration: 1s;
`;

const PageFront = styled.div<{pageUrl: string}>`
    width: 1285px;
    height: 1388px;
    overflow: hidden;

    > div {
        -webkit-transform-origin: 285px 0;
        -webkit-transform: translate(1030px, 500px) rotate(32deg);
        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;
        width: 285px;
        height: 388px;
        background-image: url(${({pageUrl}) => pageUrl});
    }

    > div > div {
        width: 10px;
        height: 388px;
        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .25)), to(rgba(0, 0, 0, 0)));
    }
`;

const LastPage = styled.div<{pageUrl: string}>`
    > div {
        width: 285px;
        height: 388px;
        -webkit-box-shadow: 0 0 11px rgba(0, 0, 0, .5);
        position: absolute;
        z-index: 1;
        background-image: url(${({pageUrl}) => pageUrl});
    }
`;

const FirstPage = styled.div<{pageUrl: string}>`
    > div {
        transform: translateX(-100%);
        width: 285px;
        height: 388px;
        position: absolute;
        z-index: 1;
        background-image: url(${({pageUrl}) => pageUrl});
    }
`;

const FlipBack = styled.div`
    -webkit-transform-origin: 1315px 500px;
    -webkit-transform: translate(-1030px, -500px) rotate(-32deg);
    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;
    position: absolute;
    z-index: 2;
`;

const FlipBackShadow = styled.div`
    -webkit-transform-origin: 70px 500px;
    -webkit-transform: translate(215px, -500px) rotate(-32deg) translate(40px, 0);
    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;
    position: absolute;
    z-index: 1;

    > div {
        width: 25px;
        height: 1000px;
        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .25)), to(rgba(0, 0, 0, 0)));
        -webkit-transition-property: width;
        -webkit-transition-duration: 1s;
        overflow: hidden;
    }
`;

const ShadowContainer = styled.div<{$isBack?: boolean}>`
    width: 285px;
    height: 388px;
    position: absolute;
    overflow: hidden;
    z-index: 3;

    ${({$isBack}) => $isBack && `
    opacity: 1;
    -webkit-transition-duration: 0.5s;
    `}
`;

const FlipBendShadow = styled.div`
    -webkit-transform-origin: 45px 500px;
    -webkit-transform: translate(240px, -500px) rotate(-32deg);
    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;
    position: absolute;
    
    > div {
        width: 15px;
        height: 1000px;
        background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .18)), to(rgba(0,0,0,0)));
        overflow: hidden;
    }
`;

const PageBack = styled.div<{pageUrl: string}>`
    width: 1285px;
    height: 1388px;
    overflow: hidden;

    > div {
        -webkit-transform-origin: 0 0;
        -webkit-transform: translate(1255px, 500px) rotate(-32deg);
        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;
        -webkit-box-shadow: 0 0 11px rgba(0, 0, 0, .5);
        width: 285px;
        height: 388px;
        background-image: url(${({pageUrl}) => pageUrl});
        overflow: hidden;
    }

    > div > div {
        width: 9px;
        height: 500px;
        float: right;
        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, .20)));
    }
`;