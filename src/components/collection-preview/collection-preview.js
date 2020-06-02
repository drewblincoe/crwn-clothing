import React from "react";

import CollectionItem from "../collection-item/collection-item";

import "./styles.scss";

const CollectionPreview = ({ id, title, items }) => (
    <div>
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>
    </div>
);

export default CollectionPreview;
