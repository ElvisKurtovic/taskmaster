import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListsService {


    constructor() {
        console.log("lists service");
    }
    createList(newList) {

        let temp = ProxyState.lists
        temp.push(new List(newList))
        ProxyState.lists = temp

    }

    deleteList(id) {
        let temp = ProxyState.lists
        let listIndex = temp.findIndex(list => list.id == id)
        temp.splice(listIndex, 1)
        ProxyState.lists = temp
    }
}







export const listsService = new ListsService()