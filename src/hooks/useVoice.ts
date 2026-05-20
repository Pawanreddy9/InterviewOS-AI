import { useState, useCallback } from 'react';

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const listen = useCallback(async () => {
    try {
      setIsListening(true);
      setError(null);
      
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SpeechRecognition) throw new Error('Speech Recognition not supported');

      const recognition = new SpeechRecognition();
      recognition.language = 'en-US';

      return new Promise<string>((resolve) => {
        recognition.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0].transcript)
            .join('');
          setIsListening(false);
          resolve(transcript);
        };
        recognition.start();
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to listen');
      setIsListening(false);
      return '';
    }
  }, []);

  const playAudio = useCallback(async (text: string) => {
    try {
      setIsSpeaking(true);
      setError(null);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      return new Promise<void>((resolve) => {
        utterance.onend = () => {
          setIsSpeaking(false);
          resolve();
        };
        window.speechSynthesis.speak(utterance);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to speak');
      setIsSpeaking(false);
    }
  }, []);

  return { isListening, isSpeaking, error, listen, playAudio };
};
