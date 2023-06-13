export default {
  columns(h, conf, key) {
    const list = []
    conf.__slot__.columns.forEach(item => {
      list.push(<el-table-column label={item.label}/>)
    })
    return list
  }
}
