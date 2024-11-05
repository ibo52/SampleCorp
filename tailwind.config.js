/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'dancing-script': ['Dancing Script', 'cursive'],
        'satisfy':['Satisfy', 'cursive']
      },
      colors:{//theme variables from base css
        'theme-text-color':'var(--color-text)',
        'theme-background-color':'var(--color-background)',
        'theme-background-color-soft':'var(--color-background-soft)',
        'theme-background-color-mute':'var(--color-background-mute)',
        //custom theme variables from base css which is defined to be tailwind compatible
        'theme-color':'rgb(var(--color-theme) / <alpha-value>)',
        'theme-gradient-from':'rgb(var(--theme-gradient-from) / <alpha-value>)',
        'theme-gradient-to':'rgb(var(--theme-gradient-to) / <alpha-value>)'
      }
    },
    'animation': {
            'gradient-x':'gradient-x 12s ease infinite',
            'gradient-y':'gradient-y 12s ease infinite',
            'gradient-xy':'gradient-xy 12s ease infinite',
            'slider':'slider 15s linear infinite'
        },
        'keyframes': {
            'gradient-y': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'center top'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'center center'
                }
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'slider':{
                '0%': {
                    'transform': 'translateX(0%)'
               },
                '100%': {
                    'transform':'translateX(-50%)',

                }
            }
        }
  },
  plugins: [],
}

