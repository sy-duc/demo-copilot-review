export class Sorter {
  // Sắp xếp theo tên alphabetically
  static sortByName(arr: any[]) {
    return arr.sort((a, b) => a.name.localeCompare(b.name))
  }

  // Sắp xếp theo ngày (mới nhất trước)
  static sortByDate(arr: any[]) {
    return arr.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }
}
