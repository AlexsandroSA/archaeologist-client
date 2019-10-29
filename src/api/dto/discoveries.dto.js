export function toApi(data = {}) {
    return {
        title: data.title || undefined,
        description: data.description || undefined,
        date: data.date || undefined,
        comments: data.comments || undefined,
    }
}
export function fromApi(data = []) {
    if (!data) return [];

    return data.map(item => ({
        id: item._id,
        title: item.title || '',
        description: item.description || '',
        comments: item.comments || '',
        date: item.date || '',
    }));
}
