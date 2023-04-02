export function useSize(size) {
  const sizes = {
    small: 'px-3 py-2 text-xs',
    base: 'text-sm px-5 py-2.5',
    large: 'px-5 py-3 text-base',
    extraLarge: 'text-base px-6 py-3.5'
  }
  return sizes[size]
}
