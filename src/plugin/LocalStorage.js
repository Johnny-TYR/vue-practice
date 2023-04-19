export default function (KEY) {
  return {
    // 提取項目
    load() {
      return JSON.parse(window.localStorage.getItem(KEY) || '')
    },
    // 設定項目
    save() {
      window.localStorage.setItem(KEY, JSON.stringify(data))
    }
  }
}