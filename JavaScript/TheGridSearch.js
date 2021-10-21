function gridSearch(G, P) {
    let lengthG = G[0].length;
    let lengthP = P[0].length;

    let count = 0;

    for (let i = 0; i < lengthG - lengthP + 1; i++) {
        count = 0;
        for (let j = 0; j < G.length; j++) {
            let pattern = G[j].indexOf(P[count], i);
            if (pattern == i && count == P.length - 1) {
                return ("YES");
            }
            if (pattern == i) {
                count++;
            }
        }
    }

    return ("NO");
}
