export function logOut() {
  wx.setStorageSync('CurrAuthStep', 1);
  wx.setStorageSync('userData', undefined)
}