export function Chunk<T>(array: T[], chunkSize = 7) {
    const chunks = []

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        // do whatever
        chunks.push(chunk)
    }
    return chunks
}