import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"


// function _draw() {
//     let lists = ProxyState.lists
//     let template = ""
//     lists.forEach(list => template += list.Template)
//     // console.log(template)
//     document.getElementById('lists').innerHTML = template
//     console.log(ProxyState.lists)
// }

function _draw() {
    let listElem = document.getElementById("lists")
    let template = ""
    ProxyState.lists.forEach(l => template += l.Template)
    listElem.innerHTML = template
}

export default class ListsController {
    constructor() {
        // console.log("lists controller working")
        // console.log(ProxyState.lists)
        ProxyState.on("lists", _draw)
        ProxyState.on("tasks", _draw)
    }
    createList(event) {
        event.preventDefault();
        // console.log('creating list')
        let form = event.target
        // console.log(form)

        let newList = {
            title: form.title.value,
            body: form.body.value,
            color: form.colorSelect.value
        }

        // console.log()
        listsService.createList(newList)
    }
    deleteList(id) {
        console.log(id)
        listsService.deleteList(id)
    }
}