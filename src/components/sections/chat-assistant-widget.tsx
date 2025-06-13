"use client";

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, X, Send, Loader2, Bot, User } from 'lucide-react';
import { embeddedChatAssistant, type EmbeddedChatAssistantInput } from '@/ai/flows/embedded-chat-assistant';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
}

export function ChatAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: Date.now().toString(), text: "Hello! I'm Abisheik's portfolio assistant. How can I help you navigate his work today?", sender: 'assistant' }]);
    }
  }, [isOpen, messages.length]);


  const handleSendMessage = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const input: EmbeddedChatAssistantInput = { query: userMessage.text };
      const response = await embeddedChatAssistant(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.response,
        sender: 'assistant',
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat assistant error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again later.",
        sender: 'assistant',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full shadow-xl w-14 h-14 p-0 animate-pulse-glow bg-primary hover:bg-primary/90 text-primary-foreground"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="w-7 h-7" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-[28rem] sm:w-96 sm:h-[32rem] shadow-2xl rounded-lg flex flex-col z-50 border-primary dark:border-accent">
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b bg-muted/50 dark:bg-card">
        <div className="flex items-center space-x-2">
          <Bot className="w-6 h-6 text-primary dark:text-accent" />
          <h3 className="font-semibold text-md">Portfolio Assistant</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
          <X className="w-5 h-5" />
          <span className="sr-only">Close chat</span>
        </Button>
      </CardHeader>
      
      <CardContent className="flex-grow p-0 overflow-hidden">
        <ScrollArea className="h-full p-3" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                {msg.sender === 'assistant' && (
                  <Avatar className="w-7 h-7">
                    <AvatarFallback><Bot className="w-4 h-4"/></AvatarFallback>
                  </Avatar>
                )}
                <div className={`max-w-[75%] p-2.5 rounded-lg text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-br-none' 
                    : 'bg-muted dark:bg-secondary text-foreground rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <Avatar className="w-7 h-7">
                     <AvatarFallback><User className="w-4 h-4"/></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end space-x-2">
                <Avatar className="w-7 h-7">
                  <AvatarFallback><Bot className="w-4 h-4"/></AvatarFallback>
                </Avatar>
                <div className="max-w-[75%] p-2.5 rounded-lg bg-muted dark:bg-secondary text-foreground rounded-bl-none">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-3 border-t">
        <form onSubmit={handleSendMessage} className="flex w-full space-x-2 items-center">
          <Input
            type="text"
            placeholder="Ask about projects..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Send className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
