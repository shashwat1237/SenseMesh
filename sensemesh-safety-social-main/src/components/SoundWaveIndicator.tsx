const SoundWaveIndicator = () => {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-danger animate-soundwave"
          style={{
            height: `${12 + Math.random() * 12}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWaveIndicator;
