const HapticPattern = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-3 rounded-sm bg-danger/80"
              style={{
                animation: `vibrate 0.3s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
          <div className="mx-1 h-6 w-1 rounded-full bg-muted" />
          {[4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-6 w-3 rounded-sm bg-danger/80"
              style={{
                animation: `vibrate 0.3s ease-in-out ${(i - 3) * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <p className="text-xs font-medium text-danger-foreground">
        Haptic Output: Urgent Pulse (Danger)
      </p>
    </div>
  );
};

export default HapticPattern;
