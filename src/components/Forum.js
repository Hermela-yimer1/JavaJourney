import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';

const initialThreads = [
  {
    id: 1,
    title: "French Press",
    content: "Share your tips for brewing with a French Press."
  },
  {
    id: 2,
    title: "Espresso",
    content: "What are your favorite beans for making espresso?"
  },
  {
    id: 3,
    title: "Pour Over",
    content: "What are your best practices for making a perfect pour over coffee?"
  },
  {
    id: 4,
    title: "Aeropress",
    content: "What is your go-to Aeropress recipe?"
  },
  {
    id: 5,
    title: "Cold Brew",
    content: "How do you make the best cold brew coffee?"
  },
  {
    id: 6,
    title: "Moka Pot",
    content: "Share your tips for brewing coffee with a Moka Pot."
  },
  {
    id: 7,
    title: "Add more suggestions for coffee types",
    content: "What other types of coffee do you enjoy?"
  },
  {
    id: 8,
    title: "Best coffee you have had",
    content: "What is the best coffee you have ever had?"
  },
];

function Forum() {
  const [threads, setThreads] = useState(initialThreads);
  const [answers, setAnswers] = useState({});
  const [newAnswers, setNewAnswers] = useState({});

  useEffect(() => {
    const fetchAnswers = async () => {
      const answersCollection = collection(db, 'answers');
      const answersSnapshot = await getDocs(query(answersCollection, orderBy('timestamp')));
      const answersData = {};
      answersSnapshot.forEach(doc => {
        const data = doc.data();
        if (!answersData[data.threadId]) {
          answersData[data.threadId] = [];
        }
        answersData[data.threadId].push(data.answer);
      });
      setAnswers(answersData);
    };

    fetchAnswers();
  }, []);

  const handleAnswerChange = (e, threadId) => {
    setNewAnswers({
      ...newAnswers,
      [threadId]: e.target.value
    });
  };

  const handleAnswerSubmit = async (threadId) => {
    if (!newAnswers[threadId] || newAnswers[threadId].trim() === "") {
      toast.error("Answer cannot be empty!");
      return;
    }

    const answer = newAnswers[threadId];

    try {
      await addDoc(collection(db, 'answers'), {
        threadId,
        answer,
        timestamp: new Date()
      });

      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [threadId]: prevAnswers[threadId] ? [...prevAnswers[threadId], answer] : [answer]
      }));

      setNewAnswers({
        ...newAnswers,
        [threadId]: ""
      });

      toast.success("Your answer has been submitted!");
    } catch (error) {
      toast.error("Error submitting your answer. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Community Forum</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {threads.map((thread) => (
          <div key={thread.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{thread.title}</h3>
            <p>{thread.content}</p>
            <div className="mt-4">
              <input
                type="text"
                value={newAnswers[thread.id] || ''}
                onChange={(e) => handleAnswerChange(e, thread.id)}
                className="w-full p-2 border rounded"
                placeholder="Your answer..."
              />
              <button
                onClick={() => handleAnswerSubmit(thread.id)}
                className="mt-2 p-2 bg-blue-500 text-white rounded"
              >
                Submit Answer
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Answers:</h4>
              {answers[thread.id] && answers[thread.id].map((answer, index) => (
                <p key={index} className="p-2 bg-gray-200 rounded mb-2">{answer}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
