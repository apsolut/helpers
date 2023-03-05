#### default config
```js
module.exports = {
    mode: 'jit',
    content: [
        './source/**/*.{scss,js}',
        './modules/**/*.html',
        './php/**/*.php',
        './index.html',
    ],
    theme: {
        extend: {
            maxWidth: {
                'icon' : '32px',
            },
        },
        fontFamily: {
            'body': ['"Open Sans"'],
        },

        fontSize: {
            '18': ['1.15rem', '1'],
            'lg': ['1.65rem', '1'],
            'xl': ['1.85rem', '1'],
            '2xl': ['2.1rem', {
                lineHeight: '2rem',
                letterSpacing: '-0.01em',
                fontWeight: '500',
            }],
            '3xl': ['2.25rem', '1'],
            '4xl': ['3.1rem', '1'],
            '5xl': ['3.85rem', '1'],
            '6xl': ['4.35rem', '1'],
            'hero': ['6.25rem', '1'],
        },
        colors: {
            'red': '#680022',
            'blue': '#1732e0',
            'indigo': '#3f14d7',
            'green': '#5ACD4F',
            'green-dark': '#6CA67D',
            'yellow': '#FFCF00',
            'pink': '#FA3D7A',
            'gray': '#4a4642',
            'gray-dark': '#23211f',
            'gold': '#e5cc89',
            'gold-dark': '#d7bf80',
            'light': '#F5E9DC',
            'black': '#1A1818',
            'white': '#FFFFFF',
        },
    },
    plugins: [

    ],
}

```