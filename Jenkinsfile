@Library('jenkins-library@master') _
 
pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
            vcCheckout(
                branch: "master",
                url: "https://github.com/hnaung/shared-library-demo.git"
            )
            }
    }
    }
}

