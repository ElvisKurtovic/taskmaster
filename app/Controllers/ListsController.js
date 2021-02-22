import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"


function _draw() {
    let lists = ProxyState.lists
    let template = ""
    lists.forEach(list => template += list.Template)
    // console.log(template)
    document.getElementById('lists').innerHTML = template
    console.log(ProxyState.lists)
}

export default class ListsController {
    constructor() {
        console.log("lists controller working")
        console.log(ProxyState.lists)
        _draw()
        ProxyState.on("lists", _draw)
    }
    createList(event) {
        event.preventDefault();
        console.log('creating list')
        let form = event.target
        console.log(form)

        let newList = {
            title: form.title.value,
        }
        // let newList = {
        //     startOn: form.startOn.value,
        //     goal: form.goal.value,
        //     completeBy: form.completeBy.value,

        console.log()
        listsService.createList(newList)
    }
    deleteList(id) {
        console.log(id)
        listsService.deleteList(id)
    }
}