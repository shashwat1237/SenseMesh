import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { VideoPlayer } from "@/components/VideoPlayer";
import { SignContextSidebar } from "@/components/SignContextSidebar";
import { FooterAction } from "@/components/FooterAction";

const Index = () => {
  const [currentWord, setCurrentWord] = useState("Welcome");
  const [isFingerSpelling, setIsFingerSpelling] = useState(false);
  const [upcomingWords, setUpcomingWords] = useState<string[]>(["to", "this", "introduction"]);

  const handleWordChange = useCallback((word: string, fingerSpelling: boolean, upcoming: string[]) => {
    setCurrentWord(word);
    setIsFingerSpelling(fingerSpelling);
    setUpcomingWords(upcoming);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6 flex-col lg:flex-row">
          {/* Video Player - Dominant Element */}
          <div className="flex-1">
            <VideoPlayer onWordChange={handleWordChange} />
          </div>

          {/* Sign Context Sidebar */}
          <SignContextSidebar
            currentWord={currentWord}
            isFingerSpelling={isFingerSpelling}
            upcomingWords={upcomingWords}
          />
        </div>

        <FooterAction />
      </main>
    </div>
  );
};

export default Index;
