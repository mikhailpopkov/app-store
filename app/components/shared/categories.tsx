import React from "react";
import classNames from "classnames";
import Button from "../ui/button";

interface Props {
    id: string,
    title: string,
    text: string,
    img: string,
    className?: string,
}

const Categories:React.FC<Props> = ({id, title, text, img, className}) => {
    return (
        <div className={classNames('cateogories__block', className)} id={id}>
            <div className="categories__block-container">
                <div className="categories__block-title">
                    {title}
                </div>
                <div className="categories__block-text">
                    {text}
                </div>
                <div className="categories__block-btns ">
                    <Button className="b-btn--blue" link="iphone-15" text="Explore iPhone 15"/>
                    <Button className="b-btn--blue" link="iphone-15-pro" text="Explore iPhone 15 Pro"/>
                </div>
            </div>
            <img src={img} alt={title}/>
        </div>
    )
}

export default Categories;