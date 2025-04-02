import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

const Chatbot = () => {
  const { data, setData, post, processing, reset } = useForm({
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!data.message.trim()) return;

    const userMessage = { role: 'user', content: data.message };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(route('chatbot.ask'), {
        message: data.message,
      });

      if (response.data.aiResponse) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: response.data.aiResponse },
        ]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
    } finally {
      setLoading(false);
      reset('message');
    }
  };

  const formatResponse = (response) => {
    return response
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
      .replace(/### (.*?)\n/g, '<h3>$1</h3>') // Heading 3
      .replace(/\n/g, '<br />'); // Line breaks
  };

  const sampleQuestions = [
    'What are the highest-rated courses?',
    'What are the most expensive courses?',
    'How many courses are available?',
    'What are the available categories',
  ];

  return (
    <MainLayout>
      <Head title="AI Chatbot" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        <div className="border rounded-lg p-4 h-[25rem] overflow-y-auto bg-gray-100 flex flex-col justify-center">
          {messages.length === 0 ? (
            <div className="text-gray-500 text-center">
              <p className="text-3xl font-medium">What can I help with?</p>
              <ul className="mt-5 space-y-2">
                {sampleQuestions.map((question, index) => (
                  <li
                    key={index}
                    className="text-[#ec5252] cursor-pointer hover:underline"
                    onClick={() => setData('message', question)}
                  >
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 my-2 rounded-lg max-w-2xl ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white self-end ml-auto'
                    : 'bg-gray-300 text-gray-900 self-start'
                }`}
              >
                {msg.role === 'user' ? (
                  <p>{msg.content}</p>
                ) : (
                  <div
                    className="chat-response"
                    dangerouslySetInnerHTML={{
                      __html: formatResponse(msg.content),
                    }}
                  />
                )}
              </div>
            ))
          )}
          {loading && (
            <div className="p-2 my-1 rounded-lg max-w-2xl bg-gray-300 text-gray-900 self-start">
              Typing...
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-3 mt-3">
          <textarea
            className="w-full h-15 p-3 border border-gray-300 rounded-lg  focus:ring-0"
            placeholder="Type your message..."
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className={`px-4 py-2 text-white font-medium rounded-lg transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#ec5252] hover:bg-[#ec5252ed]'
            }`}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Chatbot;
