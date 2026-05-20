import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { useInterviewStore } from '@/store/interviewStore';
import { useVoice } from '@/hooks/useVoice';
import { useEffect, useState, useRef } from 'react';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { Mic, Send, Loader } from 'lucide-react';
import { INTERVIEW_STARTERS } from '@/lib/gemini-prompts';

export default function InterviewSession() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { role } = router.query;
  const { messages, addMessage, setSessionId, setRole } = useInterviewStore();
  const { listen, playAudio, isListening } = useVoice();
  const [sessionLoading, setSessionLoading] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (role && typeof role === 'string') {
      setRole(role as any);
      setSessionId(Date.now().toString());
      setSessionLoading(false);
      
      const roleType = role as keyof typeof INTERVIEW_STARTERS;
      const starter = INTERVIEW_STARTERS[roleType][Math.floor(Math.random() * 3)];
      addMessage({
        id: Date.now().toString(),
        role: 'interviewer',
        content: starter,
        timestamp: new Date(),
      });
      playAudio(starter);
    }
  }, [role]);

  const handleMicClick = async () => {
    const transcript = await listen();
    if (transcript) {
      setUserInput(transcript);
      await sendMessage(transcript);
    }
  };

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      await sendMessage(userInput);
      setUserInput('');
    }
  };

  const sendMessage = async (text: string) => {
    setSendingMessage(true);
    addMessage({
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    });

    setTimeout(() => {
      const responses = [
        'That\'s a great answer! Let me ask you a follow-up question...',
        'Excellent point. Here\'s my next question...',
        'I like your approach. Now, let me probe deeper...',
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      addMessage({
        id: (Date.now() + 1).toString(),
        role: 'interviewer',
        content: response,
        timestamp: new Date(),
      });
      playAudio(response);
      setSendingMessage(false);
    }, 1000);
  };

  if (authLoading || sessionLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 h-screen flex flex-col">
      <GlassmorphismCard className="flex-1 overflow-y-auto p-6 mb-6">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white'
                }`}
              >
                <p>{msg.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {msg.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {sendingMessage && (
            <div className="flex justify-start">
              <div className="bg-gray-200 dark:bg-slate-700 px-4 py-3 rounded-lg">
                <Loader className="w-5 h-5 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </GlassmorphismCard>

      <GlassmorphismCard className="p-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your answer or click the mic..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={handleMicClick}
            disabled={isListening}
            className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
          >
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={handleSendMessage}
            disabled={!userInput.trim() || sendingMessage}
            className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </GlassmorphismCard>
    </div>
  );
}
