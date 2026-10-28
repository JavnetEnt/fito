# FITO setup (Step 1)

1. From the `fito/` folder:  `npm install`
2. Create the client:        `npm create vite@latest client -- --template react`
3. Install client deps:      `npm --prefix client install`
4. Add the proxy to `client/vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { proxy: { "/api": "http://localhost:4000" } },
});
```

5. Run both together: `npm run dev`
6. Test the API: open http://localhost:4000/api/health
