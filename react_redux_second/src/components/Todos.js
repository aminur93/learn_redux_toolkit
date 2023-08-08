import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {

    const {isLoading, todos, error} = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}

            <section>
                {todos && todos.map((todo) => {
                    const {id, title} = todo;

                    return <article key={id}>
                            <p>{id}</p>
                            <p>{title}</p>
                    </article>
                })}
            </section>
        </div>
    )
}

export default Todos;

