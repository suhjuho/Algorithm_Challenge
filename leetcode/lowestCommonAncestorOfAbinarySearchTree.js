const lowestCommonAncestor = function(root, p, q) {
    const biggerNumber = Math.max(p.val, q.val);
    const smallerNumber = Math.min(p.val, q.val);

    if (root.val === biggerNumber || root.val === smallerNumber) {
        return root;
    }

    if (smallerNumber < root.val && root.val < biggerNumber) {
        return root;
    }

    if (root.val < smallerNumber) {
        return lowestCommonAncestor(root.right, p, q);
    }

    if (biggerNumber < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
};
