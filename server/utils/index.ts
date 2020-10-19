export function normalize(comment: any, threads: any) {
    Object.keys(threads).forEach((id) => {
        const thread = threads[id];
        if (id.toString() === comment.parentId.toString()) {
            thread.children[comment._id] = comment;
            return;
        }

        if (thread.children) {
            normalize(comment, thread.children);
        }
    });
}
