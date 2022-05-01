<template>
  <div id="expeience" class="ma-4">
    <v-card
      color="#e1f4f3"
      v-for="(job, ind) in this.jobs"
      class="ma-4"
      :key="ind"
    >
      <v-list-item>
        <v-list-item-content>
          <v-img :src="job.img" contain width="80" height="80" />
          <v-list-item-title class="headline mb-1">{{
            job.position
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ job.time }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="(res, index) in job.responsibilities" :key="index">
        {{ res }}
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    jobs: [
      {
        company: "Wish",
        position: "Software Engineer ",
        time: "January 2022 – April 2022",
        img: require("@/assets/images/wish.png"),
        responsibilities: [
          "Worked on Entity Resolution team and discovered more than 100k merchant entities",
          "Developed microservices using Python, GraphQL, and MongoDB under timing constraints",
          "Designed and implemented gRPC APIs to help more than 2k Wish merchants link their accounts",
          "Created an internal tool using Cytoscape.js and React to visualize merchant fraud graph",
          "Built Business Intelligence dashboards to monitor KPIs using Apache Superset and SQL",
          "Created Grafana dashboards to monitor microservice metrics, such as latency and failure reasons",
        ],
      },
      {
        company: "ActiveState Software Inc.",
        position: "Developer",
        time: "May 2021 – August 2021",
        img: require("@/assets/images/as.png"),
        responsibilities: [
          "Developed scalable ETL pipelines using Python (with Argo framework), SQL and Kafka",
          "Achieved a performance increase of 500 percent by refactoring pipelines using batch-processing",
          "Designed a data pipeline from scratch to source packages using GitHub API. Ran design meetings to discuss with coworkers from different teams",
          "Created tools to automate development workflows, reduced time to publish a workflow by half",
          "Monitored pipeline health. Solved multiple production issues under time constraint",
        ],
      },
      {
        company: "HubHead Corp.",
        position: "Developer",
        time: "September 2020 - December 2020",
        img: require("@/assets/images/hubhead.png"),
        responsibilities: [
          "Developed Enterprise Asset Management Systems (EAM) in Java/Groovy",
          "Led the localization of software solution, increased number of supported languages from 1 to 4",
          "Wrote Groovy scripts that validates data integrity and fixes data issues to replace manual data validation, increased data validation speed by 100 times",
          "Created a program that helps customers sanitize bill of materials (BOM) records",
          "Wrote Groovy scripts that convert SAP export files to internal import files using Apache POI",
        ],
      },
      {
        company: "University of Waterloo",
        position: "Research Assistant",
        time: "January 2020 - April 2020",
        img: require("@/assets/images/uw.svg"),
        responsibilities: [
          "Worked on a wireless and batteryless user interface system based on radio wave technology, and was in charge of all software involved",
          "Wrote code to collect, process and classify data from RFID reader in real time using Python, C# and Go",
          "Designed a multi-level classification algorithm using machine learning techniques like SVM and signal processing techniques like downsampling and filtering",
          "Trained said algorithm using cross-validation, resulted in a significant boost of accuracy to above 90 percent",
          "Built high performance servers with Go and Python to handle real time data-collection and classification algorithm",
          "Built front end UI using HTML, CSS and Chart.js to demonstrate user input and live signal",
          "Designed scalable architecture that increased system coverage area by 4 times",
        ],
      },
      {
        company: "Pelmorex Corp.",
        position: "Web QA Developer",
        time: "January 2019 - April 2019",
        img: require("@/assets/images/twn.png"),
        responsibilities: [
          "Worked on projects with test-driven-development process in an Agile environment, participated in and held scrums",
          "Collaborated with other developers to design testing strategies in order to support new features and increased website traffic",
          "Took initiative as a self-starter to independently solve bugs in Production level code",
          "Wrote and implemented tests against microservices in JavaScript",
          "Designed APIs using Express.js framework, worked with Vue.js and Nuxt.js framework, familiar with Node.js asynchronous features",
          "Tested using Jest, Mocha, Ava and PHPUnit framework, wrote end-to-end tests with Puppeteer, Selenium and created load tests with k6",
          "Wrote PowerShell scripts to schedule tests and output test outcome to file",
          "Debugged Node.js applications in docker containers and containerized several Node.js applications/tests with Docker",
          "Monitored and debugged with kubectl, Grafana and Kibana",
        ],
      },
    ],
  }),
};
</script>
