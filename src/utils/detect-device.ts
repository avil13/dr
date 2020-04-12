export const isIOS = () => {
  const reStr = ['RSSRadio', 'AppleWebKit', 'iOS', 'Darwin', 'iPad', 'iPhone', 'iPod'].join('|')
  const reg = new RegExp(reStr, 'i')
  return reg.test(navigator.userAgent) && !window.MSStream
}
