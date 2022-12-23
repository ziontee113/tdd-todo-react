import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    let [name, setName] = useState('Kamen Rider Faiz');

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-4xl text-yellow-500">Hello World</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <div className="flex flex-col items-center p-10">
                <input
                    className="mb-4 w-80 px-4 py-2"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <h1 className="min-h-[50px] text-4xl">{name}</h1>
            </div>
        </div>
    );
}

export default App;
