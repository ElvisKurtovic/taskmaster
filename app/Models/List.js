import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js";


export default class List {
    constructor({ title, body, id = generateId(), color }) {
        this.title = title
        this.body = body
        this.id = id
        this.color = color
    }
    get Template() {
        return /*html*/`
                <div class="col-4 ${this.color} border rounded shadow-sm text-light">
                    <h1>${this.title}<button class="text-danger close mt-1"
                    onclick="app.listsController.deleteList('${this.id}')"><span>&times;</span></button></h1>
                    <h5>Started On: ${this.body}</h5>
                    
                    <form onsubmit="app.tasksController.create(event, '${this.id}')">
                        <div class="form-group">
                            <input required type="text" minlength='3' maxlength='50' name="body" placeholder="Task">
                            <button class="btn btn-dark" type="submit">Add</button>
                            </form>
                            </div>
                            <div class="row align-content-center justify-content-between">
                        
                            <div class='col-12'>
                            ${this.Tasks}
                            </div>
                            </div>
                </div>
        `

    }
    get Tasks() {
        let template = ''
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }
}