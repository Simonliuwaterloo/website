<template>
<div>
    <v-row style="height: 20px;">
    </v-row>

    <div 
      v-for="(sec, name) in this.skills"
      :key="name"
    >
    <v-sheet

      class="mx-auto"
      elevation="8"
      max-width="800"
    >
      <div class="text-center"><h3 class="title">{{name}}</h3></div>
      <v-slide-group
        class="pa-4"
        :show-arrows=true
        :center-active=false
      >
        <v-slide-item
          v-for="(lang, ind) in sec"
          :key="ind"
        >
          <v-card
            color="#e1f4f3"
            class="ma-4"
            height="200"
            width="200"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-img 
                  :src="lang.img" 
                  contain
                  width="80"
                  height="80"/>
                <v-list-item-title class="headline mb-1">{{lang.name}}</v-list-item-title>
                <v-list-item-subtitle>{{lang.des}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <v-row  style="height: 20px;">
    </v-row>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Skills',

    data: () => ({
      skills:{
        "Languages": [
          {
            name: "JavaScript",
            des: "Node.js, backend design, frontend design",
            img:  require('@/assets/images/js.png')
          },
          {
            name: "Python",
            des: "data science",
            img:  require('@/assets/images/py.png')
          },
          {
            name: "C++",
            des: "embedded systems",
            img:  require('@/assets/images/cpp.png')
          },
          {
            name: "Dart",
            des: "mobile development",
            img:  require('@/assets/images/dart.png')
          },
          {
            name: "C#",
            des: "embedded system, LLRP protocol",
            img:  require('@/assets/images/cs.png')
          },
          {
            name: "Go",
            des: "backend design",
            img:  require('@/assets/images/go.png')
          },
          {
            name: "SQL",
            des: "",
            img:  require('@/assets/images/sql.png')
          }, 
          {
            name: "MongoDB",
            des: "",
            img:  require('@/assets/images/mongodb.png')
          }
        ],
        "Frameworks/Libraries": [
          {
            name: "Vue.js",
            des: "fronetnd development",
            img:  require('@/assets/images/vue.png')
          },
          {
            name: "Flutter",
            des: "mobile development",
            img:  require('@/assets/images/flutter.png')
          },
          {
            name: "NumPy",
            des: "data science",
            img:  require('@/assets/images/np.png')
          },
          {
            name: "pandas",
            des: "data science",
            img:  require('@/assets/images/pd.png')
          },
          {
            name: "scikit-learn",
            des: "data science",
            img:  require('@/assets/images/sklearn.png')
          },
          {
            name: "Matplotlib",
            des: "data visualization",
            img:  require('@/assets/images/matplotlib.png')
          },
        ],
        "Commandline tools": [
          {
            name: "Git",
            des: "version control",
            img:  require('@/assets/images/git.png')
          }, 
          {
            name: "Bash",
            des: "shell",
            img:  require('@/assets/images/bash.png')
          },  
          {
            name: "Vim",
            des: "code editor",
            img:  require('@/assets/images/vim.png')
          },
          {
            name: "PowerShell",
            des: "shell",
            img:  require('@/assets/images/ps.png')
          }, 
          {
            name: "Package Managers",
            des: "pacman, apt, npm",
            img:  require('@/assets/images/pacmanagers.png')
          }, 
        ],
        "Operating Systems": [
          {
            name: "Windows",
            des: "Microsoft® Office suite",
            img:  require('@/assets/images/windows.png')
          }, 
          {
            name: "Manjaro",
            des: "pacman",
            img:  require('@/assets/images/manjaro.png')
          },
          {
            name: "Ubuntu",
            des: "",
            img:  require('@/assets/images/ubuntu.png')
          },
          {
            name: "Raspbian",
            des: "",
            img:  require('@/assets/images/raspbian.png')
          }
        ]
      }
    }),
}
</script>