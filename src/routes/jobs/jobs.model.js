const setToFalse = (trueOrFalse) => {
  if (trueOrFalse !== true || false) {
    return false;
  }
};

const translateJobsFromRequest = (data) => {
// transform from JSON object into an object to put into state
  return {
    logo: "https://d3bza9ldbeb18h.cloudfront.net/assets/placeholder-company-b9d0a167b1f7460768517d115285de2337c6e2a84f4285617722efa587c693fc.png",
    title: data.LastName,
    companyName: data.firstName,
    city: data.city,
    link: data.link,
    benefits: {
      bathrooms: {
        baby_change_table: setToFalse(data.baby_change_table),
        gender_neutral: setToFalse(data.gender_neutral),
        single_stall: setToFalse(data.single_stall),
        wheelchair: setToFalse(data.wheelchair),
      },
      daysOff: {
        health: setToFalse(data.health),
        personal: setToFalse(data.personal),
        professional_development: setToFalse(data.professional_development),
      },
      employee_development: {
        career_coaching: setToFalse(data.career_coaching),
        employee_resource: setToFalse(data.employee_resource),
        hackathons: setToFalse(data.hackathons),
        lunch_and_learns: setToFalse(data.lunch_and_learns),
        mentorship: setToFalse(data.mentorship),
        development_budget: setToFalse(data.development_budget),
        tuition_reimbursement: setToFalse(data.tuition_reimbursement),
      },
      employment: {
        flexible_hours: setToFalse(data.flexible_hours),
        name_blind_hiring: setToFalse(data.name_blind_hiring),
        personalized_workstation: setToFalse(data.personalized_workstation),
        full_transit: setToFalse(data.full_transit),
        subsidized_transit: setToFalse(data.subsidized_transit),
        relocation: setToFalse(data.relocation),
        remote: setToFalse(data.remote),
        work_from_home: setToFalse(data.work_from_home),
      },
      family: {
        on_site_childcare: setToFalse(data.on_site_childcare),
        subsidized_childcare: setToFalse(data.subsidized_childcare),
        parental_leave: setToFalse(data.parental_leave),
      },
      finances: {
        stock_plan: setToFalse(data.stock_plan),
        retirement_savings: setToFalse(data.retirement_savings),
      },
      health: {
        dental: setToFalse(data.dental),
        employee_assistance: setToFalse(data.employee_assistance),
        flexible_spending: setToFalse(data.flexible_spending),
        full_gym: setToFalse(data.full_gym),
        subsidized_gym: setToFalse(data.subsidized_gym),
        wellness_budget: setToFalse(data.wellness_budget),
        health: setToFalse(data.health),
        vision: setToFalse(data.vision),
      },
      insurance: {
        life: setToFalse(data.life),
        disability: setToFalse(data.disability),
        travel: setToFalse(data.travel),
      },
      office: {
        snacks: setToFalse(data.snacks),
        meditation: setToFalse(data.meditation),
        prayer: setToFalse(data.prayer),
        pumping: setToFalse(data.pumping),
        stand_up_desks: setToFalse(data.stand_up_desks),
        accessible: setToFalse(data.accessible),
      },
      policy: {
        anti_harassment: setToFalse(data.anti_harassment),
        code_of_conduct: setToFalse(data.code_of_conduct),
        parental_leave: setToFalse(data.parental_leave),
      },
      social: {
        daily_lunch: setToFalse(data.daily_lunch),
        weekly_lunch: setToFalse(data.weekly_lunch),
        monthly_outings: setToFalse(data.monthly_outings),
        quarterly_outings: setToFalse(data.quarterly_outings),
      },
    },
  };
};

module.exports = translateJobsFromRequest;
