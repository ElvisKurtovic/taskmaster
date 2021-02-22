import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";


class TasksService {
    constructor() {
        ProxyState.on('tasks', saveState)
    }
    create(rawTask) {
        // same same
        // let temp = ProxyState.toppings
        // let newTopping = new Topping(rawTopping)
        // temp.push(newTopping)
        // ProxyState.toppings = temp

        ProxyState.tasks = [new Task(rawTask), ...ProxyState.tasks]
        console.log(ProxyState.tasks)
    }

    delete(taskId) {
        // let temp = ProxyState.toppings
        // let toppingIndex = temp.findIndex(p => p.id == toppingId)
        // temp.splice(toppingIndex, 1)
        // ProxyState.toppings = temp
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)

    }
}

export const tasksService = new TasksService()