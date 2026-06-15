"use client";

import { useUser } from "@clerk/nextjs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, BookOpen, Calendar, TrendingUp } from "lucide-react";

const data = [
  { name: 'Jan', students: 4000, events: 24 },
  { name: 'Feb', students: 5000, events: 28 },
  { name: 'Mar', students: 6500, events: 35 },
  { name: 'Apr', students: 8500, events: 42 },
  { name: 'May', students: 11000, events: 48 },
  { name: 'Jun', students: 15500, events: 55 },
  { name: 'Jul', students: 21000, events: 65 },
];

export default function AdminDashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null; // Let middleware handle redirect or show a loader
  }

  return (
    <div className="container mx-auto p-6 md:p-12 mt-16 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome back, {user.firstName || 'Admin'}</h1>
          <p className="text-muted-foreground text-lg">Here's an overview of IgnoVex platform growth.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          System Online
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Users className="w-24 h-24" />
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Total Students</p>
          <h2 className="text-4xl font-bold tracking-tight mb-2">45,231</h2>
          <p className="text-xs text-emerald-500 font-medium flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +12% from last month
          </p>
        </div>
        
        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <BookOpen className="w-24 h-24" />
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Active Programs</p>
          <h2 className="text-4xl font-bold tracking-tight mb-2">124</h2>
          <p className="text-xs text-emerald-500 font-medium flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +4 new this week
          </p>
        </div>

        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Calendar className="w-24 h-24" />
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Events Hosted</p>
          <h2 className="text-4xl font-bold tracking-tight mb-2">892</h2>
          <p className="text-xs text-emerald-500 font-medium flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" /> +24 this month
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary to-violet-600 rounded-2xl p-6 shadow-md flex flex-col text-white">
          <p className="text-sm font-medium text-white/80 mb-1">Avg. Placement Rate</p>
          <h2 className="text-4xl font-bold tracking-tight mb-2">94.2%</h2>
          <p className="text-xs text-white/90 font-medium mt-auto">Top 1% Global Ranking</p>
        </div>
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-card border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Student Growth (2026)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '8px', border: '1px solid hsl(var(--border))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Area type="monotone" dataKey="students" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorStudents)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Event Engagement</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '8px', border: '1px solid hsl(var(--border))' }}
                />
                <Line type="monotone" dataKey="events" stroke="hsl(var(--violet-500))" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
