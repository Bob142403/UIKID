import '../index.css'

export function useColor(color) {
  const colors = {
    blue: 'bg-blue-700',
    yellow: 'bg-yellow-400',
    red: 'bg-red-700',
    green: 'bg-green-700',
    purple: 'bg-purple-700',
    dark: 'bg-gray-800',
    light: 'text-gray-900 bg-white border border-gray-300'
  }
  return colors[color]
}
