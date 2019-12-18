const reviewInputs = {
  firstName: {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "First Name"
  },
  lastName: {
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Last Name"
  },
  email: {
    label: "E-mail",
    name: "email",
    type: "email",
    placeholder: "Email"
  },
  keepAnonymous: {
    name: "keepAnonymous",
    label: "Keep Anonymous?"
  },
  title: {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Title"
  },
  userReview: {
    label: "Your review",
    name: "userReview",
    type: "textarea",
    placeholder: "Your review"
  },
  pros: {
    label: "Pros",
    name: "pros",
    type: "textarea",
    placeholder: "Pros"
  },
  cons: {
    label: "Cons",
    name: "cons",
    type: "textarea",
    placeholder: "Cons"
  },
  school: {
    label: "School",
    name: "school",
    placeholder: "school"
  },
  course: {
    label: "Course",
    name: "course",
    placeholder: "course"
  },
  programType: {
    label: "Program type",
    name: "programType",
    placeholder: "programType"
  },
  location: {
    label: "Location",
    name: "location",
    placeholder: "location"
  },
  graduationDate: {
    label: "Graduation date",
    name: "graduationDate",
    format: "YYYY/MM/DD"
  },
  monthsForAJob: {
    label: "How long did it take to find a job? (months)",
    name: "monthsForAJob",
    type: "number",
    min: 0
  },
  salary: {
    label: "What is your salary? ($)",
    name: "salary",
    type: "number",
    min: 0
  }
};

export default reviewInputs;