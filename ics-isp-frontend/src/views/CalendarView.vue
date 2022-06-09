<template>
  <div>
    <v-row
      no-gutters
      style="flex-wrap: nowrap;"
    >
      <v-col
        cols='10'
        style="min-width: 55%; "
        class='flex-grow-0 flex-shrink-1'
      >
        <div>
          <v-calendar
            class="custom-calendar max-w-full"
            :masks="masks"
            :attributes="attributes"
            disable-page-swipe
            is-expanded
          >
            <template #day-popover="{ day, dayTitle, attributes }">
              <div class="text-xs text-gray-300 font-semibold text-center">
                {{ dayTitle }}
              </div>

              <v-hover
              v-slot="{ hover }"
              >
                <div class="text-{{hover ? secondary : white}}">
                  <button @click="refreshFocusedAppointments(day)" :color="hover ? secondary : white">
                    You have {{attributes.length}} appointment(s) scheduled
                  </button>
                </div>
              </v-hover>


            </template>
          </v-calendar>
        </div>
      </v-col>
      <v-col
        cols="4"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
        <div class="d-flex flex-column">
          <v-card v-for="appointment in focusedAppointments" :key="appointment" min-width="344">
            <v-card-text>
              <p class="text-h4">
                {{appointment.customData.appointmentTitle}}
              </p>
              <p>{{appointment.dates.getHours()}}:{{appointment.dates.getMinutes()}}</p>
              <div class="text--primary">
                {{appointment.customData.appointmentdesc}}
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import calDataService from "@/services/calDataService"
import 'v-calendar/dist/style.css'
import patientDataService from "@/services/patientDataService"

export default {
    name: 'Calendar',
    data() {
      return{
        masks: {
          weekdays: 'WWW',
        },
        attributes: [],
        focusedAppointments: [],

        patient: [],
      }
    },
    methods: {
      async getAttributes(){
        let rawAttributes = await calDataService.findAll();
        
        rawAttributes = rawAttributes.data

        let testData = [];
        rawAttributes.forEach(data => {
          
          const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']

          const newDate = {
            key: data._id,
            dot: {
              color: colors[Math.floor(Math.random()*colors.length)]
            },
            
            customData: {
              appointmentTitle: data.appointmentTitle,
              patientHCNumber: data.patientHCNumber,
              appointmentdesc: data.appointmentdesc,
              notes: data.notes,
              class: 'bg-secondary', 
              hour: new Date(data.dateTime).getHours(),
              minute: new Date(data.dateTime).getMinutes(),
            },
            dates: new Date(data.dateTime),
            popover: true,
          }
          testData.push(newDate)
        })

        testData.sort((a, b) => { return Date.parse(a.dates) - Date.parse(b.dates) } )
        return testData
      },
      refreshFocusedAppointments(day){
        const comparedToDate = day.id

        let focusedAppointments = []

        this.attributes.forEach(data => {
          const date = new Date(data.dates)
          const year = date.getFullYear()
          let month = date.getMonth()+1

          if (month < 10){
            month = "0" + month
          }          
          let day = date.getDate()
          if (day < 10){
            day = "0" + day
          }

          const dateString = year + "-" + month + "-" + day

          if (dateString === comparedToDate){
            focusedAppointments.push(data)
          }
        })
        this.focusedAppointments = focusedAppointments
      }
    },    
    async mounted() {
      this.attributes = await this.getAttributes();

      this.users = await calDataService.findAll()
    }
}
</script>