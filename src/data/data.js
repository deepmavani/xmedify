export const specialists = [
  { id: 1, name: "Dr. Lesley Hull", specialisation: 'Medicine' },
  { id: 2, name: 'Dr. Ahmad Khan', specialisation: 'Neurologist' },
  { id: 3, name: "Dr. Heena Sachdeva", specialisation: 'Orthopadics' },
  { id: 4, name: "Dr. Ankur Sharma", specialisation: 'Medicine' },
  { id: 5, name: "Dr. Lesley Hull", specialisation: 'Medicine' },
  { id: 6, name: "Dr. Ahmad Khan", specialisation: 'Orthopadics' },
  { id: 7, name: "Dr. Lesley Hull", specialisation: 'Medicine' },
  { id: 8, name: "Dr. Ankur Sharma", specialisation: 'Medicine' },
  { id: 9, name: "Dr. Lesley Hull", specialisation: 'Orthopadics' },
]
export let offers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const dataFAQ = [
  {
    que: 'Why we are different from others?', ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    que: 'Why choose our medical for your family?', ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.`
  },
  {
    que: 'Trusted & experience senior care & love', ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  }
  ,
  {
    que: 'How to get appointment for emergency cases?', ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  }
]
// [
  //   { date: '2024-05-10', day: 'Today', slots: 3 },
  //   { date: '2024-05-11', day: 'Tommorow', slots: 9 },
  //   { date: '2024-05-12', day: 'Wed', slots: 6 },
  //   { date: '2024-05-13', day: 'Thu', slots: 12 },
  //   { date: '2024-05-14', day: 'Fri', slots: 21 },
  //   { date: '2024-05-15', day: 'Today', slots: 3 },
  //   { date: '2024-05-16', day: 'Today', slots: 3 },
  // ]
  export let data = [
    {
      'slots': getSlots(),
      "Provider ID": "020024",
      "Hospital Name": "CENTRAL PENINSULA GENERAL HOSPITAL",
      "Address": "250 HOSPITAL PLACE",
      "City": "SOLDOTNA",
      "State": "Alaska",
      "ZIP Code": 99669,
      "County Name": "",
      "Phone Number": 9072624404,
      "Hospital Type": "Acute Care Hospitals",
      "Hospital Ownership": "Voluntary non-profit - Other",
      "Emergency Services": "Yes",
      "Meets criteria for meaningful use of EHRs": "Y",
      "Hospital overall rating": 3,
      "Hospital overall rating footnote": "",
      "Mortality national comparison": "Same as the national average",
      "Mortality national comparison footnote": "",
      "Safety of care national comparison": "Same as the national average",
      "Safety of care national comparison footnote": "",
      "Readmission national comparison": "Same as the national average",
      "Readmission national comparison footnote": "",
      "Patient experience national comparison": "Same as the national average",
      "Patient experience national comparison footnote": "",
      "Effectiveness of care national comparison": "Same as the national average",
      "Effectiveness of care national comparison footnote": "",
      "Timeliness of care national comparison": "Below the national average",
      "Timeliness of care national comparison footnote": "",
      "Efficient use of medical imaging national comparison": "Same as the national average",
      "Efficient use of medical imaging national comparison footnote": ""
    }
  ]
  export function getDayFromNo  (no)  {
    switch (no) {
      case 0: return "Sunday"
      case 1: return "Monday"
      case 2: return "Tuesday"
      case 3: return "Wednesday"
      case 4: return "Thusrday"
      case 5: return "Friday"
      case 6: return "Saturday"
      default: return;
    }
  }
  export function getHourFromNo  (no)  {
    if (no > 0 && no <= 12)
      return no;
    return no % 12
  }
  
  export function getMonthFromNo(no){
    switch (no) {
      case 0: return "Jan"
      case 1: return "Feb"
      case 2: return "Mar"
      case 3: return "Apr"
      case 4: return "May"
      case 5: return "Jun"
      case 6: return "Jul"
      case 7: return "Aug"
      case 8: return "Sep"
      case 9: return "OCT"
      case 10: return "Nov"
      case 11: return "Dec"
      default: return;
    }
  }
  export function getSlots  ()  {
    let current = new Date()
    let slotsList = []
    let dt = current.getFullYear() + '-' + getMonthFromNo(current.getMonth()) + '-' + current.getDate()
    // let time = current.getHours
    
    let slot = {
      date: dt, day: "Today", slots: getSlot(current) 
    }
    slotsList.push({...slot})
    current=new Date(current.getTime()+1000*60*60*24)
    dt = current.getFullYear() + '-' + getMonthFromNo(current.getMonth()) + '-' + current.getDate()
    let slot1 = {
      date: dt, day: "Tommorow", slots: getSlot(current)
    }
    slotsList.push({...slot1})
    
    for(let i=3;i<=7;i++){
      current=new Date(current.getTime()+1000*60*60*24)
      dt = current.getFullYear() + '-' + getMonthFromNo(current.getMonth()) + '-' + current.getDate()
      let slot = {
        date: dt, day: getDayFromNo(current.getDay()), slots: getSlot(current)
      }
      slotsList.push({...slot})
    }
    
    return slotsList
  }
  
export let slots = getSlots()
  
  export function getSlot(date = new Date()) {
    let current = new Date()
  if (date.getDate() > current.getDate()) {
    return {
      Morning: ['10:30AM', '11:00AM', '11:3oAM'],
      Afternoon: ['12:00PM', '12:30PM', '01:30PM', '02:0 PM', '02:30PM', '03:30PM',],
      Evening: ['5:00PM', '5:30PM', '6:30PM', '07:30PM',]
    }
  }
  if (date.getDate() === current.getDate()) {
    let Morning = []
    let Afternoon = []
    let Evening = []

    for (let i = date.getHours() + 1; i < 12; i++) {
      if (i >= 10) {
        Morning.push(`${i}:00AM`)
        Morning.push(`${i}:30AM`)
      }
    }
    for (let i = date.getHours() + 1; i < 17; i++) {
      if (i >= 12) {
        Afternoon.push(`${getHourFromNo(i)}:00PM`)
        Afternoon.push(`${getHourFromNo(i)}:30PM`)
      }
    }
    for (let i = date.getHours() + 1; i < 20; i++) {
      if (i >= 17) {
        Evening.push(`${getHourFromNo(i)}:00PM`)
        Evening.push(`${getHourFromNo(i)}:30PM`)
      }
    }
    return {
      Morning: Morning,
      Afternoon: Afternoon,
      Evening: Evening
    }
  }
}