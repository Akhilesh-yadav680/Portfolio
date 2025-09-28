import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const PORTFOLIO_CONTEXT = `
You are an AI assistant for Muddam Akhilesh Yadav's portfolio website. Here's information about Akhilesh:

ABOUT:
- AI & Full-Stack Developer passionate about turning data into insights and ideas into impact
- Specializes in Data Science, Machine Learning, AI, and Full-Stack Development
- Creates intelligent solutions with cutting-edge technology

SKILLS:
- Programming Languages: Python, JavaScript, TypeScript, SQL, HTML, CSS
- AI/ML: TensorFlow, PyTorch, Scikit-learn, OpenAI API, Hugging Face
- Frameworks: Django, React, Node.js, Express.js, Next.js
- Databases: PostgreSQL, MongoDB, MySQL, Redis
- Cloud & DevOps: AWS, Google Cloud, Docker, Git, GitHub Actions
- Bot Development: Telegram Bot API, Discord.py, Automation
- API Integration: RESTful APIs, GraphQL, Webhook integration

PROJECTS:

AI Agents:
1. PostPilot - Automates and schedules email sending for consistent communication
   GitHub: https://github.com/Akhilesh-yadav680/Auto-Mail-AI-Agent

2. SmartChef Pro - Suggests personalized recipes in Telegram using available ingredients and AI
   GitHub: https://github.com/Akhilesh-yadav680/Smart-Chef---AI-Powered-Telegram-Recipe-Bot-AI-AGENT-

3. FinanceFriend - Tracks personal or business expenses automatically via Telegram
   GitHub: https://github.com/Akhilesh-yadav680/ExpenseAI-Agent

4. SkyCastBot - Provides real-time weather updates and forecasts in Telegram
   GitHub: https://github.com/Akhilesh-yadav680/n8n-weather-email-automation

Other Projects:
- CryptoProctor: Advanced cryptocurrency monitoring and analysis platform
- Resume Screening: AI-powered resume analysis and candidate matching system
- Bitcoin Tracker: Real-time cryptocurrency price tracking and portfolio management
- Task Management: Intelligent task organization with AI-powered prioritization

Answer questions naturally and conversationally about Akhilesh's work, skills, and projects. Be helpful and informative while maintaining a professional yet friendly tone.
`;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get OpenAI API key from environment
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: PORTFOLIO_CONTEXT
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to generate response' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in ai-assistant function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});