import { useState } from 'react';
import { useForm } from '@inertiajs/react';

const MiniChatbot = () => {
  const { data, setData, reset } = useForm({ message: '' });
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

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
      .replace(/### (.*?)\n/g, '<h5>$1</h5>') // Heading 3
      .replace(/\n/g, '<br />'); // Line breaks
  };

  const sampleQuestions = [
    'What are the highest-rated courses?',
    'What are the most expensive courses?',
    'How many courses are available?',
  ];

  return (
    <>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto text-sm p-2 space-y-2">
        {messages.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-500 text-2xl">What can I help with?</p>
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
              className={`p-2 rounded-lg text-sm max-w-max ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white self-end ml-auto text-right'
                  : 'bg-gray-200 text-gray-900 self-start'
              }`}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: formatResponse(msg.content),
                }}
              />
            </div>
          ))
        )}
      </div>

      {/* Typing Indicator */}
      {loading && (
        <div className="text-xs text-gray-500 text-left">Typing...</div>
      )}

      {/* Input Box */}
      <div className="mt-2 flex space-x-2">
        <input
          className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-[#ec5252]"
          placeholder="Type a message..."
          value={data.message}
          onChange={(e) => setData('message', e.target.value)}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className={`px-3 py-1 text-white text-sm rounded-md ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#ec5252] hover:bg-[#d64343]'
          }`}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default MiniChatbot;
