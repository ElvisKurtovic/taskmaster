import { generateId } from "../Utils/GenerateId.js"


export default class Task {
    constructor({ startOn, goal, completeBy, id = generateId(), listId, }) {
        this.startOn = startOn
        this.goal = goal
        this.completeBy = completeBy
        this.id = id
        this.listId = listId
    }
}