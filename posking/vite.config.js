// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
 
//   plugins: [
//     tailwindcss(),
//   ],
// })
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/PoskingReactApp/", 
  plugins: [
    tailwindcss(),
  ],
})