import React from "react";
import Container from "./container";
import Button from "../ui/button";

interface Props {
    date?: string,
    time?: string,
    title: string,
}

const Banner:React.FC<Props> = ({date, time, title}) => {

    return (
        <div className="b-banner">
            <Container>
                <div className="banner__wrapper">
                    <div className="banner__title">
                        {title}
                    </div>
                    <div className="banner__text">
                        Watch online on {date} at {time}
                    </div>
                    <Button className="b-btn--blue" text="Learn more" link="/about"/>
                </div>
            </Container>
            <div className="banner__img">
                <img src='/banner-desktop.webp' alt='Banner' />
            </div>
        </div>
    )
}

export default Banner;