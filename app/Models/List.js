import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js";


export default class List {
    constructor({ title, id = generateId(), }) {
        this.title = title
        this.id = id
    }

    get Template() {
        return /*html*/`<div class="col-6">
        <div class="input-group">
        <div class="input-group-prepend">
            <button class="btn btn-primary" type="submit" onclick="">Create
                Task</button>
        </div>
        <input type="text" placeholder="Task" aria-label="goal" class="form-control">
        <input type="text" placeholder="Start Date" aria-label="startOn" class="form-control">
        <input type="text" placeholder="Complete By" aria-label="completeBy" class="form-control">
    </div>
    <hr>
        
                    <p class="font-weight-bold">To Do List</p>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <!-- Default checked -->
                            <div class="custom-control custom-checkbox">
                            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.listsController.deleteList('${this.id}')" aria-hidden="true"></i>
                                <input type="checkbox" class="custom-control-input" id="check1" checked>
                                <label class="custom-control-label" for="check1">Check me</label>
                            </div>
                        </li>
                    </ul>
                    </div>`

    }
    get Tasks() {
        let template = ''
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }