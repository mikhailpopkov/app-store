import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface Props {
    className: string,
    link: string,
    text: string,
}

const Button:React.FC<Props> = ({className, link, text}) => {
    return (
        <Link href={link} className={classNames('b-btn', className)}>
            {text}
        </Link>
    )
}

export default Button;