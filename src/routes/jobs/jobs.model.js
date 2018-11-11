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
                baby_change_table: data.baby_change_table,
                gender_neutral: data.gender_neutral,
                single_stall: data.single_stall,
                wheelchair: data.wheelchair
            },
            daysOff: {
                health: data.health,
                personal: data.personal,
                professional_development: data.professional_development
            },
            employee_development: {
                career_coaching: data.career_coaching,
                employee_resource: data.employee_resource,
                hackathons: data.hackathons,
                lunch_and_learns: data.lunch_and_learns,
                mentorship: data.mentorship,
                development_budget: data.development_budget,
                tuition_reimbursement: data.tuition_reimbursement
            },
            employment: {
                flexible_hours: data.flexible_hours,
                name_blind_hiring: data.name_blind_hiring,
                personalized_workstation: data.personalized_workstation,
                full_transit: data.full_transit,
                subsidized_transit: data.subsidized_transit,
                relocation: data.relocation,
                remote: data.remote,
                work_from_home: data.work_from_home
            },
            family: {
                on_site_childcare: data.on_site_childcare,
                subsidized_childcare: data.subsidized_childcare,
                parental_leave: data.parental_leave
            },
            finances: {
                stock_plan: data.stock_plan,
                retirement_savings: data.retirement_savings
            },
            health: {
                dental: data.dental,
                employee_assistance: data.employee_assistance,
                flexible_spending: data.flexible_spending,
                full_gym: data.full_gym,
                subsidized_gym: data.subsidized_gym,
                wellness_budget: data.wellness_budget,
                health: data.health,
                vision: data.vision
            },
            insurance: {
                life: data.life,
                disability: data.disability,
                travel: data.travel
            },
            office: {
                snacks: data.snacks,
                meditation: data.meditation,
                prayer: data.prayer,
                pumping: data.pumping,
                stand_up_desks: data.stand_up_desks,
                accessible: data.accessible
            },
            policy: {
                anti_harassment: data.anti_harassment,
                code_of_conduct: data.code_of_conduct,
                parental_leave: data.parental_leave
            },
            social: {
                daily_lunch: data.daily_lunch,
                weekly_lunch: data.weekly_lunch,
                monthly_outings: data.monthly_outings,
                quarterly_outings: data.quarterly_outings
            }
        }
    };
}

module.exports = translateJobsFromRequest;