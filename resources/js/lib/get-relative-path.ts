// Get relative path from url to laravel storage

export function getRelativePath(url: string): string {
    if (!url) {
        return url;
    }
    if (!url.startsWith('/') && !url.startsWith('http')) {
        return `/storage/${url}`;
    }

    return url;
}
