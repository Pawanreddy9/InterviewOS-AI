import { create } from 'zustand';

interface Message {
  id: string;
  role: 'user' | 'interviewer';
  content: string;
  timestamp: Date;
}

interface InterviewState {
  sessionId: string | null;
  role: 'technical-support' | 'software-engineer' | 'qa-tester' | null;
  messages: Message[];
  isRecording: boolean;
  isSpeaking: boolean;
  scores: {
    technical: number;
    communication: number;
    confidence: number;
    problemSolving: number;
  } | null;
  setSessionId: (id: string) => void;
  setRole: (role: 'technical-support' | 'software-engineer' | 'qa-tester') => void;
  addMessage: (message: Message) => void;
  setIsRecording: (recording: boolean) => void;
  setIsSpeaking: (speaking: boolean) => void;
  setScores: (scores: any) => void;
  resetInterview: () => void;
}

export const useInterviewStore = create<InterviewState>((set) => ({
  sessionId: null,
  role: null,
  messages: [],
  isRecording: false,
  isSpeaking: false,
  scores: null,
  setSessionId: (id) => set({ sessionId: id }),
  setRole: (role) => set({ role }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setIsRecording: (recording) => set({ isRecording: recording }),
  setIsSpeaking: (speaking) => set({ isSpeaking: speaking }),
  setScores: (scores) => set({ scores }),
  resetInterview: () =>
    set({
      sessionId: null,
      role: null,
      messages: [],
      isRecording: false,
      isSpeaking: false,
      scores: null,
    }),
}));
