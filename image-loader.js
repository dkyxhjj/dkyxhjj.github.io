export default function imageLoader({ src, width, quality }) {
  // For static exports, we need to make sure the src is properly resolved
  // This handles both absolute URLs and relative paths
  if (src.startsWith('/')) {
    // For production with basePath
    const basePath = process.env.NODE_ENV === 'production' ? '/dkyxhjj.github.io' : '';
    return `${basePath}${src}`;
  }
  return src;
}
