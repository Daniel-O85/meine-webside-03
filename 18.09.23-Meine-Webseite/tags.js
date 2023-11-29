// Functionen zur erstellung von HTML Elementen

// Single Tags
const single = (tag, attr) => {
    if (attr !== undefined) {
        let attri = "";
        for (let x of attr) {
            attri += ` ${x.name}="${x.wert}"`;
        }
        return `<${tag}${attri}/>`;
    } else {
        return `<${tag}/>`;
    }
};


// Block Tags
const block = (tag, wert, attr) => {
    if (attr !== undefined) {
        let attri = "";
        for (let x of attr) {
            attri += `${x.name}="${x.wert}"`;
        }
        return `<${tag} ${attri}>${wert}</${tag}>`;
    } else {
        return `<${tag}>${wert}</${tag}>`;
    }
};

// Block Tags Plus
const liste = (tags, werte, attr) => {
    let sam = '';
    let attri = "";
    if (attr !== undefined) {
        for (let x of attr) {
            attri += ` ${x.name}="${x.wert}"`;
        }
    }
    sam += `<${tags.haupt}${attri}>`;
    for (let z of werte) {
        sam += `<${tags.unter}>${z}</${tags.unter}>`;
    }
    sam += `</${tags.haupt}>`;
    return sam;
};

