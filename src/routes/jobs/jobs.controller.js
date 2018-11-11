const db = require("../../utils/database.js");

console.log(db);

const jobsController = (req, res) => { 
  console.log("iM HERE");
  db.collection('jobs').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        res.json(doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });


// return res.json({
//   jobs: [
// {
//     logo: "https://6fszjoe6bk-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/1405612741-airbnb-why-new-logo.jpg",
//     title: "Web Developer",
//     companyName: "Airbnb",
//     city: "San Francisco",
//     link: "https://www.airbnb.ca/?locale=en",
//     benefits: {
//         bathrooms: {
//             baby_change_table: true,
//             gender_neutral: true,
//             single_stall: false,
//             wheelchair: false
//         },
//         daysOff: {
//             health: true,
//             personal: false,
//             professional_development: true
//         },
//         employee_development: {
//             career_coaching: true,
//             employee_resource: false,
//             hackathons: true,
//             lunch_and_learns: true,
//             mentorship: true,
//             development_budget: false,
//             tuition_reimbursement: false
//         },
//         employment: {
//             flexible_hours: true,
//             name_blind_hiring: false,
//             personalized_workstation: true,
//             full_transit: false,
//             subsidized_transit: false,
//             relocation: true,
//             remote: false,
//             work_from_home: true
//         },
//         family: {
//             on_site_childcare: false,
//             subsidized_childcare: true,
//             parental_leave: true
//         },
//         finances: {
//             stock_plan: true,
//             retirement_savings: true
//         },
//         health: {
//             dental: true,
//             employee_assistance: false,
//             flexible_spending: true,
//             full_gym: true,
//             subsidized_gym: false,
//             wellness_budget: false,
//             health: true,
//             vision: true
//         },
//         insurance: {
//             life: true,
//             disability: true,
//             travel: true
//         },
//         office: {
//             snacks: true,
//             meditation: false,
//             prayer: false,
//             pumping: true,
//             stand_up_desks: true,
//             accessible: true
//         },
//         policy: {
//             anti_harassment: true,
//             code_of_conduct: true,
//             parental_leave: true
//         },
//         social: {
//             daily_lunch: false,
//             weekly_lunch: true,
//             monthly_outings: true,
//             quarterly_outings: true
//         }
//     }
// }
//   ]
// });
};

module.exports = {
  jobsController,
};
