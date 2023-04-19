export default function (KEY) {
  return {
    // 提取項目
    load() {
      return JSON.parse(window.localStorage.getItem(KEY) || '')
    },
    // 設定項目
    save() {
      window.localStorage.setItem(KEY, JSON.stringify(data))
    },
    // 清除項目
    remove() {
      window.localStorage.removeItem(KEY)
    },
    // 清除所有
    clear() {
      window.localStorage.clear()
    }
  }
}