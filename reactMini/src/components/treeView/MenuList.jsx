import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
    return <ul className="menu-list-container">
        {
            list && list.length ? 
            list.map(listitem => <MenuItem item={listitem}/>)
            :null
        }
    </ul>
}

export default MenuList;