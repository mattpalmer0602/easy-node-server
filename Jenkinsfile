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
        // Jenkins and the app run on the SAME VPS.
        // Change APP_DIR to the folder you clone into on the server.
        sh """
          cd /var/www/easy-node-server
          git pull origin main
          npm ci || npm install
          pm2 restart easy-node-server || pm2 start server.js --name easy-node-server
        """
      }
    }
  }
}
