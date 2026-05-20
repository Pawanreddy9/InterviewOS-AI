export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
  resumeId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InterviewSession {
  id: string;
  userId: string;
  role: 'technical-support' | 'software-engineer' | 'qa-tester';
  startTime: Date;
  endTime?: Date;
  status: 'ongoing' | 'completed';
  messages: Message[];
}

export interface Message {
  id: string;
  role: 'user' | 'interviewer';
  content: string;
  timestamp: Date;
}

export interface InterviewFeedback {
  sessionId: string;
  technicalScore: number;
  communicationScore: number;
  confidenceScore: number;
  problemSolvingScore: number;
  strengths: string[];
  weakAreas: string[];
}
