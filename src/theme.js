const theme = {
  colors: {
    // 배경색 - 따뜻하고 자연스러운 톤
    base: '#FFF8F0', // 크림색 배경
    white: '#FFFFFF',

    // 주요 색상 - 농장/자연 테마
    primary: '#8B6F47', // 따뜻한 브라운 (주요 액션)
    primaryLight: '#A68A5E', // 밝은 브라운
    primaryDark: '#6D5635', // 진한 브라운

    secondary: '#5B8C5A', // 자연스러운 그린 (보조)
    secondaryLight: '#7CB342', // 밝은 그린
    secondaryDark: '#4A7349', // 진한 그린

    accent: '#FF8A65', // 따뜻한 코랄 (강조)
    accentLight: '#FFB74D', // 밝은 오렌지
    accentDark: '#F4511E', // 진한 오렌지

    // 보조 색상
    beige: '#F5EDE0', // 부드러운 베이지
    cream: '#FFF5E8', // 연한 크림

    // 텍스트 색상
    textPrimary: '#2C2C2C',
    textSecondary: '#666666',
    textMuted: '#999999',

    // UI 요소
    border: '#E8DDD0',
    borderLight: '#F0E8DC',

    // 상태 색상
    success: '#7CB342',
    warning: '#FFB74D',
    error: '#F4511E',
    info: '#5B8C5A',
  },
  radius: {
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    full: '9999px',
  },
  spacing: (n) => `${4 * n}px`,
  shadow: {
    xs: '0 1px 3px rgba(139, 111, 71, 0.08)',
    sm: '0 2px 8px rgba(139, 111, 71, 0.12)',
    md: '0 4px 16px rgba(139, 111, 71, 0.15)',
    lg: '0 8px 24px rgba(139, 111, 71, 0.18)',
    xl: '0 12px 32px rgba(139, 111, 71, 0.20)',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #8B6F47 0%, #A68A5E 100%)',
    secondary: 'linear-gradient(135deg, #5B8C5A 0%, #7CB342 100%)',
    accent: 'linear-gradient(135deg, #FF8A65 0%, #FFB74D 100%)',
    warm: 'linear-gradient(135deg, #FFF8F0 0%, #F5EDE0 100%)',
  },
};

export default theme;