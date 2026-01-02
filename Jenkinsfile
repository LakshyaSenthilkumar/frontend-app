pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to S3') {
            steps {
                sh '''
                  aws --version
                  aws s3 sync . s3://orderapp-frontend --delete
                '''
            }
        }
    }
}
