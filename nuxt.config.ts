export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASEURL,
      supabaseKey: process.env.SUPABASEKEY,
    },
  },
});
