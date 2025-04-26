pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'   // Use the same name you configured NodeJS inside Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/pravin7200/pravinOrangeHRM.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Publish Report') {
            steps {
                bat 'npx playwright show-report --port=9223' 
                echo 'HTML report is available if needed.'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the error logs!'
        }
    }
}
