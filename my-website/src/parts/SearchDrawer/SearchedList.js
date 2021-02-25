import { useState } from 'react'
import { Input } from '@material-ui/core'
import { Padding16x16 } from 'components/PaddingSet'
import { drawerMenuItems } from 'parts/MyDrawer/drawer-menu-items'
import { useEffect } from 'react'

const SearchedList = () => {
  const [input, setInputValue] = useState(null)
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    if (input === null) return
    if (input.length > 0) {
      setSearchList(
        drawerMenuItems
          .map(option => ({
            ...option,
            subMenuItems: option.subMenuItems.filter(subItem =>
              subItem.title
                .toLocaleLowerCase()
                .startsWith(input.toLocaleLowerCase()),
            ),
          }))
          .filter(option => option.subMenuItems.length > 0),
      )
    } else setSearchList([])
  }, [input])

  console.log(searchList)
  return (
    <Padding16x16>
      <Input value={input} onChange={e => setInputValue(e.target.value)} />
      {searchList.map(({ title, subMenuItems, icon }, index) => (
        <>
          <div>{title}</div>
        </>
      ))}
    </Padding16x16>
  )
}

export default SearchedList
