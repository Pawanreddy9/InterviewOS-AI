export const SYSTEM_PROMPTS = {
  'technical-support': `You are an experienced Technical Support Manager conducting a technical support interview. Ask one question at a time. Be conversational and professional.`,
  'software-engineer': `You are a Senior Software Engineer conducting a technical interview. Ask one question at a time. Be encouraging and conversational.`,
  'qa-tester': `You are a QA Lead conducting a QA testing interview. Ask one question at a time. Be supportive and professional.`,
};

export const INTERVIEW_STARTERS = {
  'technical-support': [
    "Hello! A user calls in saying their VPN isn't connecting. What would be your first step?",
    "Welcome! An employee can't access email in Outlook. How would you approach this?",
    "Hi there! A customer can't find their printer. Walk me through your solution.",
  ],
  'software-engineer': [
    "Hello! Can you explain what a REST API is with a basic example?",
    "Hi! You're debugging a null pointer exception. How do you approach this?",
    "Welcome! How would you design a system for a social media platform?",
  ],
  'qa-tester': [
    "Hello! You're testing a login form. What test cases would you write?",
    "Welcome! You found a bug in the Save button. How do you classify severity?",
    "Hi! How would you approach regression testing for a new feature?",
  ],
};
