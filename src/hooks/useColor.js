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
  const hovers = {
    blue: 'hover:bg-blue-800',
    yellow: 'hover:bg-yellow-500',
    red: 'hover:bg-red-800',
    green: 'hover:bg-green-800',
    purple: 'hover:bg-purple-800',
    dark: 'hover:bg-gray-900',
    light: 'hover:bg-gray-100'
  }
  return (color, withHover = false) => {
    const isHover = withHover ? hovers[color] : ''
    console.log(colors[color] + ' ' + isHover)
    return colors[color] + ' ' + isHover
  }
}
