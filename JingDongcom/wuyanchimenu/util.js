function sameSign(a, b) {
    return (a ^ b) >= 0;
}

function vector(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.y
    };
}

function vectorProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
}

function isPointInTrangle(p, a, b, c) {
    let pa = vector(p, a);
    let pb = vector(p, b);
    let pc = vector(p, c);

    let ta = vectorProduct(pa, pb);
    let tb = vectorProduct(pb, pc);
    let tc = vectorProduct(pc, pa);

    return sameSign(ta, tb) && sameSign(tb, tc);

}

function needDelay(elem, leftCorner, currMousePos) {
    let offset = elem.offset();

    let topLeft = {
        x: offset.left,
        y: offset.top
    };

    let bottomLeft = {
        x: offset.left,
        y: offset.top + elem.height()
    };

    return isPointInTrangle(currMousePos, leftCorner, topLeft, bottomLeft);
}
