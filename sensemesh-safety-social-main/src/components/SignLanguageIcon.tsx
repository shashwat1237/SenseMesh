const SignLanguageIcon = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-danger/10 p-2">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="h-10 w-10 text-danger"
          strokeWidth="2"
          stroke="currentColor"
        >
          {/* Raised hand with warning gesture */}
          <path
            d="M24 8v8M18 12v12M30 12v12M12 20v8c0 8 6 14 14 14s14-6 14-14v-8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="36" r="2" fill="currentColor" />
          <path
            d="M20 28l4-4 4 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-[10px] font-bold text-primary-foreground">
          !
        </div>
      </div>
      <p className="text-xs font-medium text-danger-foreground">
        Visual Sign: Danger/Alert
      </p>
    </div>
  );
};

export default SignLanguageIcon;
