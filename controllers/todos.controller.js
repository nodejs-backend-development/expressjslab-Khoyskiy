const token = '2a1ae095a39fcafe18acaa2955a0469c980b8a1d7839ad5ed856f81c448089d6';
const getTodos = async (req, res) => {
    const { userID } = req.params;
    try {
        const response = await fetch(`https://gorest.co.in/public/v2/todos/${userID}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(404).send('Server Error');
    }
};
const createTodos = async (req, res) => {
    const { user_id, title, due_on, status } = req.body;
    try {
        const response = await fetch('https://gorest.co.in/public/v2/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ user_id, title, due_on, status }),
        });
        const data = await response.json();
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error in POST request');
    }
};

module.exports = {
    getTodos,
    createTodos,
};
