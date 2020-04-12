export const isDev = (): boolean => {
  const str = window.location.hash.replace(/^#/, '')
  return str === 'dev'
}
