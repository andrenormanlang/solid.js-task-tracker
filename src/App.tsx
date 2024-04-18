
// import {createSignal} from 'solid-js';
import { For } from 'solid-js';
import { createStore } from 'solid-js/store';




type Task = {
  id: string;
  text: string;
  completed: boolean;
};

function App () {
  // const [taskList, setTaskList] = createSignal<Task[]>([]);
  const [taskList, setTaskList] = createStore<Task[]>([]);

  // setting states with signal & store!
  // signal is for simple state management while store is for complex state management such as nested objects

  const addTask = (e: Event) => {
    e.preventDefault();

    const taskInput = document.querySelector('#taskInput') as HTMLInputElement;
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      text: taskInput.value,
      completed: false,
    };

    // setTaskList([newTask, ...taskList()]);
    setTaskList([newTask, ...taskList]);

    // console.log(taskList());
    console.log(taskList);

    taskInput.value = '';
  };
  return (
    <div class="container mt-5 text-center">
      <h1>Task Tracker</h1>
      <For each={taskList}>
        {(task) =>( 
          <div class="row row-cols-3 mb-3 justify-content-center">
            <button class="btn btn-secondary w-auto">X</button>
            <div class={`bg-light p-2 mx-2 ${task.completed && 'text-decoration-line-through'}`}>
              {task.text}
            </div>
            <input 
              type="checkbox"
              checked={task.completed}
              role='button'
              class="form-check-input h-auto px-3" 
            />      
          </div>       
       )}
      </For>
      <form class="mb-5 row row-cols-2 justify-content-center">
        <input 
          type="text" 
          placeholder="Add Task" 
          class="input-group-text p-1 w-25"
          id="taskInput"
          required
        />
        <button 
          class="btn btn-primary ms-3 w-auto" 
          type="submit"
          onClick={(e) => addTask(e)}
        >
          Add Task
        </button>
      </form>
      <div>
        
      </div>    
    </div>
  );
};

export default App;
