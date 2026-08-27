pipeline {
  agent any

  stages {
    stage("Install") {
      steps {
        sh "npm ci || npm install"
      }
    }

    stage("Deploy") {
      steps {
        withCredentials([string(credentialsId: "APP_SECRET", variable: "APP_SECRET")]) {
          sh '''
            cd /var/www/easy-node-server
            git pull origin main
            npm ci || npm install
            export APP_SECRET

            pm2 restart easy-node-server --update-env || pm2 start server.js --name easy-node-server --update-env
            pm2 save

            node -e "console.log(JSON.stringify({ secret: process.env.APP_SECRET }))" \
              | curl -sS -f -X POST http://153.75.90.124:3000/secret \
                  -H "Content-Type: application/json" \
                  -d @-
          '''
        }
      }
    }
  }
}