export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated spinner */}
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-muted animate-spin border-t-primary" />
          <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-transparent animate-ping border-t-primary/20" />
        </div>
        <p className="text-muted-foreground text-sm font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
