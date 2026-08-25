import { useEffect, useRef, useState, type FormEvent } from 'react'
import { BOT_LABEL, EXAMPLE_PROMPTS, GREETING, getBotReply } from '../data/chatBot'
import type { ChatMessage } from '../types'

let nextId = 1

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const chatLogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const hasOpenedRef = useRef(false)

  useEffect(() => {
    chatLogRef.current?.scrollTo({ top: chatLogRef.current.scrollHeight })
  }, [messages, typing])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open])

  function toggleChat() {
    const willOpen = !open
    setOpen(willOpen)
    if (willOpen) {
      if (!hasOpenedRef.current) {
        setMessages([{ id: nextId++, from: 'bot', text: GREETING }])
        hasOpenedRef.current = true
      }
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }

  function sendMessage(text: string) {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { id: nextId++, from: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { id: nextId++, from: 'bot', text: getBotReply(text) }])
    }, 550 + Math.random() * 450)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="chatPanel"
        aria-label="Open AI chat assistant"
        onClick={toggleChat}
        className="w-14 h-14 rounded-2xl btn-primary text-white shadow-xl grid place-items-center hover:-translate-y-0.5 transition-transform"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="chatPanel"
          role="dialog"
          aria-label="AI chat assistant"
          className="absolute bottom-[68px] right-0 w-[92vw] max-w-sm h-[70vh] max-h-[520px] glass rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-popIn"
          style={{ transformOrigin: 'bottom right' }}
        >
          <div className="px-4 py-3 border-b border-border flex items-center gap-3 btn-primary text-white">
            <span className="w-9 h-9 rounded-full bg-white/20 grid place-items-center font-mono text-sm">🤖</span>
            <div>
              <p className="font-display font-semibold leading-tight">{BOT_LABEL}</p>
              <p className="text-xs text-white/80 leading-tight">A keyword script, not a real AI</p>
            </div>
          </div>

          <div ref={chatLogRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.from === 'bot'
                    ? 'max-w-[85%] bg-surface2 border border-border rounded-2xl rounded-bl-sm px-3.5 py-2.5'
                    : 'max-w-[85%] ml-auto btn-primary text-white rounded-2xl rounded-br-sm px-3.5 py-2.5'
                }
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="max-w-[60%] bg-surface2 border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
              </div>
            )}
          </div>

          <div className="px-3 pt-2 flex gap-2 overflow-x-auto pb-1">
            {EXAMPLE_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="tag whitespace-nowrap px-3 py-1.5 rounded-full border border-border hover:border-primary transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2">
            <label htmlFor="chatInput" className="sr-only">
              Type a message
            </label>
            <input
              ref={inputRef}
              id="chatInput"
              type="text"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects, skills..."
              className="flex-1 px-3 py-2 rounded-xl bg-surface2 border border-border focus:border-primary outline-none text-sm"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-10 h-10 rounded-xl btn-primary text-white grid place-items-center shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
