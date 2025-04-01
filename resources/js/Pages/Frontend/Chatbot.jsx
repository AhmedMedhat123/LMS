import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

const Chatbot = () => {
  const { data, setData, post, processing, reset } = useForm({
    message: '',
  });

  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!data.message.trim()) return; // Prevent sending empty messages

    const userMessage = { role: 'user', content: data.message };
    setMessages((prev) => [...prev, userMessage]); // Add user message to chat

    post(route('chatbot.ask'), {
      preserveScroll: true,
      onSuccess: ({ props }) => {
        if (props.aiResponse) {
          setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: props.aiResponse },
          ]);
        }
      },
      onError: (errors) => {
        console.error(errors);
      },
      onFinish: () => reset('message'),
    });
  };

  const formatResponse = (response) => {
    // This function formats the response by parsing basic markdown or HTML
    return response
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
      .replace(/### (.*?)\n/g, '<h3>$1</h3>') // Heading 3
      .replace(/\n/g, '<br />'); // Line breaks
  };

  return (
    <MainLayout>
      <Head title="AI Chatbot" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        {' '}
        {/* Increased width */}
        <h1 className="text-xl font-semibold mb-4 text-gray-700">
          Chat with AI
        </h1>
        <div className="border rounded-lg p-4 h-96 overflow-y-auto bg-gray-100 flex flex-col">
          {' '}
          {/* Increased height */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-lg max-w-2xl ${
                // Increased message width
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
          ))}
          {processing && (
            <div className="p-2 my-1 rounded-lg max-w-2xl bg-gray-300 text-gray-900 self-start">
              Typing...
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-3 mt-3">
          <textarea
            className="w-full h-28 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" // Increased height for input
            placeholder="Type your message..."
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
          />

          <button
            onClick={sendMessage}
            disabled={processing}
            className={`px-4 py-2 text-white font-medium rounded-lg transition ${
              processing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {processing ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Chatbot;
