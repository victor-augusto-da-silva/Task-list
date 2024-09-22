import { log, select } from "@clack/prompts";
import { taskManager } from "../manager/tasks.js";
import { mainMenu} from "./main.js"

export async  function listTasksMenu() {
    if(taskManager.tasks.size <1 ) {
        log.warn("Nenhuma tarefa para ser listada!")
        setTimeout( () =>  mainMenu() ,1000 )
        return;
    }
    const selected = await select ({
        message: "Selecione uma tarefa",
        options: [
        {label: "Menu principal" , value: "main"}
        ]
         
    })
}