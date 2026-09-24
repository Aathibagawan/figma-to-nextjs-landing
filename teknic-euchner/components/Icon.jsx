const paths = {
  "user-settings": (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-3.87 3.58-7 8-7 .9 0 1.76.13 2.56.36" />
      <circle cx="18.5" cy="17.5" r="2.25" />
      <path d="M18.5 14.2v1M18.5 19.8v1M15.9 15.9l.7.7M20.4 20.4l.7.7M14.7 17.5h1M21.3 17.5h1M15.9 19.1l.7-.7M20.4 14.6l.7-.7" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 9.5h18M8 3v3.5M16 3v3.5" />
      <path d="M8.5 13.5l1.8 1.8 3.2-3.6" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17.5l9 5 9-5" />
    </>
  ),
  network: (
    <>
      <rect x="9.5" y="3" width="5" height="4" rx="0.5" />
      <rect x="3" y="17" width="5" height="4" rx="0.5" />
      <rect x="16" y="17" width="5" height="4" rx="0.5" />
      <path d="M12 7v4M12 11H5.5v6M12 11h6.5v6" />
    </>
  ),
  webhook: (
    <>
      <path d="M7.5 8.5a4.5 4.5 0 118 3.9" />
      <path d="M9 15.5A4.5 4.5 0 0117.5 13" />
      <circle cx="7" cy="8" r="1.6" />
      <circle cx="8" cy="16" r="1.6" />
      <circle cx="17.5" cy="12.5" r="1.6" />
    </>
  ),
};

export default function Icon({ name, className, size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
}
