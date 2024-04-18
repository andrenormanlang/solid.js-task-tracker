import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class="container mt-5 text-center">
      <h1>Task Tracker</h1>
      <form class="mb-5 row row-cols-2 justify-content-center">
        <input 
          type="text" 
          placeholder="Add Task" 
          class="input-group-text p-1 w-25"
          id="taskInput"
          required
        />
        <button class="btn btn-primary ms-3 w-auto" type="submit">
          Add Task
        </button>
      </form>
      <div>
        <div class="row row-cols-3 mb-3 justify-content-center">
          <button class="btn btn-secondary w-auto">X</button>
          <div class="bg-light p-2 mx-2">Learn Solid.js main principles</div>
          <input 
            type="checkbox"
            role='button'
            class="form-check-input h-auto px-3" 
          />
        </div>
        <div class="row row-cols-3 mb-3 justify-content-center">
          <button class="btn btn-secondary w-auto">X</button>
          <div class="bg-light p-2 mx-2 text-decoration-line-through">
            Update photo APP Rest API
          </div>
          <input 
            type="checkbox"
            checked
            role='button'
            class="form-check-input h-auto px-3" 
          />

        </div>
      </div>    
    </div>
  );
};

export default App;
