import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'
import MenuList from './MenuList';


function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({ ...displayCurrentChildren, [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel] })
        console.log(getCurrentLabel);
        console.log(displayCurrentChildren)

    }
    return <li>
        <div class="menu-item">

            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? (
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {
                            displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={25} /> : <FaPlus color='#fff' size={25} />
                        }
                    </span>
                ) : null
            }
        </div>

        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList list={item.children} />
                : null
        }

    </li>
}

export default MenuItem;