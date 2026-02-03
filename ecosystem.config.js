module.exports = {
    apps: [{
        name: "intersson-frontend",
        script: "npm",
        args: "start",
        cwd: "/opt/intersson/frontend",
        env: {
            PORT: 3000,
            NODE_ENV: "production"
        }
    }, {
        name: "intersson-backend",
        script: "/opt/intersson/frontend/backend/venv/bin/gunicorn",
        args: "intersson_backend.wsgi:application --bind 0.0.0.0:8000 --workers 3",
        cwd: "/opt/intersson/frontend/backend",
        interpreter: "none"
    }]
}
