import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (!email
            || !email.includes('@')
            || !message
            || !message.trim() === "") {
            res.status(422).json({ message: "Invalid input." });
            return;
        }
        //store it in a database


        const newMessage = {
            email,
            name,
            message
        };
        console.log(newMessage);
        let client
        try {
            client = await MongoClient.connect('mongodb+srv://hancy:v0su8l6akgfOjSuT@cluster1.dmcghae.mongodb.net/mysite?retryWrites=true&w=majority');
            console.log('Database Connected Succesfully');
        } catch (error) {
            res.status(500).json({ message: ("Could not connect to database") });
            return;
        }

        try {
            const db = client.db();
            const result = await db.collection('message').insertOne(newMessage);
            console.log('Congratulations! Your message have been successfully delivered')
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing Message Failed' })
            return;
        }

        client.close();

        res
            .status(201)
            .json({ message: "Successfully stored message!", message: newMessage })
    };
}