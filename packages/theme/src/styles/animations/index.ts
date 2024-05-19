export const animations = {
  animation: {
    'pulse': 'pulse 1s ease-in-out',
    'pop': 'pop 0.6s ease-out',
    'pulse-fade-in': 'pulse-fade-in 0.3s ease-out',
    'dialog-in': 'dialog-in 0.3s ease-out',
    'dialog-out': 'dialog-out 0.3s ease-out',
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
    'dialog-in': {
      '0%': {
        transform: 'translate(-50%, -50%) scale(0.9)',
        opacity: '0',
      },
      '100%': {
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: '1',
      },
    },
    'dialog-out': {
      '0%': {
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: '1',
      },
      '100%': {
        transform: 'translate(-50%, -50%) scale(0.9)',
        opacity: '0',
      },
    },
  },
}
