import menus from './components/treeView/data.js'

const  getCurrentLabel = menus[0].label
let  summa = {}

function toggle(){
    summa = { [getCurrentLabel]: !summa[getCurrentLabel] }

    return summa
}

console.log();
