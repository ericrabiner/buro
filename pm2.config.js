module.exports = {
  apps: [
    {
      name: "buro-backend",
      script: "./server.js",
      instances: "max",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      exec_mode: "fork_mode",
      env: { NODE_ENV: "production" },
    },
  ],
};
