interface MoselLogoProps {
  fontSize?: string;
  className?: string;
}

export function MoselLogo({ fontSize = '1.5rem', className = '' }: MoselLogoProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
        fontSize,
        letterSpacing: '-0.01em',
        lineHeight: 1,
      }}
    >
      <b style={{ color: '#6EE7B7', fontWeight: 700 }}>&lt;</b>
      <span style={{ color: '#ECF1F3' }}>mosel</span>
      <b style={{ color: '#6EE7B7', fontWeight: 700, fontStyle: 'italic' }}>/</b>
      <b style={{ color: '#6EE7B7', fontWeight: 700 }}>&gt;</b>
    </span>
  );
}
