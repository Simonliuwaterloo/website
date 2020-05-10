<template>
  <div id="expeience">
    <v-row style="height: 20px;">
    </v-row>
    <v-card
      color="#e1f4f3"
      class="ma-4"
      v-for="(job, ind) in this.jobs"
      :key="ind"
    >
        <v-list-item >
          <v-list-item-content>
              <v-img 
              :src="job.img" 
              contain
              width="80"
              height="80"/>
              <v-list-item-title class="headline mb-1">{{job.position}}</v-list-item-title>
              <v-list-item-subtitle>{{job.time}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(res, index) in job.responsibilities"
          :key="index">
          {{res}}
        </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'Experience',
    data: () => ({
      jobs: [
        {
          company: "University of Waterloo",
          position: "Research Assistant",
          time: "January 2020 - April 2020",
          img:  require('@/assets/images/uw.svg'),
          responsibilities: [
            "Worked on a wireless and batteryless user interface system based on radio wave technology, and was in charge of all software involved",
            "Wrote code to collect, process and classify data from RFID reader in real time using Python, C# and Go",
            "Designed a multi-level classification algorithm using machine learning techniques like SVM and signal processing techniques like downsampling and filtering", 
            "Trained said algorithm using cross-validation, resulted in a significant boost of accuracy to above 90 percent",
            "Built high performance servers with Go and Python to handle real time data-collection and classification algorithm",
            "Built front end UI using HTML, CSS and Chart.js to demonstrate user input and live signal", 
            "Designed scalable architecture that increased system coverage area by 4 times"
          ]
        },
        {
          company: "Pelmorex Corp.",
          position: "Web QA Developer",
          time: "January 2019 - April 2019",
          img:  require('@/assets/images/twn.png'),
          responsibilities: [
            "Worked on projects with test-driven-development process in an Agile environment, participated in and held scrums",
            "Collaborated with other developers to design testing strategies in order to support new features and increased website traffic",
            "Took initiative as a self-starter to independently solve bugs in Production level code",
            "Wrote and implemented tests against microservices in JavaScript",
            "Designed APIs using Express.js framework, worked with Vue.js and Nuxt.js framework, familiar with Node.js asynchronous features",
            "Tested using Jest, Mocha, Ava and PHPUnit framework, wrote end-to-end tests with Puppeteer, Selenium and created load tests with k6",
            "Wrote PowerShell scripts to schedule tests and output test outcome to file",
            "Debugged Node.js applications in docker containers and containerized several Node.js applications/tests with Docker",
            "Monitored and debugged with kubectl, Grafana and Kibana"
          ]
        }
      ]
    })

}
</script>
