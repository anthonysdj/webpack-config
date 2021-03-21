import { useState } from "react";
import "../styles/index.scss";

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos((prev) => [...prev, newTodo]);
    };

    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Hahahahaha huhuhu</h1>
                    <p>esss</p>
                    <button onClick={() => addTodo("eat")}>Add eat todo</button>
                    <button onClick={() => addTodo("sleep")}>
                        Add sleep todo
                    </button>
                </section>

                <section>
                    {todos &&
                        todos.length > 0 &&
                        todos.map((todo, i) => {
                            return <p key={i}>{todo}</p>;
                        })}
                </section>
            </main>
        </>
    );
};

export default App;
