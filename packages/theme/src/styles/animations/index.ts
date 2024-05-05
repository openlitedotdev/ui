export const animations = {
  animation: {
    'pulse': 'pulse 1s ease-in-out',
    'pop': 'pop 0.6s ease-out',
    'pulse-fade-in': 'pulse-fade-in 0.6s ease-out',
  },
  keyframes: {
    'pulse': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.1)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    'pop': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.1)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    'pulse-fade-in': {
      '0%': {
        transform: 'scale(0.9)',
        opacity: '0',
      },
      '50%': {
        transform: 'scale(1.05)',
        opacity: '0.5',
      },
      '100%': {
        transform: 'scale(1)',
        opacity: '1',
      },
    },
  },
}
