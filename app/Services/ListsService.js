import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {


    constructor() {
        ProxyState.on('lists', saveState)
        // console.log("lists service");
    }
    createList(newList) {
        ProxyState.lists = [new List(newList), ...ProxyState.lists]
        // let temp = ProxyState.lists
        // temp.push(new List(newList))
        // ProxyState.lists = temp

    }

    deleteList(id) {
        if(window.confirm('Are You Sure')){
        let temp = ProxyState.lists
        let listIndex = temp.findIndex(list => list.id == id)
        temp.splice(listIndex, 1)
        ProxyState.lists = temp
    }
}
}







export const listsService = new ListsService()