import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

type Props = {
    progress: number;
    firstPage?: string;
    lastPage: string;
    flipFrontPageUrl: string;
    flipBackPageUrl: string;
}

const PageFlip = ({
    progress,
    firstPage,
    lastPage,
    flipFrontPageUrl,
    flipBackPageUrl
                            }: Props) => {
    return (
        <div className="relative h-[350px]">
            <Book progress={progress} firstPage={firstPage} lastPage={lastPage} />
            <FlipAnimationItem frontPageUrl={flipFrontPageUrl} backPageUrl={flipBackPageUrl}
                               flipProgress={progress}/>
        </div>
    );
};

export default PageFlip;

const BookWrapper = styled.div`
    width: 248px;
    height: 350px;
    /* position fixed so our star stays in view */
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: 0 0 0;
`

const FirstPage = styled.div<{ $pageUrl?: string }>`
    height: 350px;
    width: 248px;
    position: absolute;
    left: -100%;
    top: 0;
    transform: translateZ(0px);
    ${props => props.$pageUrl && `background-image: url(${props.$pageUrl});`}
`;

const LastPage = styled.div<{ $pageUrl: string }>`
    background-size: 100% 100%;
    ${props => props.$pageUrl && `background: url(${props.$pageUrl}) 100%;`}
    height: 350px;
    width: 248px;
    position: absolute;
    left: 0;
    top: 0;
`;

type BookProps = {
    progress: number;
    firstPage?: string;
    lastPage: string;
}

function Book({progress, firstPage, lastPage}: BookProps) {
    const firstPageRef = useRef<HTMLDivElement>(null);
    const lastPageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let shadowX, shadowAlpha;
        if (progress <= 0.4) {
            // First 40% of the animation (0% to 40%)
            shadowX = -200;
            shadowAlpha = 0;
        } else {
            // Last 60% of the animation (40% to 100%)
            shadowX = -200 - (150 * ((progress - 0.4) / 0.6)); // Interpolate from -200px to -350px
            shadowAlpha = 0.3 * ((progress - 0.4) / 0.6); // Interpolate from 0 to 0.3
        }
        let backShadowX;
        if (progress <= 0.5) {
            // First half of the animation (0% to 50%)
            backShadowX = 510 - (360 * (progress / 0.5));
        } else {
            // Second half of the animation (50% to 100%)
            backShadowX = 150 - (150 * ((progress - 0.5) / 0.5));
        }

        if (firstPageRef.current && lastPageRef.current) {
            firstPageRef.current.style.boxShadow = `inset rgba(83, 53, 13, ${shadowAlpha}) ${shadowX}px 0 150px -140px`;
            lastPageRef.current.style.boxShadow = `inset rgba(0, 0, 0, 0.2) ${backShadowX}px 0 50px -140px`;
        }
    }, [progress]);

    return (
        <BookWrapper>
            <LastPage ref={lastPageRef} $pageUrl={lastPage}/>
            <FirstPage ref={firstPageRef} $pageUrl={firstPage}/>
        </BookWrapper>
    );
}

type FlipProps = {
    frontPageUrl: string;
    backPageUrl: string;
    flipProgress: number;
}

function FlipAnimationItem({frontPageUrl, backPageUrl, flipProgress}: FlipProps) {
    const pageRef = useRef<HTMLDivElement>(null);
    const backPageRef = useRef<HTMLDivElement>(null);
    const maxRotateShadow = 180;
    const rotateYShadow = maxRotateShadow * flipProgress;

    useEffect(() => {
        let rotateY = 0;
        const scrollFactorPage = flipProgress * 100;

        if (scrollFactorPage < 15) {
            rotateY = -10 * (scrollFactorPage / (15));
        } else if (scrollFactorPage >= 15 && scrollFactorPage <= 100) {
            rotateY = -10 + (0 - (-10)) * ((scrollFactorPage - 15) / (85));
        }
        const divs = pageRef.current?.querySelectorAll('div');
        divs?.forEach(div => {
            div.style.transform = `rotateY(${rotateY}deg)`;
        });
        const backDivs = backPageRef.current?.querySelectorAll('div:not(.picture-bg)');
        backDivs?.forEach(div => {
            (div as HTMLDivElement).style.transform = `rotateY(${rotateY}deg)`;
        });
        const flipDiv = document.getElementById('flip');
        if (flipDiv) {
            flipDiv.style.transform = `translateZ(0px) rotateX(0deg) rotateZ(0deg) rotateY(-${rotateYShadow}deg)`;
        }
    }, [flipProgress]);

    return (
        <FlipWrapper id="flip">
            <Page ref={pageRef} $coverUrl={frontPageUrl}>
                <div className="picture-bg">
                    <div className="picture-bg">
                        <div className="picture-bg">
                            <div className="picture-bg">
                                <div className="picture-bg">
                                    <div className="picture-bg">
                                        <div className="picture-bg">
                                            <div className="picture-bg">
                                                <div className="picture-bg">
                                                    <div className="picture-bg">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
            <BackPage ref={backPageRef} $coverUrl={backPageUrl} $isBack>
                <div className="picture-bg" />
                <div>
                    <div className="picture-bg" />
                    <div>
                        <div className="picture-bg" />
                        <div>
                            <div className="picture-bg" />
                            <div>
                                <div className="picture-bg" />
                                <div>
                                    <div className="picture-bg" />
                                    <div>
                                        <div className="picture-bg" />
                                        <div>
                                            <div className="picture-bg" />
                                            <div>
                                                <div className="picture-bg" />
                                                <div>
                                                    <div className="picture-bg" />
                                                    <div>
                                                        <div className="picture-bg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BackPage>
        </FlipWrapper>
    );
}

const BackPage = styled.div<{ $coverUrl: string, $isBack?: boolean }>`
    position: relative;
    left: 0 !important;
    box-shadow: inset rgba(255, 255, 255, 0.3) 0px -1px 0 0,
    #35582c 0px 1px 0px 0px;

    > .picture-bg {
        position: absolute;
        transform: scaleX(-1);
        background-image: url(${props => props.$coverUrl});
        box-shadow: inset rgba(255, 255, 255, 0.3) 0px -1px 0 0,
        #35582c 0px 1px 0px 0px;
    }

    div > .picture-bg {
        position: absolute;
        transform: scaleX(-1);
        background-image: url(${props => props.$coverUrl});
        box-shadow: inset rgba(255, 255, 255, 0.3) 0px -1px 0 0,
        #35582c 0px 1px 0px 0px;
    }

    div {
        position: relative;
        box-shadow: inset rgba(255, 255, 255, 0.3) 0px -1px 0 0,
        #35582c 0px 1px 0px 0px;
    }

    > div > div > div > div > div > div > div > div > div > div {
        box-shadow: inset rgba(255, 255, 255, 0.3) -1px -1px 0 0,
        #35582c 1px 1px 0px 0px;
    }

    ${props => props.$isBack && `
  transform: rotateY(0.4deg);
  transform-origin: -100% 0;`}
    & > div {
        background-position-x: -229px;
    }

    & > div > div {
        background-position-x: -207px;
    }

    & > div > div > div {
        background-position-x: -184px;
    }

    & > div > div > div > div {
        background-position-x: -161px;
    }

    & > div > div > div > div > div {
        background-position-x: -138px;
    }

    & > div > div > div > div > div > div {
        background-position-x: -115px;
    }

    & > div > div > div > div > div > div > div {
        background-position-x: -92px;
    }

    & > div > div > div > div > div > div > div > div {
        background-position-x: -69px;
    }

    & > div > div > div > div > div > div > div > div > div {
        background-position-x: -46px;
    }

    & > div > div > div > div > div > div > div > div > div > div {
        background-position-x: -23px;
    }
`

const Page = styled.div<{ $coverUrl: string, $isBack?: boolean }>`
    position: relative;
    left: 0 !important;
    background-position-x: 0;
    background-image: url(${props => props.$coverUrl});
    box-shadow: inset rgba(255, 255, 255, 0.3) 0px -1px 0 0,
    #35582c 0px 1px 0px 0px;

    .picture-bg {
        position: relative;
        background-image: url(${props => props.$coverUrl});
        box-shadow: inset rgba(255, 255, 255, 0.3) 0px -1px 0 0,
        #35582c 0px 1px 0px 0px;
    }

    > div > div > div > div > div > div > div > div > div > div {
        box-shadow: inset rgba(255, 255, 255, 0.3) -1px -1px 0 0,
        #35582c 1px 1px 0px 0px;
    }

    div > section {
        top: 0;
    }

    ${props => props.$isBack && `
  transform: rotateY(0.4deg);
  transform-origin: -100% 0;`}
    & > div {
        background-position-x: -23px;;
    }

    & > div > div {
        background-position-x: -46px;
    }

    & > div > div > div {
        background-position-x: -69px;
    }

    & > div > div > div > div {
        background-position-x: -92px;
    }

    & > div > div > div > div > div {
        background-position-x: -115px;
    }

    & > div > div > div > div > div > div {
        background-position-x: -138px;
    }

    & > div > div > div > div > div > div > div {
        background-position-x: -161px;
    }

    & > div > div > div > div > div > div > div > div {
        background-position-x: -184px;
    }

    & > div > div > div > div > div > div > div > div > div {
        background-position-x: -207px;
    }

    & > div > div > div > div > div > div > div > div > div > div {
        background-position-x: -229px;
    }
`
const FlipWrapper = styled.div`
    /*transition: transform 0.5s;*/
    height: 350px;
    width: 248px;
    position: absolute;
    perspective: 1000px;
    transform-style: preserve-3d;
    transform-origin: 0 0 0;

    section {
        background: aqua;
        /*transition: transform 0.5s;*/
        transform: rotateX(1deg);
        height: 36px;
        width: 24px;
        position: absolute;
        top: calc(100% - 1px);
        transform-origin: 0 100%;
        transform-style: preserve-3d;
        background-size: 253px 35px;
    }

    div {
        /*transition: transform 0.5s;*/
        height: 350px;
        width: 24px;
        position: absolute;
        left: calc(100% - 1px);
        transform-origin: 0 100%;
        transform-style: preserve-3d;
        background-size: 253px 350px;
    }
`
