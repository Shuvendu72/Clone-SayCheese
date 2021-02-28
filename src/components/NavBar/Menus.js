import component from '../utils/component';

export default function Menus({ items }) {
  return (items.map((item, i) => {
    // console.log(item.component)
    const CustomComps = component[item.component]
    return <CustomComps {...item}>{item.label}</CustomComps>
  }
  )
  )
}
