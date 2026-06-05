import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function ShopifyIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.5 2L7 9.5C7 9.5 8 9.75 9.25 9.5L8.5 2Z"
        fill="currentColor"
      />
      <path
        d="M12.5 4C11.5 4.25 9 5 9 5L9.5 2.5C9.5 2.5 13 2 13.75 1.75C14.5 1.5 14.25 2.5 14.25 2.5L14 4C13.25 3.75 12.75 3.75 12.5 4Z"
        fill="currentColor"
      />
      <path
        d="M6 10L2 11L9.5 30.5L14 29.5L6 10Z"
        fill="currentColor"
      />
      <path
        d="M18 10L14 29.5L9.5 30.5L15 9.5L18 10Z"
        fill="currentColor"
      />
      <path
        d="M17.5 9L21 9.5L18.5 18L16 17.5L17.5 9Z"
        fill="currentColor"
      />
      <path
        d="M18 6C18 6 16 6.5 15.5 6.5C15 6.5 15.25 7 15.5 7.5L16.5 9L19 8.5L19.5 6.5C19.5 6.5 19 6 18 6Z"
        fill="currentColor"
      />
      <path
        d="M21.5 9.5L24.5 10L23 16.5L20.5 16L21.5 9.5Z"
        fill="currentColor"
      />
      <path
        d="M23 6.5C23 6.5 21 6.75 20.5 6.75C20 6.75 20.5 7.5 20.75 8L21.5 9.5L24 9L24.5 7C24.5 7 24.25 6.25 23 6.5Z"
        fill="currentColor"
      />
      <path
        d="M24.5 10L28 11L25.5 23L23 22.5L24.5 10Z"
        fill="currentColor"
      />
      <path
        d="M26.5 6.75C26.5 6.75 25 7 24.5 7.25C24 7.5 24.25 8.25 24.5 8.75L25 10L28 9.5L28.5 7.5C28.5 7.5 28 6.5 26.5 6.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TikTokIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.3 0 .59.05.86.13v-3.5a6.37 6.37 0 0 0-.86-.06A6.38 6.38 0 0 0 2 15.81a6.38 6.38 0 0 0 6.38 6.38 6.38 6.38 0 0 0 6.38-6.38v-6.9a8.18 8.18 0 0 0 4.77 1.52V6.69h-.94z" />
    </svg>
  );
}

export function InstagramIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function StripeIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
    </svg>
  );
}

export function ZapierIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 0L4 8h6v8l8-8h-6V0z" />
    </svg>
  );
}

export function GoogleIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function HubSpotIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="4" r="2.5" />
      <circle cx="12" cy="20" r="2.5" />
      <circle cx="4" cy="12" r="2.5" />
      <circle cx="20" cy="12" r="2.5" />
      <path d="M10.5 6.5h3v5h-3zM6.5 10.5h5v3h-5zM12.5 10.5h5v3h-5z" />
    </svg>
  );
}

export function SlackIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

export function SalesforceIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.63 2.26.645-.28 1.354-.435 2.1-.435 2.668 0 4.835 2.233 4.835 4.988 0 2.755-2.167 4.988-4.834 4.988-.255 0-.505-.02-.75-.057a3.498 3.498 0 0 1-3.135 1.972 3.52 3.52 0 0 1-1.5-.336 4.205 4.205 0 0 1-3.615 2.058c-2.14 0-3.93-1.466-4.445-3.43a4.08 4.08 0 0 1-1.67.357 4.195 4.195 0 0 1-2.88-7.225A4.195 4.195 0 0 1 5.68 3.84a4.195 4.195 0 0 1 4.325 1.575z" />
    </svg>
  );
}

export function MercadoPagoIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
    </svg>
  );
}

export function PipedriveIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="4" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="8" width="4" height="12" rx="1" />
      <rect x="16" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}
