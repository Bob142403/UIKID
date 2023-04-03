import '../index.css'

export function useColor() {
  const colors = {
    blue: 'text-white bg-blue-700',
    yellow: 'text-white bg-yellow-400',
    red: 'text-white bg-red-700',
    green: 'text-white bg-green-700',
    purple: 'text-white bg-purple-700',
    dark: 'text-white bg-gray-800',
    light: 'text-gray-900 bg-white border border-gray-300'
  }
  return (color) => colors[color]
}
