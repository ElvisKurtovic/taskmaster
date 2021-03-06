import { generateId } from "../Utils/GenerateId.js"


export default class Task {
    constructor({ body, id = generateId(), listId, }) {
        this.body = body
        this.id = id
        this.listId = listId
    }

    get Template() {
        return /* html */`
            <div class='row'>
            <ul class= ''"${this.body.includes('extra') ? 'text-danger': ''}" ><li class=''><span class=''>${this.body}</span> 
            <input id='checkbox' type="checkbox" value="">    
            <button type="button" class="btn text-danger close"
            onclick="app.tasksController.delete('${this.id}')"><span>&times;</span></button></li> </ul>
            </div>
        `
    }
}