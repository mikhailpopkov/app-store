`use client`

import React from "react";
import Categories from "./categories";

interface Props {
    items: any[];
}

const CategoriesList:React.FC<Props> = ({items}) => {
    return (
        <div className="categories__wrapper">
            {items.map((category, i) => (
                <Categories key={category.id} id={category.id} title={category.title} text={category.text} img={category.img}/>
            ))}
        </div>
    )
}

export default CategoriesList;