import { h } from '@bolt/core/renderers';

export const FieldServiceGray = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 32 24">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M30 16l-.8-4H22v2.1a4.14 4.14 0 011-.1 4.93 4.93 0 014 2zm-8-6h6.8L28 6h-6zm4 9a3 3 0 00-5.1-2.1 3 3 0 104.2 4.2A2.88 2.88 0 0026 19zm-16 0a2.88 2.88 0 00-.9-2.1 2.9 2.9 0 00-4.2 0 2.9 2.9 0 000 4.2 2.9 2.9 0 004.2 0A2.88 2.88 0 0010 19zm10-4V3a1.08 1.08 0 00-.3-.7.91.91 0 00-.7-.3H3a.91.91 0 00-.7.3A1.08 1.08 0 002 3v12c0 .7.3 1 1 1a4.93 4.93 0 014-2 4.93 4.93 0 014 2h8a4.74 4.74 0 011-1zm12 2a1.08 1.08 0 01-.3.7.91.91 0 01-.7.3h-3.1a4.14 4.14 0 01.1 1 4.54 4.54 0 01-1.5 3.5A4.85 4.85 0 0123 24a4.69 4.69 0 01-3.5-1.5A4.85 4.85 0 0118 19v-.2h-6v.2a4.54 4.54 0 01-1.5 3.5A4.85 4.85 0 017 24a4.69 4.69 0 01-3.5-1.5A4.85 4.85 0 012 19v-.2a2 2 0 01-1.4-.6 2 2 0 01-.6-1.5V2.1A2 2 0 01.6.6 2 2 0 012 0h18a2 2 0 011.4.6 2 2 0 01.6 1.5V4h7c.7 0 1 .3 1 1z"
        data-name="Page-1"
      />
    </svg>
  );
};