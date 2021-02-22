import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"


export default class TasksController {

    constructor() {
    }

    create(event, listId) {
        event.preventDefault()
        let form = event.target
        let rawTask = {
            body: form.body.value,
            listId: listId
            
        }
        tasksService.create(rawTask)
    }

    delete(taskId) {
        tasksService.delete(taskId)
    }
}